import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function ActivityCard() {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Container>
          <Row className="justify-content-between">
            <Col sm={3}>
              <Card.Title>Activity</Card.Title>
              <Card.Link href="#"> 258 followers </Card.Link>
            </Col>

            <Col sm={4}>
              <Button variant="outline-primary">Create a post</Button>{" "}
              <Card.Link href="#">
                <i className="bi bi-pencil fs-4 mx-4"></i>
              </Card.Link>
            </Col>
          </Row>
        </Container>

        <Card.Text className="mt-4 mb-0 fw-bold">You haven't posted yet</Card.Text>
        <Card.Text className="mt-1">Posts you share will be displayed here.</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Card.Link href="#">
          Show all activity <i className="bi bi-arrow-right-short"></i>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default ActivityCard;
