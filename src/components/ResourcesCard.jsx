import Card from "react-bootstrap/Card";

function ResourcesCard() {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Resources</Card.Title>
        <Card.Subtitle>
          {" "}
          <i className="bi bi-eye-fill"></i> Private to you{" "}
        </Card.Subtitle>
        <Card.Link href="#"> Creator mode</Card.Link>
        {/* //TODO: BOX GRIGIO INTORNO ALLO SPAN  */}
        <span>Off</span>
        <Card.Text>Get discovered, showcase content on your profile, and get access to creator tools</Card.Text>
        <Card.Link href="#"> My Network</Card.Link>
        <Card.Text>See and manage your connections and interests</Card.Text>
      </Card.Body>

      <Card.Footer className="text-center">
        <Card.Link href="#">
          Show all 5 resources <i className="bi bi-arrow-right-short"></i>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default ResourcesCard;
