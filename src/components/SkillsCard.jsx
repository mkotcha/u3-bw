import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


function SkillsCard () {
  return (
    <Card className='mt-3'>
     <Card.Header>
        <Container>
            <Row className="justify-content-between align-items-center">
                <Col sm={3}> 
                    <Card.Title>Skills</Card.Title>
                </Col>

                <Col sm={5}>
                    <Button variant="outline-primary" className='mx-3'>Demonstrate skills</Button>{' '}
                    <Card.Link href="#"><i class="bi bi-plus fs-4"></i></Card.Link>
                    <Card.Link href="#"><i class="bi bi-pencil fs-4"></i></Card.Link>
                </Col>
            </Row>
        </Container>
        </Card.Header>

        <Card.Body>
            <Card.Title>Skill 1</Card.Title>
            <Card.Text>Role and Company where you developed that skill </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Title>Skill 2</Card.Title>
            <Card.Text>Role and Company where you developed that skill </Card.Text>
        </Card.Body>

       <Card.Footer className='text-center'>
        <Card.Link href="#" >Show all Skills <i class="bi bi-arrow-right-short"></i></Card.Link>
        </Card.Footer>

    </Card>
  );
}

export default SkillsCard;