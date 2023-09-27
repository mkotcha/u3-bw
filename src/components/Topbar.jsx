import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Topbar = () => {
  const personalProfile = useSelector(state => state.me);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top p-0 w-100">
        <Row className="justify-content-center w-100 mx-auto">
          <Col lg={7}>
            <div className="justify-content-around">
              <Row className="justify-content-between">
                <Col xs={3} className="align-self-center">
                  <div className="d-flex">
                    <Link to="/">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="me-2"
                      />
                    </Link>

                    <i className="bi bi-search d-lg-none fontSizeIconTopBar"></i>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2 d-none d-lg-inline" />
                  </div>
                </Col>
                {/* CONTAINER ICONE NAV */}
                <Col xs={7} lg={7}>
                  <Container>
                    <Navbar id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#home">
                          <Row>
                            <i className="bi bi-house-door-fill text-center fontSizeIconTopBar"></i>
                            <span className="smalltext text-center d-none d-lg-inline">Home</span>
                          </Row>
                        </Nav.Link>
                        <Nav.Link href="#home">
                          <Row>
                            <i className="bi bi-people-fill text-center fontSizeIconTopBar"></i>
                            <span className="smalltext text-center d-none d-lg-inline">My Network</span>
                          </Row>
                        </Nav.Link>
                        <Nav.Link href="#home">
                          <Row>
                            <i className="bi bi-briefcase-fill text-center fontSizeIconTopBar"></i>
                            <span className="smalltext text-center d-none d-lg-inline">Jobs</span>
                          </Row>
                        </Nav.Link>
                        <Nav.Link href="#home">
                          <Row>
                            <i className="bi bi-chat-left-dots-fill text-center fontSizeIconTopBar"></i>

                            <span className="smalltext text-center d-none d-lg-inline">My Network</span>
                          </Row>
                        </Nav.Link>
                        <Nav.Link href="#home">
                          <Row>
                            <i className="bi bi-bell-fill text-center fontSizeIconTopBar"></i>
                            <span className="smalltext text-center d-none d-lg-inline">Notification</span>
                          </Row>
                        </Nav.Link>

                        <div className="align-self-center d-flex-inline flex-column align-items-center me-3">
                          <Link to={"/profilepage/"}>
                            <img
                              src={personalProfile.image}
                              alt="profile"
                              className="rounded-circle "
                              style={{ width: "35px" }}
                            />
                          </Link>
                          <NavDropdown title="Me" id="basic-nav-dropdown" className="d-none d-lg-inline">
                            <h5 className="px-2">Account</h5>
                            <NavDropdown.Item href="#action/3.4">work </NavDropdown.Item>
                            <Button variant="primary" className="mx-1">
                              View profile
                            </Button>{" "}
                            <hr></hr>
                            <h5 className="px-2">Account</h5>
                            <p className="px-2">Try Premium free</p>
                            <p className="px-2">Setting and Privacy</p>
                            <p className="px-2">Help</p>
                            <p className="px-2">Language</p>
                            <hr></hr>
                            <h5 className="px-2">Gestisci</h5>
                            <p className="px-2">Post an activity</p>
                            <p className="px-2">Account </p>
                            <hr></hr>
                            <p className="px-2">Quit</p>
                          </NavDropdown>
                        </div>
                        <div className="align-self-center border-start d-flex flex-column align-items-center">
                          <i className="bi bi-grid-3x3-gap-fill ms-3"></i>
                          <NavDropdown title="Per le aziende" id="basic-nav-dropdown" className="d-none d-lg-inline">
                            <NavDropdown.Item href="#action/3.4">Per le aziende</NavDropdown.Item>
                          </NavDropdown>
                        </div>
                      </Nav>
                    </Navbar>
                  </Container>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
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
