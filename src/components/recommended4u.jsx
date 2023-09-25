import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row} from 'react-bootstrap';


function Recommended4u () {
  return (
    <Card className='mt-3'>
      <Card.Body>
        <Card.Title>Suggested for you</Card.Title>
        <Card.Subtitle> <i class="bi bi-eye-fill"></i> Private to you </Card.Subtitle>
        <Card.Subtitle className='mt-4 mb-3'>Intermediate</Card.Subtitle>
        <Container>
          
                <ProgressBar now={90}/> <span>6/7</span>;
  
        </Container>
        <Card.Text>
        Complete 2 steps to achieve 
           {/* //TODO BLU - hover sottolineato - click si apre un modale */}
           <Card.Link href="#">All-star</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Recommended4u;