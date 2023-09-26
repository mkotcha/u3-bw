import { Button, Col, Container, NavDropdown, Row } from "react-bootstrap";

const FooTer = () => {
  return (
    <Container className="d-flex justify-content-evenly my-4" id="Footer">
      <Row>
        <Col>
          <p>Informazioni</p>
          <Row>
            <Col>
              <p>Linea guida per la community</p>
              <Row>
                <Col>
                  <NavDropdown title="Privacy e condizioni" id="basic-nav-dropdown">
                    <Container className="contDropdown ms-3 px-3  " fluid>
                      <h5>Account</h5>
                      <NavDropdown.Item href="#action/3.4">work </NavDropdown.Item>
                      <p>Post an activity</p>
                      <p>Account </p>
                      <p>Quit</p>
                    </Container>
                  </NavDropdown>
                  <p>Sale solution</p>
                </Col>
                <Row>
                  <p>Centro di sicurezza</p>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Accessibilità</p>
          <Row>
            <Col>
              <p>Carriera</p>
              <Row>
                <Col>
                  <p>Opzioni per gli annunci pubblicitari</p>
                </Col>
                <Row>
                  <p>Mobile</p>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Talent solution</p>
          <Row>
            <Col>
              <p>Soluzioni di marketing</p>
              <Row>
                <Col>
                  <p>Publicità</p>
                </Col>
                <Row>
                  <p>Piccole imprese</p>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Domande?</h5>
          <p>Visita il nostro centro assistenza</p>
          <Row>
            <Col>
              <h5>Gestisci il tuo account e la tua privacy</h5>
              <p>Vai alle impostazioni</p>
              <Row>
                <Col>
                  <h5>Trasparenza sui contenuti consigliati</h5>
                  <p>Scopri di più sui contenuti consigliati.</p>
                </Col>
                <Row>Centro di sicurezza</Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default FooTer;
