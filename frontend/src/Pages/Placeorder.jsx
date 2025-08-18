import { useState, useContext } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { ShopContext } from "../Context/ShopContext";
import CartTotal from "../PagesLayout/CardTotal";
import axios from "axios";
import { toast } from "react-toastify";

const Placeorder = () => {
    const {
        navigate,
        backendUrl,
        cartItems,
        setCartItems,
        getCartAmount,
        delivery_charges,
        foods,
        token,
    } = useContext(ShopContext);

    const [method, setMethod] = useState("cod");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        country: "",
        state: "",
        zipcode: "",
        phone: "",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            let orderItems = [];

            for (const foodId in cartItems) {
                for (const size in cartItems[foodId]) {
                    if (cartItems[foodId][size] > 0) {
                        const itemInfo = structuredClone(foods.find((f) => f._id === foodId));
                        if (itemInfo) {
                            itemInfo.size = size;
                            itemInfo.quantity = cartItems[foodId][size];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            const orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_charges,
            };

            if (method === "cod") {
                const response = await axios.post(`${backendUrl}/api/order/place`, orderData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.success) {
                    setCartItems({});
                    toast.success("Order placed successfully!");
                    navigate("/orders");
                } else {
                    toast.error(response.data.message || "Order failed. Try again.");
                }

            } else if (method === "stripe") {
                const responseStripe = await axios.post(`${backendUrl}/api/order/stripe`, orderData, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (responseStripe.data.success) {
                    const { session_url } = responseStripe.data;
                    window.location.replace(session_url);
                } else {
                    toast.error(responseStripe.data.message);
                }
            }


        } catch (error) {
            console.error("Order Error:", error?.response?.data || error.message);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="mt-5">
            <Container>
                <Form onSubmit={onSubmitHandler}>
                    <Row>
                        <Col lg={7} className="py-5">
                            <h4 className="fw-bold mb-4">Delivery Information</h4>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={onChangeHandler}
                                        placeholder="First Name"
                                        required
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={onChangeHandler}
                                        placeholder="Last Name"
                                        required
                                    />
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={onChangeHandler}
                                    placeholder="Phone Number"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="street"
                                    value={formData.street}
                                    onChange={onChangeHandler}
                                    placeholder="Street Address"
                                    required
                                />
                            </Form.Group>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={onChangeHandler}
                                        placeholder="City"
                                        required
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={onChangeHandler}
                                        placeholder="State"
                                        required
                                    />
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Control
                                        type="text"
                                        name="zipcode"
                                        value={formData.zipcode}
                                        onChange={onChangeHandler}
                                        placeholder="Zip Code"
                                        required
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={onChangeHandler}
                                        placeholder="Country"
                                        required
                                    />
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={5} className="py-5">
                            <CartTotal />

                            <div className="my-4">
                                <h5 className="fw-bold mb-3">Payment Method</h5>
                                <div className="d-flex gap-2">
                                    <Button
                                        variant={method === "stripe" ? "primary" : "outline-primary"}
                                        size="sm"
                                        onClick={() => setMethod("stripe")}
                                    >
                                        Stripe
                                    </Button>
                                    <Button
                                        variant={method === "cod" ? "primary" : "outline-primary"}
                                        size="sm"
                                        onClick={() => setMethod("cod")}
                                    >
                                        Cash on Delivery
                                    </Button>
                                </div>
                            </div>

                            <Button type="submit" variant="dark" className="w-100 rounded">
                                Place Order
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </section>
    );
};

export default Placeorder;
