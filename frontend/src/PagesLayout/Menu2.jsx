import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { RiSearch2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { ShopContext } from "../Context/ShopContext";
import { categories } from "../assets/data";
import Title from "./Title";
import Item from "./Item";
import "../Pages.css/Menu.css";

const Menu1 = () => {
    const { foods } = useContext(ShopContext);
    const [category, SetCategory] = useState([]);
    const [sortType, SetSortType] = useState("relevant");
    const [filterFoods, SetFilterFoods] = useState([]);
    const [showCategories, SetShowCategories] = useState(true);
    const [search, setSearch] = useState("");

    const toggleFilter = (value, setState) => {
        setState((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

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
        switch (sortType) {
            case "low":
                return foodList.sort((a, b) => a.price - b.price);
            case "high":
                return foodList.sort((a, b) => b.price - a.price);
            default:
                return foodList;
        }
    };

    const toogleShowCategories = () => {
        SetShowCategories(!showCategories);
    };

    useEffect(() => {
        let filtered = applyFilters();
        let sorted = applySorting(filtered);
        SetFilterFoods(sorted);
    }, [category, sortType, foods, search]);

    return (
        <section className="py-5">
            <Container>
                {/* Search Bar */}
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={8} lg={6}>
                        <InputGroup className="shadow-sm rounded-pill">
                            <InputGroup.Text className="bg-white border-2">
                                <RiSearch2Line style={{ cursor: "pointer" }} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name, category, or ingredient..."
                                className="border-2"
                            />
                            <Button
                                variant="outline-light"
                                onClick={toogleShowCategories}
                                className="bg-white text-dark border border-2 rounded-full"
                            >
                                <LuSettings2 />
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                {/* Category Filter */}
                {showCategories && (
                    <Row className="mb-5">
                        {/* <Col>
                            <h5 className="mb-3">Select by Category</h5>
                            <div className="d-flex flex-wrap gap-3">
                                {categories.map((cat) => (
                                    <Form.Check key={cat.name} type="checkbox" id={cat.name} className="d-flex align-items-center">
                                        <Form.Check.Input
                                            type="checkbox"
                                            value={cat.name}
                                            onChange={(e) =>
                                                toggleFilter(e.target.value, SetCategory)
                                            }
                                            className="me-2"
                                        />
                                        <div
                                            className="d-flex align-items-center bg-light px-3 py-2 rounded-pill"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                className="me-2 rounded-circle"
                                                style={{ height: "60px", width: "60px", objectFit: "cover" }}
                                            />
                                            <span>{cat.name}</span>
                                        </div>
                                    </Form.Check>
                                ))}
                            </div>
                        </Col> */}
                        <Col>
                            <h5 className="mb-3">Select by Category</h5>
                            <div className="d-flex flex-wrap gap-3">
                                {categories.map((cat) => {
                                    const isChecked = category.includes(cat.name);
                                    return (
                                        <div
                                            key={cat.name}
                                            role="button"
                                            onClick={() => toggleFilter(cat.name, SetCategory)}
                                            className={`d-flex align-items-center bg-light px-3 py-2 rounded-pill ${isChecked ? 'border border-danger text-danger' : ''}`}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                className="me-2 rounded-circle"
                                                style={{ height: "60px", width: "60px", objectFit: "cover" }}
                                            />
                                            <span>{cat.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                )}

                {/* Sorting and Title */}
                <Row className="align-items-center mb-4">
                    <Col xs={12} md={6}>
                        <Title title1="Food" title2="Selection" />
                    </Col>
                    <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
                        <Form.Select
                            value={sortType}
                            onChange={(e) => SetSortType(e.target.value)}
                            className="w-auto d-inline-block"
                        >
                            <option value="relevant">Relevant</option>
                            <option value="low">Price: Low to High</option>
                            <option value="high">Price: High to Low</option>
                        </Form.Select>
                    </Col>
                </Row>

                {/* Food Grid */}
                <Row className="g-4">
                    {filterFoods && filterFoods.length > 0 ? (
                        filterFoods.map((food) => (
                            <Col xs={12} sm={6} lg={4} xl={3} key={food._id}>
                                <Item food={food} />
                            </Col>
                        ))
                    ) : (
                        <p className="text-muted">No foods found for selected filters.</p>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Menu1;
