import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function EducationCard() {
  return (
    <Card className="mt-3">
      <Card.Header>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col sm={2}>
              <Card.Title className="pt-3">Education</Card.Title>
            </Col>

            <Col sm={2}>
              <Card.Link href="#">
                <i className="bi bi-plus fs-4"></i>
              </Card.Link>
              <Card.Link href="#">
                <i className="bi bi-pencil fs-4 mx-2"></i>
              </Card.Link>
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body>
        <Card.Title>University / School name</Card.Title>
        <Card.Subtitle>Degree Title </Card.Subtitle>
        <Card.Text>Period of time studying.</Card.Text>
        <Card.Text>City</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Title>University / School name</Card.Title>
        <Card.Subtitle>Degree Title </Card.Subtitle>
        <Card.Text>Period of time studying.</Card.Text>
        <Card.Text>City</Card.Text>
      </Card.Body>

      <Card.Footer className="text-center">
        <Card.Link href="#">
          Show all education<i className="bi bi-arrow-right-short"></i>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default EducationCard;
