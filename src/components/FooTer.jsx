import { Button, Col, Container, NavDropdown, Row } from "react-bootstrap";
import LanguageDropdown from "./LanguageDropdown";

const FooTer = () => {
  return (
    <Container className="d-flex justify-content-centre my-4" id="Footer" fluid>
      <Row className="Container">
        <Col>
          <p>Information</p>
          <Row>
            <Col>
              <p>Ccommunity guideline</p>
              <Row>
                <Col>
                  <NavDropdown title="Privacy condition" id="basic-nav-dropdown">
                    <p>Informazioni sulla privacy</p>
                    <p>Contratto di licenza</p>
                    <p>Termini e condizioni delle pagine</p>
                    <p>Informativa sui coockie</p>
                    <p>Informativa sul copyright</p>
                  </NavDropdown>
                  <p>Sale solution</p> <p>Security centre</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="Container">
        <Col>
          <p>Accessibility</p>
          <Row>
            <Col>
              <p>Carrer</p>
              <Row>
                <Col>
                  <p>Advertising options</p>
                  <p>Mobile</p>
                </Col>
                <Row></Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="Container">
        <Col>
          <p>Talent solution</p>
          <Row>
            <Col>
              <p>Marketing Solutions</p>
              <Row>
                <Col>
                  <p>Advertising</p>
                  <p>Small businesses</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="Container">
        <Col>
          <h5>
            <i class="bi bi-question-circle"></i>Request?
          </h5>
          <p>Visit our help center</p>
          <Row>
            <Col>
              <h5>
                <i class="bi bi-gear-fill"></i> Manage your account and your privacy
              </h5>
              <p>Go to settings</p>
              <Row>
                <Col>
                  <h5>
                    <i class="bi bi-shield-shaded"></i> Transparency on recommended content
                  </h5>
                  <p>Learn more about recommended content.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="Container">
        <Col>
          <p>Select language</p>
          <LanguageDropdown />
        </Col>
      </Row>
    </Container>
  );
};
export default FooTer;
