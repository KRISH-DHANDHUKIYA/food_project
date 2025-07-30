import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const Orders = () => {
    const { backendUrl, token, currency } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) return;

            const response = await axios.post(
                `${backendUrl}/api/order/userorders`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                let allOrderItem = []

                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrderItem.push(item)
                    })
                })
                setOrderData(allOrderItem.reverse());
            }
        } catch (error) {
            console.error("Error loading orders:", error.response?.data || error.message);
            toast.error(error.message)
        }
    };

    useEffect(() => {
        loadOrderData();
    }, [token]);

    return (
        <>
            <div className="mt-5">
                <Container className="pt-5 pb-5">
                    <h5 className="mb-4">Orders</h5>
                    {orderData.map((item, i) => (
                        <Card key={i} className="mb-3 p-3 rounded shadow-sm bg-light">
                            <Row className="g-3 align-items-center">
                                <Col xs={4} sm={2} className="text-center">
                                    <Image src={item.image} alt="image" fluid rounded style={{ maxWidth: "64px" }} />
                                </Col>

                                <Col xs={8} sm={10}>
                                    <h6 className="text-capitalize text-truncate mb-2">{item.name}</h6>
                                    <Row className="gy-2">
                                        <Col xs={12} sm={8}>
                                            <Row className="gx-3 gy-1">
                                                <Col xs={4}>
                                                    <small className="text-muted">Price:</small>
                                                    <div>{currency}{item.price[item.size]}</div>
                                                </Col>
                                                <Col xs={4}>
                                                    <small className="text-muted">Quantity:</small>
                                                    <div>{item.quantity}</div>
                                                </Col>
                                                <Col xs={4}>
                                                    <small className="text-muted">Size:</small>
                                                    <div>{item.size}</div>
                                                </Col>
                                                <Col xs={12}>
                                                    <small className="text-muted">Date:</small>
                                                    <div>{new Date(item.date).toDateString()}</div>
                                                </Col>
                                                <Col xs={12}>
                                                    <small className="text-muted">Payment:</small>
                                                    <div>{item.paymentMethod}</div>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={12} sm={4} className="d-flex flex-column align-items-start align-items-sm-end justify-content-between">
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <span className="bg-success rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                                                <span className="text-muted small">{item.status}</span>
                                            </div>
                                            <Button onClick={loadOrderData} variant="outline-primary" size="sm">
                                                Track Order
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Container>
            </div>
        </>
    )
}

export default Orders;

