import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function ExperienceCard () {
  return (
    <Card className='mt-3'>
      <Card.Header>
        <Container>
            <Row className="justify-content-between">
                <Col sm={3}> 
                    <Card.Title>Experience</Card.Title>
                </Col>

                <Col sm={2}>
                    <Card.Link href="#"><i class="bi bi-plus"></i></Card.Link>
                    <Card.Link href="#"><i class="bi bi-pencil"></i></Card.Link>
                </Col>
            </Row>
        </Container>
        </Card.Header>
        <Card.Body>
            <Card.Title>Professional activity - Role</Card.Title>
            <Card.Subtitle>Company Name</Card.Subtitle>
            <Card.Text>Period of time working.</Card.Text>
            <Card.Text>Work location</Card.Text>
            <Card.Text>Some detail about job.</Card.Text>
        </Card.Body>

        <Card.Body>
            <Card.Title>Professional activity - Role</Card.Title>
            <Card.Subtitle>Company Name</Card.Subtitle>
            <Card.Text>Period of time working.</Card.Text>
            <Card.Text>Work location</Card.Text>
            <Card.Text>Some detail about job.</Card.Text>
        </Card.Body>

       <Card.Footer>
        <Card.Link href="#">Show all experiences<i class="bi bi-arrow-right-short"></i></Card.Link>
        </Card.Footer>

    </Card>
  );
}

export default ExperienceCard;