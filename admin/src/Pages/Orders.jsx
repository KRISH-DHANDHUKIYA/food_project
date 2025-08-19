import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from 'axios';
import { TfiPackage } from "react-icons/tfi";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify"

const Orders = ({ token }) => {
    const [orders, setOrders] = useState([]);
    const fetchAllOrders = async () => {
        if (!token) return;

        try {
            const response = await axios.post(
                `${backendUrl}/api/order/list`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                setOrders(response.data.orders);
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("Fetch orders error:", error.response?.data || error.message);
            toast.error(response.data.message)
        }
    };

    const statusHandler = async (e, id) => {
        const status = e.target.value;

        try {
            const res = await axios.post(
                `${backendUrl}/api/order/status`,
                { orderId: id, status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Order status updated.");
            fetchAllOrders();
        } catch (error) {
            console.error("Failed to update status:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Failed to update status");
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        <>
            <Container fluid className="py-5 min-vh-100">
                <Row className="g-4">
                    {orders.map((order) => (
                        <Col xs={12} key={order._id}>
                            <Card className="p-3 bg-light rounded shadow-sm">
                                <Row className="g-3 align-items-start">
                                    <Col xl={1} className="d-none d-xl-flex justify-content-center align-items-center">
                                        <div className="bg-dark text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: 60, height: 60 }}>
                                            <TfiPackage className="fs-4" />
                                        </div>
                                    </Col>

                                    <Col xs={12} sm={6} xl={3}>
                                        <strong className="d-block mb-1">Items:</strong>
                                        {order.items.map((item, index) => (
                                            <div key={index} className="text-muted small">
                                                {item.name} x {item.quantity}{" "}
                                                <span className="fst-italic">"{item.size}"</span>
                                            </div>
                                        ))}
                                    </Col>

                                    <Col xs={12} sm={6} xl={3}>
                                        <p className="mb-1">
                                            <strong className="text-primary">Name: </strong>
                                            {order.address?.firstName} {order.address?.lastName}
                                        </p>
                                        <p className="mb-1">
                                            <strong className="text-primary">Address: </strong>
                                            {[order.address?.street, order.address?.city, order.address?.state, order.address?.country, order.address?.zipcode]
                                                .filter(Boolean)
                                                .join(", ")}
                                        </p>
                                        <p className="mb-1">
                                            <strong className="text-primary">Phone: </strong>
                                            {order.address?.phone || "N/A"}
                                        </p>
                                    </Col>


                                    <Col xs={12} sm={6} xl={2}>
                                        <p className="mb-1">
                                            <strong className="text-primary">Total Items:</strong> {order.items.length}
                                        </p>
                                        <p className="mb-1">
                                            <strong className="text-primary">Method:</strong> {order.paymentMethod}
                                        </p>
                                        <p className="mb-1">
                                            <strong className="text-primary">Payment:</strong> {order.payment ? "Done" : "Pending"}
                                        </p>
                                        <p className="mb-1">
                                            <strong className="text-primary">Date:</strong> {new Date(order.date).toLocaleDateString()}
                                        </p>
                                    </Col>

                                    <Col xs={12} sm={6} xl={3} className="d-flex flex-column gap-2">
                                        <p className="mb-1">
                                            <strong className="text-primary">Price:</strong> {currency}
                                            {order.amount}
                                        </p>
                                        <Form.Select size="sm" value={order.status} onChange={(e) => statusHandler(e, order._id)} className="w-100">
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Packing">Packing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out For Delivery">Out For Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Orders;