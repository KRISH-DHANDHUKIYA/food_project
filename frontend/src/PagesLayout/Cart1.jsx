import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FaRegWindowClose } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import CardTotal from "./CardTotal";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button, Card, ButtonGroup } from "react-bootstrap";

const Cart1 = () => {
    const { foods, cartItems, currency, updateQuantity } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        if (foods.length > 0) {
            const tempData = [];
            const initialQuantities = {};

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item],
                        });
                        initialQuantities[`${items} - ${item}`] = cartItems[items][item];
                    }
                }
            }

            setCartData(tempData);
            setQuantities(initialQuantities);
        }
    }, [cartItems, foods]);

    const increment = (id, size) => {
        const key = `${id} - ${size}`;
        const newValue = quantities[key] + 1;
        setQuantities((prev) => ({ ...prev, [key]: newValue }));
        updateQuantity(id, size, newValue);
    };

    const decrement = (id, size) => {
        const key = `${id} - ${size}`;
        if (quantities[key] > 1) {
            const newValue = quantities[key] - 1;
            setQuantities((prev) => ({ ...prev, [key]: newValue }));
            updateQuantity(id, size, newValue);
        }
    };

    return (
        <>
            <section className="py-5">
                <Container>
                    <div className="pt-3">
                        <Row>
                            <Col><h1>Cart Lists</h1></Col>
                        </Row>

                        {cartData.map((item, i) => {
                            const productData = foods.find(product => product._id === item._id);
                            const key = `${item._id} - ${item.size}`;

                            return (
                                <Card key={i} className="mb-3 shadow-sm">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col xs={3} sm={2}>
                                                <Image src={productData.image} alt="" fluid rounded />
                                            </Col>
                                            <Col xs={9} sm={10}>
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <h5 className="mb-1">{productData.name}</h5>
                                                    <FaRegWindowClose onClick={() => updateQuantity(item._id, item.size, 0)} className="text-danger cursor-pointer" />
                                                </div>
                                                <p className="mb-2"><strong>Size:</strong> {item.size}</p>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <ButtonGroup className="me-3">
                                                        <Button variant="secondary" size="sm" onClick={() => decrement(item._id, item.size)}><FaMinus /></Button>
                                                        <div className="px-3 d-flex align-items-center bg-light">{quantities[key]}</div>
                                                        <Button variant="secondary" size="sm" onClick={() => increment(item._id, item.size)}><FaPlus /></Button>
                                                    </ButtonGroup>
                                                    <h4 className="mb-0">{currency}{productData.price[item.size]}</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            );
                        })}

                        <CardTotal />
                        <Link to="/placeorder">
                            <Button variant="primary" className="mt-4">Proceed to Checkout</Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Cart1;