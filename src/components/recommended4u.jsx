import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";

function Recommended4u() {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Suggested for you</Card.Title>
        <Card.Subtitle>
          {" "}
          <i className="bi bi-eye-fill"></i> Private to you{" "}
        </Card.Subtitle>
        <Card.Subtitle className="mt-4 mb-3">Intermediate</Card.Subtitle>
        <Container className="mb-3 align-items-center">
          <Row>
            <Col sm={11}>
              <ProgressBar now={90} />
            </Col>
            <Col sm={1}>
              <Card.Text>6/7</Card.Text>
            </Col>
          </Row>
        </Container>
        <Card.Text>
          Complete 2 steps to achieve
          {/* //TODO BLU - hover sottolineato - click si apre un modale */}
          <Card.Link className="mx-2" href="#">
            All-star
          </Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Recommended4u;
