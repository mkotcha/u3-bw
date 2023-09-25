import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';


function AnalyticsCard () {
    return (
      <Card className='mt-3'>
        <Card.Body>
          <Card.Title>Analytics</Card.Title>
          <Card.Subtitle> <i class="bi bi-eye-fill"></i> Private to you </Card.Subtitle>   
            <Container>
                <Row>

                    <Col sm={4}>
                        
                        <Card.Link href="#"><i class="bi bi-people-fill"></i>15 profile views</Card.Link>
                        <Card.Text>Discover who's viewed your profile.</Card.Text>
                     
                    </Col>
                    <Col sm={4}>
                        
                            <Card.Link href="#"><i class="bi bi-search"></i> 2 search appearances</Card.Link>
                            <Card.Text>See how often you appear in search results.</Card.Text>
                      
                    </Col>
    
                </Row>
            </Container>
        </Card.Body>
      </Card>
    );
  }
  
  export default AnalyticsCard;





