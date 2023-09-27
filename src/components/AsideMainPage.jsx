import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const AsideMainPage = () => {
    return (
    <Card>
        <Card.Header>
            <Card.Img variant="top" src="holder.js/100px180"    className='rounded circle'/>
            <Card.Title>Name</Card.Title>
            <Card.Text> Role</Card.Text>
        </Card.Header>
        <Card.Body>
            <Container>
                <Row className='justify-content-between'>
                    <Col sm={8}>
                        <Card.Text>
                            Who's viewed your profile
                        </Card.Text>
                    </Col>
                    <Col sm={2}>
                        <Card.Text>
                            0
                        </Card.Text>
                    </Col>
                
            
                    <Col sm={8}>
                        <Card.Text>
                            Connections
                        </Card.Text>
                    </Col>
                    <Col sm={2}>
                        <Card.Text>
                            0
                        </Card.Text>
                    </Col>
                </Row>
            </Container>
                <Card.Text className='fw-bold'>
                    Grow your network
                </Card.Text>
        </Card.Body>

        <Card.Body>
            <Card.Text>
                Access exclusive tools & insights
            </Card.Text>
            <Card.Link href="#">Network Smarter, Try Premium Free
            </Card.Link>
        </Card.Body>

        <Card.Footer>
            <Card.Text>
                <i class="bi bi-bookmark-fill"></i> My items
            </Card.Text>
        </Card.Footer>
    </Card>
    )
}

export default AsideMainPage;





    