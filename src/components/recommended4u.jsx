import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Recommended4u () {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Suggested for you</Card.Title>
        <Card.Subtitle> <i class="bi bi-eye-fill"></i> Private to you </Card.Subtitle>
        <Card.Subtitle>Intermediate</Card.Subtitle>
        <ProgressBar now={90}/> <span>6/7</span>;
        <Card.Text>
        Complete 2 steps to reach the 
           {/* //TODO BLU - hover sottolineato - click si apre un modale */}
           <Card.Link href="#">Maximum</Card.Link> level
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Recommended4u;