import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "./Title";
import shipping from "../assets/shipping-fast.svg";
import hot from "../assets/hot-food.svg";
import fresh from "../assets/fresh-food.svg";
import hat from "../assets/hat-chef.svg";
import "../Pages.css/Home1.css"

const Home2 = () => {
    return (
        <section className="py-5">
            <Container className="pb-4">
                <Title
                    title1="WHY CHOOSE"
                    title2="US"
                    titleStyles="text-center pb-4"
                    paraStyles="d-block"
                />

                <Row className="gy-4" >
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card className="text-center border-0 shadow-sm h-100 p-3 rounded-4 hover-card" style={{ backgroundColor: " rgb(234 248 220)" }}>
                            <Card.Body className="d-flex flex-column align-items-center gap-3 ">
                                <img src={shipping} alt="Fast Delivery" height={44} width={44} />
                                <div>
                                    <h5 className="fw-bold">Fast Delivery</h5>
                                    <hr
                                        className="mx-auto my-2"
                                        style={{
                                            width: "2rem",
                                            height: "4px",
                                            backgroundColor: "#6c63ff",
                                            border: "none",
                                            borderRadius: "1rem",
                                        }}
                                    />
                                    <p className="text-muted small">
                                        Get your order quickly with our reliable and efficient service
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card className="text-center border-0 shadow-sm h-100 p-3 rounded-4 hover-card" style={{ backgroundColor: " rgb(234 248 220)" }}>
                            <Card.Body className="d-flex flex-column align-items-center gap-3">
                                <img src={hot} alt="Hot Delivery" height={44} width={44} />
                                <div>
                                    <h5 className="fw-bold">Hot Delivery</h5>
                                    <hr
                                        className="mx-auto my-2"
                                        style={{
                                            width: "2rem",
                                            height: "4px",
                                            backgroundColor: "#6c63ff",
                                            border: "none",
                                            borderRadius: "1rem",
                                        }}
                                    />
                                    <p className="text-muted small">
                                        Receive your order warm and ready to savor with our speedy hot delivery
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card className="text-center border-0 shadow-sm h-100 p-3 rounded-4 hover-card" style={{ backgroundColor: " rgb(234 248 220)" }}>
                            <Card.Body className="d-flex flex-column align-items-center gap-3">
                                <img src={fresh} alt="Fresh Foods" height={44} width={44} />
                                <div>
                                    <h5 className="fw-bold">Fresh Foods</h5>
                                    <hr
                                        className="mx-auto my-2"
                                        style={{
                                            width: "2rem",
                                            height: "4px",
                                            backgroundColor: "#6c63ff",
                                            border: "none",
                                            borderRadius: "1rem",
                                        }}
                                    />
                                    <p className="text-muted small">
                                        We serve meals made from the freshest and finnest ingredients daily
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card className="text-center border-0 shadow-sm h-100 p-3 rounded-4 hover-card" style={{ backgroundColor: " rgb(234 248 220)" }}>
                            <Card.Body className="d-flex flex-column align-items-center gap-3">
                                <img src={hat} alt="Expert Chefs" height={44} width={44} />
                                <div>
                                    <h5 className="fw-bold">Expert Chefs</h5>
                                    <hr
                                        className="mx-auto my-2"
                                        style={{
                                            width: "2rem",
                                            height: "4px",
                                            backgroundColor: "#6c63ff",
                                            border: "none",
                                            borderRadius: "1rem",
                                        }}
                                    />
                                    <p className="text-muted small">
                                        Our skilled chefs craft every dish with passion and precision
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home2;
