import { Container, Row, Col, Image } from "react-bootstrap";
import "../Pages.css/Aboutus.css";

const Aboutus = () => {
    return (
        <>
            <section className="py-5">

                <Container className="pb-5">
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <Image
                                src="https://klbtheme.com/groci/wp-content/uploads/2018/08/about.jpg"
                                alt="About"
                                fluid
                            />
                        </Col>
                        <Col lg={7} className="ps-lg-5 pt-4 pt-lg-0">
                            <h2 style={{ color: "#e96125" }}>
                                Shop Smart with FoodExpress  Freshness, Value & Convenience Delivered!
                            </h2>
                            <h5 className="mt-4">Our Vision</h5>
                            <p>
                                At FoodExpress, we envision a world where fresh food and daily essentials are always within reach. Our mission is to bring you the highest quality groceries at prices that make sense — helping every household shop smarter and live better.
                            </p>
                            <h5 className="mt-4">Our Goal</h5>
                            <p>
                                FoodExpress is committed to being your most trusted grocery partner. Whether it is a  farm-fresh produce, pantry staples, or unbeatable daily deals, our goal is to deliver convenience, savings, and satisfaction straight to your doorstep.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className="bg-success bg-opacity-10 py-5">
                    <Container>
                        <div className="text-center mb-4">
                            <h2>What We Provide?</h2>
                            <p>
                                At FoodExpress, we're dedicated to making your shopping experience faster, fresher, and friendlier.
                                Here how we deliver value every day:
                            </p>
                        </div>
                        <Row>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="text-center px-3">
                                    <i className="mdi mdi-shopping mdi-48px text-success mb-3"></i>
                                    <h5 className="text-secondary">Best Prices & Offers</h5>
                                    <p>
                                        Enjoy unbeatable prices and exclusive deals on your favorite brands —
                                        all without compromising on quality.
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="text-center px-3">
                                    <i className="mdi mdi-earth mdi-48px text-success mb-3"></i>
                                    <h5 className="text-secondary">Wide Assortment</h5>
                                    <p>
                                        From fresh produce to household essentials, we stock everything you need under one digital roof.
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="text-center px-3">
                                    <i className="mdi mdi-refresh mdi-48px text-success mb-3"></i>
                                    <h5 className="text-secondary">Easy Returns</h5>
                                    <p>
                                        Changed your mind? No worries. Our simple return process ensures hassle-free refunds or replacements.
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="text-center px-3">
                                    <i className="mdi mdi-truck-fast mdi-48px text-success mb-3"></i>
                                    <h5 className="text-secondary">Free & Next Day Delivery</h5>
                                    <p>
                                        Get your groceries delivered to your doorstep — free and fast — so you can focus on what matters most.
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="text-center px-3">
                                    <i className="mdi mdi-basket mdi-48px text-success mb-3"></i>
                                    <h5 className="text-secondary">100% Satisfaction Guarantee</h5>
                                    <p>
                                        Your satisfaction is our priority. We go the extra mile to ensure your order arrives perfect, every time.
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="text-center px-3">
                                    <i className="mdi mdi-tag-heart mdi-48px text-success mb-3"></i>
                                    <h5 className="text-secondary">Great Daily Deals Discount</h5>
                                    <p>
                                        Save more every day with exciting offers and limited-time discounts on top-rated products.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>


                <Container className="pt-5">
                    <div className="text-center mb-5">
                        <h2>Our Team</h2>
                        <p>
                            Meet the people behind FoodExpress — a team of passionate professionals
                            dedicated to delivering freshness, value, and satisfaction to your doorstep.
                        </p>
                    </div>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="text-center">
                                <Image
                                    src="https://template.creativemox.com/delecta/wp-content/uploads/sites/18/2024/06/3.jpg"
                                    alt="Aarav Shah"
                                    fluid
                                    className="mb-4 rounded-circle border border-2 team-img-hover"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <p className="mb-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
                                    Aarav ensures that every order is processed and reaches our customers on time.
                                    His operational excellence keeps FoodExpress running like clockwork.
                                </p>
                                <h6 className="text-success mb-0">- Aarav Shah</h6>
                                <small>Logistics & Fulfillment Manager</small>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="text-center">
                                <Image
                                    src="https://template.creativemox.com/delecta/wp-content/uploads/sites/18/2024/06/14.jpg"
                                    alt="Karan Desai"
                                    fluid
                                    className="mb-4 rounded-circle border border-2 team-img-hover"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <p className="mb-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
                                    Karan architects the tech backbone of FoodExpress, ensuring a fast, secure,
                                    and seamless online grocery experience for every user.
                                </p>
                                <h6 className="text-success mb-0">- Karan Desai</h6>
                                <small>Tech & UX Lead</small>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="text-center">
                                <Image
                                    src="https://template.creativemox.com/delecta/wp-content/uploads/sites/18/2024/06/12.jpg"
                                    alt="Priya Mehta"
                                    fluid
                                    className="mb-4 rounded-circle border border-2 team-img-hover"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <p className="mb-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
                                    Priya leads our brand voice and customer experience. From marketing to design,
                                    she crafts every interaction to be warm, trustworthy, and memorable.
                                </p>
                                <h6 className="text-success mb-0">- Priya Mehta</h6>
                                <small>Customer Experience & Brand Lead</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Aboutus
