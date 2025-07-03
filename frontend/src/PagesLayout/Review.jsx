import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import { FaCheck, FaStar } from "react-icons/fa6";
import Title from "./Title";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import food1 from "../assets/food_1.png";
import food2 from "../assets/food_2.png";

const Review = () => {
    return (
        <>
            <div className="py-5 bg-light">
                <Container>
                    <Title title1={"DELICIOUS"} title2={"REVIEWS"} titleStyles="text-center mb-5" paraStyles="d-block" />
                    <Row className="g-5">
                        <Col lg={4} className="d-none d-lg-flex flex-column align-items-start justify-content-center gap-3">
                            <Title title1={"What People"} title2={"Says"} title1Styles="pb-2" paraStyles="d-block" />
                            <div className="bg-secondary-subtle p-3 rounded w-100">
                                <div className="d-flex  text-warning gap-2 mb-2">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <div className="fw-medium fs-6">
                                    more than <strong>+25,000</strong>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Row xs={1} sm={2} className="g-4">
                                <Col>
                                    <Card className="h-100 bg-white shadow-sm p-3">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image src={user1} roundedCircle width={44} height={44} alt="User 1" />
                                                    <h6 className="mb-0 fw-semibold">Roy Ninja</h6>
                                                </div>
                                                <Badge bg="secondary" className="d-flex align-items-center gap-1">
                                                    <FaCheck /> Verified
                                                </Badge>
                                            </div>
                                            <hr />
                                            <div className="d-flex gap-1 text-warning small mb-3">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            <h5 className="fw-bold">High Quality</h5>
                                            <p className="text-muted">
                                                Each dish is prepared with the finest ingredients to ensure rich flavors and outstanding freshness. We take pride in delivering meals that exceed expectations, paired with prompt and friendly service. A true delight for every food lover!
                                            </p>
                                            <div className="d-flex gap-2 mt-3">
                                                <Image src={food1} alt="Food 1" rounded width={44} height={44} style={{ objectFit: 'cover' }} />
                                                <Image src={food2} alt="Food 2" rounded width={44} height={44} style={{ objectFit: 'cover' }} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="h-100 bg-white shadow-sm p-3">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image src={user2} roundedCircle width={44} height={44} alt="User 2" />
                                                    <h6 className="mb-0 fw-semibold">Samari Ziyad</h6>
                                                </div>
                                                <Badge bg="secondary" className="d-flex align-items-center gap-1">
                                                    <FaCheck /> Verified
                                                </Badge>
                                            </div>
                                            <hr />
                                            <div className="d-flex gap-1 text-warning small mb-3">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            <h5 className="fw-bold">Tasty Flavour</h5>
                                            <p className="text-muted">
                                                The food was incredibly delicious! Each bite was packed with vibrant flavors and exceptional quality. The service was fast, and everything arrived fresh and perfectly prepared. I highly recommend giving it a try!
                                            </p>
                                            <div className="d-flex gap-2 mt-3">
                                                <Image src={food1} alt="Food 1" rounded width={44} height={44} style={{ objectFit: 'cover' }} />
                                                <Image src={food2} alt="Food 2" rounded width={44} height={44} style={{ objectFit: 'cover' }} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default Review;