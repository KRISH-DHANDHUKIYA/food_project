import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white pt-5">
        <footer className="text-center text-lg-start">
          <Container className="px-3 px-md-4 px-lg-5">
            <Row className="pt-4 pb-5 gy-4">

              <Col xs={12} md={6} lg={5} >
                <h6 className="fs-2 mb-3">About Us</h6>
                <p className="text-light">
                  Delivering happiness one bite at a time. From fresh ingredients to fast delivery, we are committed to serving you the tastiest meals right at your doorstep.
                </p>

                <Form className="mt-3">
                  <InputGroup>
                    <Form.Control type="email" placeholder="Enter your email" required className="footer-input" />
                    <Button variant="secondary" type="submit" className="footer-button" style={{ backgroundColor: "#347433" }}>
                      Subscribe
                    </Button>
                  </InputGroup>
                </Form>

                <div className="d-flex justify-content-center justify-content-md-start text-center flex-wrap gap-2 mt-3 mb-4">
                  <Button variant="outline-light" className="border-2 rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }} href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <Button variant="outline-light" className="border-2 rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }} href="https://x.com/" target="_blank">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button variant="outline-light" className="border-2 rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }} href="https://www.google.com/" target="_blank">
                    <i className="fab fa-google" />
                  </Button>
                  <Button variant="outline-light" className="border-2 rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }} href="https://www.instagram.com/" target="_blank">
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button variant="outline-light" className="border-2 rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }} href="https://www.youtube.com/" target="_blank">
                    <i className="fab fa-youtube" />
                  </Button>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <h6 className="fs-5 mb-4">Contact Us</h6>
                <p className="footer-clickable"><i className="fa-solid fa-location-dot me-2 text-light" /> UG-1, V3 Corner, Adajan, Surat</p>
                <p className="footer-clickable"><i className="fa-solid fa-envelope me-2 text-light" /> info@foodexpress.in</p>
                <p className="footer-clickable"><i className="fas fa-phone me-2 text-light" /> +91 908 154 5252</p>
              </Col>

              <Col xs={12} sm={6} lg={2}>
                <h6 className="fs-5 mb-4">Explore More</h6>
                <p className="footer-clickable">Our Story</p>
                <p className="footer-clickable">Fresh & Healthy</p>
                <p className="footer-clickable">Quick Bites</p>
                <p className="footer-clickable">Special Offers</p>
                <p className="footer-clickable">Top Picks</p>
                <p className="footer-clickable">Help Center</p>
              </Col>

              <Col xs={12} sm={6} lg={2}>
                <h6 className="fs-5 mb-4">Community</h6>
                <p className="footer-clickable">Join Our Newsletter</p>
                <p className="footer-clickable">Privacy Policy</p>
                <p className="footer-clickable">Exclusive Deals</p>
                <p className="footer-clickable">Customer Stories</p>
              </Col>

            </Row>
          </Container>

          <Container fluid className="px-0">
            <hr className="text-white opacity-50 mx-auto" style={{ maxWidth: "1140px" }} />
          </Container>

          <div className="text-center py-3 small">
            © 2025 <span className="fw-bold text-white">FoodExpress</span> All rights reserved
          </div>

        </footer>
      </div>
    </>
  )
}

export default Footer;