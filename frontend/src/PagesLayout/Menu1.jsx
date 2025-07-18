import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button, } from "react-bootstrap";
import { RiSearch2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { ShopContext } from "../Context/ShopContext";
import { categories } from "../assets/data";
import Title from "./Title";
import Item from "./Item";

const Menu1 = () => {
    const { foods } = useContext(ShopContext);
    const [category, SetCategory] = useState([]);
    const [sortType, SetSortType] = useState("relevant");
    const [filterFoods, SetFilterFoods] = useState([]);
    const [showCategories, SetShowCategories] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;

    const toggleFilter = (value, setState) => {
        setState((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value])
    }

    const applyFilters = () => {
        let filtered = [...foods];
        if (search) {
            filtered = filtered.filter((food) =>
                food.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (category.length) {
            filtered = filtered.filter((food) => category.includes(food.category));
        }
        return filtered;
    };

    const applySorting = (foodList) => {
        const sortedFoods = [...foodList];

        switch (sortType) {
            case "low":
                return sortedFoods.sort((a, b) => {
                    const aPrice = Object.values(a.price)[0];
                    const bPrice = Object.values(b.price)[0];
                    return aPrice - bPrice;
                });
            case "high":
                return sortedFoods.sort((a, b) => {
                    const aPrice = Object.values(a.price)[0];
                    const bPrice = Object.values(b.price)[0];
                    return bPrice - aPrice;
                });
            default:
                return sortedFoods;
        }
    };

    const toogleShowCategories = () => {
        SetShowCategories(!showCategories);
    };

    useEffect(() => {
        const filtered = applyFilters();
        const sorted = applySorting(filtered);
        SetFilterFoods(sorted);
        setCurrentPage(1);
    }, [category, sortType, foods, search]);

    const getPaginationFoods = () => {
        const startIndex = (currentPage - 1) * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        return filterFoods.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(filterFoods.length / itemPerPage);

    return (
        <section className="py-5">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={8} lg={6}>
                        <InputGroup className="shadow-sm rounded-pill overflow-hidden">
                            <InputGroup.Text className="bg-white border-2 border-end-0">
                                <RiSearch2Line style={{ cursor: "pointer" }} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name, category, or ingredient..."
                                className="border-2 border-start-0 px-3 py-2"
                            />
                            <Button
                                variant="outline-light"
                                onClick={toogleShowCategories}
                                className="bg-white text-dark border border-2 rounded-end"
                            >
                                <LuSettings2 />
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                {showCategories && (
                    <Row className="mb-5">
                        <Col>
                            <h5 className="mb-3">Select by Category</h5>
                            <div className="d-flex flex-wrap gap-2 gap-md-3">
                                {categories.map((cat) => {
                                    const isChecked = category.includes(cat.name);
                                    return (
                                        <div
                                            key={cat.name}
                                            role="button"
                                            onClick={() => toggleFilter(cat.name, SetCategory)}
                                            className={`d-flex align-items-center bg-light border border-4 px-3 py-2 rounded-pill flex-grow-1 flex-md-grow-0 ${isChecked ? "border border-danger text-danger" : ""
                                                }`}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                className="me-2 rounded-circle"
                                                style={{
                                                    height: "50px",
                                                    width: "50px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <span>{cat.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                )}

                <Row className="align-items-center mb-4">
                    <Col xs={12} md={6}>
                        <Title title1="Food" title2="Selection" />
                    </Col>
                    <Col xs={12} md={6} className="mt-3 mt-md-0">
                        <div className="d-flex justify-content-md-end justify-content-start">
                            <Form.Select
                                value={sortType}
                                onChange={(e) => SetSortType(e.target.value)}
                                className="w-auto"
                            >
                                <option value="relevant">Relevant</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>

                <Row className="g-4">
                    {getPaginationFoods().length > 0 ? (
                        getPaginationFoods().map((food) => (
                            <Col xs={12} sm={6} lg={4} xl={3} key={food._id}>
                                <Item food={food} />
                            </Col>
                        ))
                    ) : (
                        <p className="text-muted">No foods found for selected filters.</p>
                    )}
                </Row>

                <div className="d-flex justify-content-center flex-wrap text-center mt-4 gap-2">
                    <Button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className="btn btn-secondary px-3 py-1"
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            variant={currentPage === index + 1 ? "dark" : "outline-secondary"}
                            className="px-3 py-1"
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className="btn btn-secondary px-3 py-1"
                    >
                        Next
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Menu1;
