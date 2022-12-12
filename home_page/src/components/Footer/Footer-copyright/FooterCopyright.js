import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer-copyright.scss";
function FooterCopyright() {
  return (
    <Container fluid className="footer-copyright">
      <Container className="">
        <Row className=" justify-content-start">
          <Col className="footer-copyright-left">
            <Row>
              <Col lg={2} className=" text-center text-lg-start">
                <span className="me-0 me-lg-4 footer-copyright-left-font">
                  Terms of Use
                </span>
              </Col>
              <Col lg={2} className=" text-center text-lg-start">
                <span className=" me-0 me-lg-4 footer-copyright-left-font">
                  Privacy Policy
                </span>
              </Col>
              <Col lg={2} className=" text-center text-lg-start">
                <span className=" me-0 me-lg-4 footer-copyright-left-font">
                  Cookies
                </span>
              </Col>
            </Row>
          </Col>
          <Col lg={2} className="text-center text-lg-end bottomFooter-right">
            <span className="footer-copyright-left-font haklar">
              Tüm hakları saklıdır.
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FooterCopyright;
