import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid text-white px-5 pt-5 bg-dark">
      <footer className="text-center text-lg-start">
        <Container className=" pb-0">
          <section>
            <Row className="py-5 gy-4">
              <Col xs={12} md={6} lg={4} className="text-center text-lg-start">
                <Link to="/" className="text-decoration-none"><div className="text-light header1">FoodExpress</div></Link>
                <p className='text-light'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat odit alias dicta consequatur harum labore.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start  
                flex-wrap gap-2 my-3">
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://x.com/">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.google.com/">
                    <i className="fab fa-google" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button variant="primary" className="btn-floating" target="_blank" href="https://www.youtube.com/">
                    <i className="fab fa-youtube" />
                  </Button>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4} className="text-center text-lg-start">
                <h6 className="my-3 fs-5">Contact Details</h6>
                <p className='text-light'><i className="fa-solid fa-location-dot me-2 text-light" /> UG-1, V3 Corner, Adajan, Surat</p>
                <p className='text-light'><i className="fa-solid fa-envelope me-2 text-light" /> info@easyskill.in</p>
                <p className='text-light'><i className="fas fa-phone me-2 text-light" /> +91 908 154 5252</p>
              </Col>

              <Col xs={12} sm={6} lg={4} className="text-center text-lg-start">
                <h6 className="my-3 fs-5">Quick Links</h6>
                <Link to="/" className="text-white text-decoration-none d-block mb-2">Home</Link>
                <Link to="/menu" className="text-white text-decoration-none d-block mb-2">Menu</Link>
                <Link to="/contactus" className="text-white text-decoration-none d-block mb-2">Contact Us</Link>
              </Col>
            </Row>
          </section>
        </Container>

        <Container fluid className="px-4">
          <hr className="text-white opacity-50 mx-auto" style={{ maxWidth: '1140px' }} />
        </Container>

        <div className="text-center p-3 mt-2 text-white small fontt">
          © 2025 Copyright
          <span className="fw-bold">
            <Link to="/" className="text-white text-decoration-none">FoodExpress</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
