// import { useState, useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import CartTotal from "../PagesLayout/CardTotal";
// import axios from "axios";

// const Placeorder = () => {

//     const { navigate, backendUrl, cartItems, getCartAmount, delivery_charges, foods, token } = useContext(ShopContext)

//     const [method, setMethod] = useState('cod') // default SET to cash delivery

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         street: "",
//         city: "",
//         country: "",
//         state: "",
//         zipcode: "",
//         phone: ""
//     })

//     const onChangeHandler = (e) => {
//         const name = e.target.name
//         const value = e.target.value

//         setFormData(data => ({ ...data, [name]: value }))
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         try {
//             let orderItems = [];

//             for (const items in cartItems) {
//                 for (const item in cartItems[items]) {
//                     if (cartItems[items][item] > 0) {
//                         const itemInfo = structuredClone(foods.find(food => food._id === items));
//                         if (itemInfo) {
//                             itemInfo.size = item;
//                             itemInfo.quantity = cartItems[items][item];
//                             orderItems.push(itemInfo);
//                         }
//                     }
//                 }
//             }

//             const orderData = {
//                 address: formData,
//                 items: orderItems,
//                 amount: getCartAmount() + delivery_charges
//             };

//             switch (method) {
//                 case 'cod':
//                     const response = await axios.post(`${backendUrl}/api/order/place`, orderData, {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     });
//                     console.log(response.data);
//                     break;

//                 default:
//                     break;
//             }

//         } catch (error) {
//             console.log(error);
//         }
//     };




//     return (
//         <>
//             <section className="max-padd-container mt-24">
//                 {/* container */}
//                 <form onSubmit={onSubmitHandler} className="py-6">
//                     <div className="flex flex-col xl:flex:row gap-20 xl:gap-28">

//                         {/* left side delivery information */}
//                         <div className="flex flex-1 flex-col gap-3 text-[95%]">

//                             {/* <Title title1={'Delivery'} title2={"Information"} title1Styles={"text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"} /> */}
//                             <h5 className="fw-bold">Delivery Information</h5>


//                             <div className="flex gap-3">
//                                 <input type="text" required onChange={onChangeHandler} value={formData.firstName} name="firstName" placeholder="Enter The First Name" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                                 <input type="text" required onChange={onChangeHandler} value={formData.lastName} name="lastName" placeholder="Enter The last Name" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                             </div>
//                             <input type="email" required onChange={onChangeHandler} value={formData.email} name="email" placeholder="Enter The Email" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                             <input type="text" required onChange={onChangeHandler} value={formData.phone} name="phone" placeholder="Enter The Phone Number" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                             <input type="text" required onChange={onChangeHandler} value={formData.street} name="street" placeholder="Enter The Street" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                             <div className="flex gap-3">
//                                 <input type="text" required onChange={onChangeHandler} value={formData.city} name="city" placeholder="Enter The City" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                                 <input type="text" required onChange={onChangeHandler} value={formData.state} name="state" placeholder="Enter The State" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                             </div>
//                             <div className="flex gap-3">
//                                 <input type="text" required onChange={onChangeHandler} value={formData.zipcode} name="zipcode" placeholder="Enter The Zipcode" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                                 <input type="text" required onChange={onChangeHandler} value={formData.country} name="country" placeholder="Enter The Country" className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none" />
//                             </div>
//                         </div>

//                         {/* right side cart totel */}
//                         <div className="flex flex-2 flex-col">
//                             <CartTotal />
//                             {/* payment method */}
//                             <div className="my-6">
//                                 <h3 className="bold-20 mb-5">Payment <span className="text-secondary">Method</span></h3>
//                                 <div className="flex gap-3">
//                                     <div onClick={() => setMethod('stripe')} className={`${method === 'stripe' ? "btn-secondary" : "btn-outline"} !py-1 text-xs cursor-pointer `}>Stripe</div>
//                                     <div onClick={() => setMethod('cod')} className={`${method === 'cod' ? "btn-secondary" : "btn-outline"} !p-1 !py-1 cursor-pointer `}>Cash on Delivery</div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <button type="submit" className="btn-dark !rounded">Place Order</button>
//                             </div>
//                         </div>

//                     </div>
//                 </form>
//             </section>
//         </>
//     )
// }

// export default Placeorder

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
        email: "",
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
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error("Order Error:", error?.response?.data || error.message);
        }
    };

    return (
        <section className="mt-5">
            <Container>
                <Form onSubmit={onSubmitHandler}>
                    <Row>
                        {/* Delivery Info */}
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
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={onChangeHandler}
                                    placeholder="Email"
                                    required
                                />
                            </Form.Group>

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

                        {/* Cart & Payment */}
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
