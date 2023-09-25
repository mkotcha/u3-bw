import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


function ActivityCard () {
  return (
    <Card className='mt-3'>
      <Card.Body>
        <Container>
            <Row className="justify-content-between">
                <Col sm={3}> 
                    <Card.Title>Activity</Card.Title>
                    <Card.Link href='#'> 258 followers </Card.Link>
                </Col>

                <Col sm={4}>
                    <Button variant="outline-primary">Create a post</Button>{' '}
                    <Card.Link href="#"><i class="bi bi-pencil"></i></Card.Link>
                </Col>
            </Row>
        </Container>
        
        <Card.Text>You haven't posted yet</Card.Text>
        <Card.Text>Posts you share will be displayed here.</Card.Text>

        </Card.Body>
       <Card.Footer>
        <Card.Link href="#">Show all activity <i class="bi bi-arrow-right-short"></i></Card.Link>
        </Card.Footer>

    </Card>
  );
}

export default ActivityCard;