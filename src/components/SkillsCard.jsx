import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


function SkillsCard () {
  return (
    <Card className='mt-3'>
     <Card.Header>
        <Container>
            <Row className="justify-content-between">
                <Col sm={3}> 
                    <Card.Title>Skills</Card.Title>
                </Col>

                <Col sm={4}>
                    <Button variant="outline-primary">Demonstrate skills</Button>{' '}
                    <Card.Link href="#"><i class="bi bi-plus"></i></Card.Link>
                    <Card.Link href="#"><i class="bi bi-pencil"></i></Card.Link>
                </Col>
            </Row>
        </Container>
        </Card.Header>

        <Card.Body>
            <Card.Title>Skill 1</Card.Title>
            <Card.Text>Role and Company where you developed that skill </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Title>Skill 1</Card.Title>
            <Card.Text>Role and Company where you developed that skill </Card.Text>
        </Card.Body>

       <Card.Footer>
        <Card.Link href="#" className='text-center'>Show all Skills <i class="bi bi-arrow-right-short"></i></Card.Link>
        </Card.Footer>

    </Card>
  );
}

export default SkillsCard;