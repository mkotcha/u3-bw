import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Topbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Row>
            <Col>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Col>
            <Col xs="auto">
              <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
            </Col>
          </Row>
        </Container>
        {/* CONTAINER ICONE NAV */}
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Row>
                  <i className="bi bi-house-door-fill"></i>
                  <span className="smalltext ">Home</span>
                </Row>
              </Nav.Link>
              <Nav.Link href="#home">
                <Row>
                  <i className="bi bi-people-fill"></i>
                  <span className="smalltext">My Network</span>
                </Row>
              </Nav.Link>
              <Nav.Link href="#home">
                <Row>
                  <i className="bi bi-briefcase-fill"></i>
                  <span className="smalltext">Jobs</span>
                </Row>
              </Nav.Link>
              <Nav.Link href="#home">
                <Row>
                  <i className="bi bi-chat-left-dots-fill"></i>

                  <span className="smalltext">My Network</span>
                </Row>
              </Nav.Link>
              <Nav.Link href="#home">
                <Row>
                  {" "}
                  <i className="bi bi-bell-fill"></i>
                  <span className="smalltext">Notification</span>
                </Row>
              </Nav.Link>

              <NavDropdown title="Me" id="basic-nav-dropdown">
                <h5>Account</h5>
                <NavDropdown.Item href="#action/3.4">work </NavDropdown.Item>
                <Button variant="primary">View profile</Button> <hr></hr>
                <h5>Account</h5>
                <p>Try Premium free</p>
                <p>Setting and Privacy</p>
                <p>Help</p>
                <p>Language</p>
                <hr></hr>
                <h5>Gestisci</h5>
                <p>Post an activity</p>
                <p>Account </p>
                <hr></hr>
                <p>Quit</p>
              </NavDropdown>

              <NavDropdown title="Per le aziende" id="basic-nav-dropdown">
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">Per le aziende</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

// function MyOffcanvas() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Mostra Offcanvas
//       </Button>

//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Titolo Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>Contenuto dell'Offcanvas</Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );

export default Topbar;
