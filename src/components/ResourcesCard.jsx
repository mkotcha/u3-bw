import Card from 'react-bootstrap/Card';

function ResourcesCard () {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Resources</Card.Title>
        <Card.Subtitle> <i class="bi bi-eye-fill"></i> Private to you </Card.Subtitle>
        <Card.Link href="#"> Creator mode</Card.Link>
        {/* //TODO: BOX GRIGIO INTORNO ALLO SPAN  */}
        <span>Off</span> 
        <Card.Text>Get discovered, showcase content on your profile, and get access to creator tools</Card.Text>
        <Card.Link href="#"> My Network</Card.Link>
        <Card.Text>See and manage your connections and interests</Card.Text>
        <Card.Link href="#">Show all 5 resources <i class="bi bi-arrow-right-short"></i></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ResourcesCard;