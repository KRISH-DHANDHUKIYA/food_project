import { Container, Row, Col, Image } from "react-bootstrap";

const Aboutus = () => {
    return (
        <section className="py-5">
            {/* About Section */}
            <Container>
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
                            FoodExpress is committed to being your most trusted grocery partner. Whether it’s farm-fresh produce, pantry staples, or unbeatable daily deals, our goal is to deliver convenience, savings, and satisfaction straight to your doorstep.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* What We Provide */}
            <Container className="text-center py-5">
                <h2>What We Provide?</h2>
                <p>At FoodExpress, we're dedicated to making your shopping experience faster, fresher, and friendlier. Here’s how we deliver value every day:</p>
                <Row className="mt-4">
                    <Col md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <i className="mdi mdi-shopping mdi-48px text-success mb-3"></i>
                            <h5 className="mb-2 text-secondary">Best Prices & Offers</h5>
                            <p>
                               Enjoy unbeatable prices and exclusive deals on your favorite brands — all without compromising on quality.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <i className="mdi mdi-earth mdi-48px text-success mb-3"></i>
                            <h5 className="mb-2 text-secondary">Wide Assortment</h5>
                            <p>
                               From fresh produce to household essentials, we stock everything you need under one digital roof.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <i className="mdi mdi-refresh mdi-48px text-success mb-3"></i>
                            <h5 className="mb-2 text-secondary">Easy Returns</h5>
                            <p>
                               Changed your mind? No worries. Our simple return process ensures hassle-free refunds or replacements.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <i className="mdi mdi-truck-fast mdi-48px text-success mb-3"></i>
                            <h5 className="mb-2 text-secondary">Free & Next Day Delivery</h5>
                            <p>
                              Get your groceries delivered to your doorstep — free and fast — so you can focus on what matters most.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <i className="mdi mdi-basket mdi-48px text-success mb-3"></i>
                            <h5 className="mb-2 text-secondary">100% Satisfaction Guarantee</h5>
                            <p>
                               Your satisfaction is our priority. We go the extra mile to ensure your order arrives perfect, every time.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <i className="mdi mdi-tag-heart mdi-48px text-success mb-3"></i>
                            <h5 className="mb-2 text-secondary">Great Daily Deals Discount</h5>
                            <p>
                              Save more every day with exciting offers and limited-time discounts on top-rated products.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Our Team */}
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h2>Our Team</h2>
                    <p>Meet the people behind FoodExpress — a team of passionate professionals dedicated to delivering freshness, value, and satisfaction to your doorstep.</p>
                </div>
                <Row>
                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <Image
                                src="https://klbtheme.com/groci/wp-content/uploads/2018/08/1-3.jpg"
                                alt="Stave Martin"
                                fluid
                                className="mb-4"
                            />
                            <p className="mb-3">
                               With extensive experience in operations and customer fulfillment,smoothly from checkout to delivery. Her leadership keeps FoodExpress fast, efficient, and reliable.
                            </p>
                            <h6 className="text-success mb-0">- Stacy Martin</h6>
                            <small>Manager</small>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <Image
                                src="https://klbtheme.com/groci/wp-content/uploads/2018/08/2-3.jpg"
                                alt="Mark Smith"
                                fluid
                                className="mb-4"
                            />
                            <p className="mb-3">
                              Maya brings creativity and clarity to everything you see. From visual branding to user interface design, she crafts an intuitive and engaging shopping experience.
                            </p>
                            <h6 className="text-success mb-0">- Maya Smith</h6>
                            <small>Designer</small>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <div className="text-center">
                            <Image
                                src="https://klbtheme.com/groci/wp-content/uploads/2018/08/3-2.jpg"
                                alt="Ryan Printz"
                                fluid
                                className="mb-4"
                            />
                            <p className="mb-3">
                               Riya leads our marketing team with a customer-first mindset. Her data-driven campaigns, promotions, and partnerships keep FoodExpress top of mind and growing every day.
                            </p>
                            <h6 className="text-success mb-0">- Riya Patel</h6>
                            <small>Marketing</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Aboutus
