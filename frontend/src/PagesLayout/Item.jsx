import { useContext, useState } from "react";
import { Card, Button, Image, ButtonGroup } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from "../Context/ShopContext";

const Item = ({ food }) => {

    const { currency } = useContext(ShopContext);
    const [size, setSize] = useState(food.sizes[0]);

    return (
        <Card
            className="text-center position-relative border-0 mb-4"
            style={{ borderRadius: "20px", backgroundColor: "#eaf8dc", paddingTop: "80px", overflow: "hidden", minHeight: "400px", }}>
            <div
                className="position-absolute top-0 start-50 translate-middle"
                style={{ zIndex: 1, marginTop: "70px" }}>
                <Image fluid src={food.image} alt={food.name} className="rounded-circle"
                    style={{
                        width: "120px", height: "120px", objectFit: "cover", backgroundColor: "#fff", padding: "6px",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                    }} />
            </div>

            <div className="px-3 pt-5 mt-4">
                <h6 className="fw-bold text-truncate fs-6">{food.name}</h6>
                <p className="text-muted small mb-2">{food.category}</p>

                <div className="text-success d-flex justify-content-center gap-1 mb-2 fs-6">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>

                <p className="text-muted small mb-3"
                    style={{ height: "2.5em", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {food.description}
                </p>

                <div className="d-flex justify-content-between align-items-center my-3">
                    <ButtonGroup size="sm">
                        {[...food.sizes].sort((a, b) => {
                            const order = ["H", "F", "S", "M", "L", "XL"];
                            return order.indexOf(a) - order.indexOf(b);
                        }).map((item, i) => (
                            <Button key={i} variant={item === size ? "dark" : "light"} className="rounded-1 px-2 py-0"
                                onClick={() => setSize(item)}>
                                {item}
                            </Button>
                        ))}
                    </ButtonGroup>

                    <Button variant="success" className="p-2 rounded-2" aria-label="Add to Cart">
                        <TbShoppingBagPlus size={18} color="#fff" />
                    </Button>

                </div>

                <div className="d-flex justify-content-between text-muted small">
                    <span><strong>Prep:</strong> 20m</span>
                    <span><strong>Price:</strong> {currency}{food.price[size]}</span>
                </div>
            </div>
        </Card>
    );
};

export default Item;