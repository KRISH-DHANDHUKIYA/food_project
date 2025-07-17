// import { useEffect } from "react";
// import { backendUrl } from "../App"
// import axios from "axios"

// const Orders = ({ token }) => {

//     const fetchAllOrders = async () => {
//         if (!token) {
//             return null
//         }
//         try {
//             const response = await axios.post(backendUrl + '/api/order/list', {}, { Headers: { token } })
//             console.log(response.data);
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         fetchAllOrders()
//     }, [])

//     return (
//         <>
//             Orders
//         </>
//     )
// }

// export default Orders

import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { TfiPackage } from "react-icons/tfi";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify"

const Orders = ({ token }) => {
    const [orders, setOrders] = useState([]); // ✅ Add state

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
            // console.log(response.data);
            if (response.data.success) {
                setOrders(response.data.orders); // ✅ Save to state
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("Fetch orders error:", error.response?.data || error.message);
            toast.error(response.data.message)
        }
    };

    const statusHandler = async (e, orderId) => {
        try {
            const response = await axios.post()(
                `${backendUrl}/api/order/status`,
                { orderId, status: e.target.value },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (response.data.success) {
                await fetchAllOrders()
            }
        }
        catch (error) {
            console.log(error);
            toast.error(response.data.message)
        }
    }

    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        // <div className="px-2 sm:px-8 py-12 min-h-screen">
        //     <div className="flex flex-col gap-6">
        //         {orders.map((order) => (
        //             <div key={order._id} className="bg-light p-4 rounded-lg shadow-md">
        //                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[0.5fr_2fr_1fr_0.5fr_1fr] gap-4 items-start text-gray-700">

        //                     {/* Icon */}
        //                     <div className="hidden xl:flex items-center justify-center h-20 w-20 rounded-lg bg-deep">
        //                         <TfiPackage className="text-3xl text-secondary" />
        //                     </div>

        //                     {/* Items */}
        //                     <div className="flex flex-col gap-1">
        //                         <p className="font-semibold text-sm">Items:</p>
        //                         {order.items.map((item, index) => (
        //                             <p key={index} className="text-sm">
        //                                 {item.name} x {item.quantity}{" "}
        //                                 <span className="italic text-xs">"{item.size}"</span>
        //                             </p>
        //                         ))}
        //                     </div>

        //                     {/* Customer Name & Phone */}
        //                     <div className="text-sm">
        //                         <p><span className="text-tertiary font-medium">Name: </span>{order.address.firstName + " " + order.address.lastName}</p>
        //                         <p><span className="text-tertiary font-medium">Phone: </span>{order.address.phone}</p>
        //                     </div>

        //                     {/* Address */}
        //                     <div className="text-sm">
        //                         <p className="text-tertiary font-medium">Address:</p>
        //                         <p>{order.address.street}</p>
        //                         <p>{order.address.city}, {order.address.state}</p>
        //                         <p>{order.address.country} - {order.address.zipcode}</p>
        //                     </div>

        //                     {/* Order Summary */}
        //                     <div className="flex flex-col gap-2 text-sm">
        //                         <p><span className="text-tertiary font-medium">Total Items: </span>{order.items.length}</p>
        //                         <p><span className="text-tertiary font-medium">Method: </span>{order.paymentMethod}</p>
        //                         <p><span className="text-tertiary font-medium">Payment: </span>{order.payment ? 'Done' : 'Pending'}</p>
        //                         <p><span className="text-tertiary font-medium">Date: </span>{new Date(order.date).toLocaleDateString()}</p>
        //                         <p><span className="text-tertiary font-medium">Price: </span>{currency}{order.amount}</p>

        //                         <select
        //                             onChange={(e) => statusHandler(e, order._id)}
        //                             value={order.status}
        //                             className="p-2 border rounded bg-deep text-xs max-w-xs mt-1"
        //                         >
        //                             <option value="Order Placed">Order Placed</option>
        //                             <option value="Packing">Packing</option>
        //                             <option value="Shipped">Shipped</option>
        //                             <option value="Out For Delivery">Out For Delivery</option>
        //                             <option value="Delivered">Delivered</option>
        //                         </select>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div> 

        <>
            <Container fluid className="py-5 min-vh-100">
                <Row className="g-4">
                    {orders.map((order) => (
                        <Col xs={12} key={order._id}>
                            <Card className="p-3 bg-light rounded shadow-sm">
                                <Row className="g-3 align-items-start">
                                    {/* Icon Box */}
                                    <Col xl={1} className="d-none d-xl-flex justify-content-center align-items-center">
                                        <div className="bg-dark text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: 60, height: 60 }}>
                                            <TfiPackage className="fs-4" />
                                        </div>
                                    </Col>

                                    {/* Items */}
                                    <Col xs={12} sm={6} xl={3}>
                                        <strong className="d-block mb-1">Items:</strong>
                                        {order.items.map((item, index) => (
                                            <div key={index} className="text-muted small">
                                                {item.name} x {item.quantity}{" "}
                                                <span className="fst-italic">"{item.size}"</span>
                                            </div>
                                        ))}
                                    </Col>

                                    {/* Customer Info */}
                                    <Col xs={12} sm={6} xl={3}>
                                        <p className="mb-1">
                                            <strong className="text-primary">Name: </strong>
                                            {order.address.firstName + " " + order.address.lastName}
                                        </p>
                                        <p className="mb-1">
                                            <strong className="text-primary">Address: </strong>
                                            {order.address.street}, {order.address.city}, {order.address.state},{" "}
                                            {order.address.country}, {order.address.zipcode}
                                        </p>
                                        <p className="mb-1">
                                            <strong className="text-primary">Phone: </strong>
                                            {order.address.phone}
                                        </p>
                                    </Col>

                                    {/* Order Summary */}
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

                                    {/* Price & Status */}
                                    <Col xs={12} sm={6} xl={3} className="d-flex flex-column gap-2">
                                        <p className="mb-1">
                                            <strong className="text-primary">Price:</strong> {currency}
                                            {order.amount}
                                        </p>
                                        <Form.Select
                                            size="sm"
                                            value={order.status}
                                            onChange={(e) => statusHandler(e, order._id)}
                                            className="w-100"
                                        >
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