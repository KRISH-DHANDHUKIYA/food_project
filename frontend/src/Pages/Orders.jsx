// import { useEffect, useState, useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import axios from "axios";
// import { toast } from "react-toastify";


// const Orders = () => {

//     const { backendUrl, token, currency } = useContext(ShopContext)

//     const [orderData, setOrderData] = useState([])

//     const loadOrderData = async () => {
//         try {
//             if (!token) {
//                 return null
//             }
//             const response = await axios.post(`${backendUrl}/api/order/userorders`, {}, { headers: { Authorization: `Bearer ${token}` } })
//             // console.log(response.data)
//             if (response.data.success) {
//                 let allOrderItem = []

//                 response.data.orders.map((order) => {
//                     order.items.map((item) => {
//                         item['status'] = order.status
//                         item['payment'] = order.payment
//                         item['paymentMethod'] = order.paymentMethod
//                         item['date'] = order.date
//                         allOrderItem.push(item)
//                     })
//                 })
//             }
//             console.log(allOrderItem);
//             setOrderData(allOrderItem)
//         }
//         catch (error) {
//             // console.log(error);
//             toast.error(error.message)
//         }
//     }



//     useEffect(() => {
//         loadOrderData()
//     }, [token])

//     return (
//         <>
//             <div className="max-padd-container mt-24">
//                 <div className="pt-16 pb-20">
//                     <h5>Orders</h5>
//                     {
//                         orderData.map((item, i) => {
//                             <div key={i} className="p-2 rounded-xl bg-deep mt-2">
//                                 <div className="text-gray-700 flex-col gap-4">
//                                     <div className="flex gap-x-3">
//                                         <div className="flexCenter p-2 bg-light rounded-lg">
//                                             <img src={item.image} alt="" className="w-16" />
//                                         </div>
//                                         {/* order info */}
//                                         <div className="block w-full">
//                                             <h5 className="capitalize line-clamp-1">{item.name}</h5>
//                                             <div className="flex gap-x-2 flex-col sm:flex-row sm:justify-between">
//                                                 {/* price quantity size date payment */}
//                                                 <div className="text-xs">
//                                                     <div className="flex items-center gap-x-2 sm:gap-x-3">
//                                                         <div className="flexCenter gap-x-2">
//                                                             <h5 className="medium-14">Price:</h5>
//                                                             <p>{currency}{item.price[item.size]}</p>
//                                                         </div>
//                                                         <div className="flexCenter gap-x-2">
//                                                             <h5 className="medium-14">Quantity:</h5>
//                                                             <p>{item.quantity}</p>
//                                                         </div>
//                                                         <div className="flexCenter gap-x-2">
//                                                             <h5 className="medium-14">Size:</h5>
//                                                             <p>{item.size}</p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="flex items-center gap-x-2">
//                                                         <h5 className="medium-14">Date:</h5>
//                                                         <p className="text-grey-400">{new Date(item.date).toDateString()}</p>
//                                                     </div>
//                                                     <div className="flex items-center gap-x-2">
//                                                         <h5 className="medium-14">Payment:</h5>
//                                                         <p className="text-grey-400">{item.paymentMethod}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* status and button */}
//                                             <div className="flex flex-col gap-2 sm:pr-4">
//                                                 <div className="flex items-center gap-2">
//                                                     <p className="min-w-2 h-2  rounded-full bg-green-500"></p>
//                                                     <p className="max-sm:text-xs">{item.status}</p>
//                                                 </div>
//                                                 <button className="btn-secondary !p-1 !px-3 !text-xs">
//                                                     Track Order
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Orders

// import { useEffect, useState, useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import axios from "axios";

// const Orders = () => {

//     const { backendUrl, token, currency } = useContext(ShopContext)

//     const [orderData, setOrderData] = useState([])

//     const loadOrderData = async () => {
//         try {
//             if (!token) {
//                 return null
//             }
//             const response = await axios.post(`${backendUrl}/api/order/userorders`, {}, { headers: { token } })
//             console.log(response.data)
//         }
//         catch (error) {

//         }
//     }

//     useEffect(() => {
//         loadOrderData()
//     }, [token])

//     return (
//         <>
//             <div>
//                 order
//             </div>
//         </>
//     )
// }

// export default Orders


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
                        Authorization: `Bearer ${token}` // ✅ Fixed token header
                    }
                }
            );
            // console.log(response.data);

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
                // console.log(allOrderItem);
                setOrderData(allOrderItem);
                // console.log("Fetched orders:", response.data.orders);
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

            {/* <div className="max-padd-container mt-24">
                <div className="pt-16 pb-20">
                    <h5>Orders</h5>
                    {
                        orderData.map((item, i) => {
                            <div key={i} className="p-2 rounded-xl bg-deep mt-2">
                                <div className="text-gray-700 flex-col gap-4">
                                    <div className="flex gap-x-3">
                                        <div className="flexCenter p-2 bg-light rounded-lg">
                                            <img src={item.image} alt="" className="w-16" />
                                        </div>

                                        <div className="block w-full">
                                            <h5 className="capitalize line-clamp-1">{item.name}</h5>
                                            <div className="flex gap-x-2 flex-col sm:flex-row sm:justify-between">

                                                <div className="text-xs">
                                                    <div className="flex items-center gap-x-2 sm:gap-x-3">
                                                        <div className="flexCenter gap-x-2">
                                                            <h5 className="medium-14">Price:</h5>
                                                            <p>{currency}{item.price[item.size]}</p>
                                                        </div>
                                                        <div className="flexCenter gap-x-2">
                                                            <h5 className="medium-14">Quantity:</h5>
                                                            <p>{item.quantity}</p>
                                                        </div>
                                                        <div className="flexCenter gap-x-2">
                                                            <h5 className="medium-14">Size:</h5>
                                                            <p>{item.size}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-x-2">
                                                        <h5 className="medium-14">Date:</h5>
                                                        <p className="text-grey-400">{new Date(item.date).toDateString()}</p>
                                                    </div>
                                                    <div className="flex items-center gap-x-2">
                                                        <h5 className="medium-14">Payment:</h5>
                                                        <p className="text-grey-400">{item.paymentMethod}</p>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div className="flex flex-col gap-2 sm:pr-4">
                                                <div className="flex items-center gap-2">
                                                    <p className="min-w-2 h-2  rounded-full bg-green-500"></p>
                                                    <p className="max-sm:text-xs">{item.status}</p>
                                                </div>
                                                <button className="btn-secondary !p-1 !px-3 !text-xs">
                                                    Track Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div> */}
            <div className="mt-5">
                <Container className="pt-5 pb-5">
                    <h5 className="mb-4">Orders</h5>
                    {orderData.map((item, i) => (
                        <Card key={i} className="mb-3 p-3 rounded shadow-sm bg-light">
                            <Row className="g-3 align-items-center">
                                {/* Product Image */}
                                <Col xs={4} sm={2} className="text-center">
                                    <Image src={item.image} alt="" fluid rounded style={{ maxWidth: "64px" }} />
                                </Col>

                                {/* Info Section */}
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

                                        {/* Status + Button */}
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

