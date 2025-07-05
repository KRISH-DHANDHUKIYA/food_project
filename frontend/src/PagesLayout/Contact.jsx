import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaHeadphones, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <>
        <section className="mt-5">
            <Container className="py-5">
                <Row className="gy-5">
                    {/* Contact Form */}
                    <Col xs={12} xl={6}>
                        <div className="mb-4">
                            <h3 className="fw-bold">Get in <span className="text-success">Touch</span></h3>
                            <p>
                                Have a question or need help? Send us a message, and we will get back to you as soon as possible.
                            </p>
                        </div>

                        <Form>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Control type="email" placeholder="Enter Your Email" />
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Write Your Message Here"
                                />
                            </Form.Group>

                            <Button variant="success" className="rounded shadow-sm">
                                Send Message
                            </Button>
                        </Form>
                    </Col>

                    {/* Contact Details */}
                    <Col xs={12} xl={6}>
                        <div className="mb-4">
                            <h3 className="fw-bold">Contact <span className="text-success"> Details</span></h3>
                            <p>
                                We are always here to assist you! Feel free to reach out through any of the following methods.
                            </p>
                        </div>

                        <div className="d-flex flex-column gap-4">
                            <div>
                                <h5 className="fw-bold">Location:</h5>
                                <p className="d-flex align-items-center gap-2 text-muted">
                                    <FaLocationDot />  UG-1, V3 Corner, Adajan, Surat 1111140
                                </p>
                            </div>

                            <div>
                                <h5 className="fw-bold">Email:</h5>
                                <p className="d-flex align-items-center gap-2 text-muted">
                                    <FaEnvelope /> info@foodexpress.com
                                </p>
                            </div>

                            <div>
                                <h5 className="fw-bold">Support:</h5>
                                <p className="d-flex align-items-center gap-2 text-muted">
                                    <FaHeadphones /> 24/7 Support is open
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Google Map */}
                <div className="py-5">
                    <div className="mb-4">
                        <h3 className="fw-bold">Find Us Here</h3>
                    </div>

                    <Card className="overflow-hidden shadow rounded-4">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.50391929159!2d72.78521309999999!3d21.2020102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d7bf1126813%3A0xf094b7f0b9bed088!2sEasySkill%20Career%20Academy%20-%20Adajan!5e0!3m2!1sen!2sin!4v1751713351245!5m2!1sen!2sin"
                                className="w-100 h-100 border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </Card>
                </div>
            </Container>
        </section>
        </>
    );
};

export default Contact;
