import { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { searchForJobs } from "../redux/actions";

const Topbar = () => {
  /* const [query, setQuery] = useState(""); */
  const [changeJob, setChangeJob] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchForJobs(changeJob));
    navigate("/Jobs");
  };

  const personalProfile = useSelector(state => state.me);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top p-0 w-100 shadow-sm">
        <Row className="justify-content-center align-items-center w-100 mx-auto">
          <Col xs={12} md={12} lg={10} xxl={8} className="p-0">
            <div className="d-flex w-100">
              <div className="d-flex align-items-center">
                <Link to="/">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className=""
                  />
                </Link>
              </div>

              {/* CONTAINER ICONE NAV */}

              <div className="d-flex flex-grow-1 w-100 px-4">
                <Nav className="w-100">
                  <div className="d-flex gap-4 justify-content-between w-100">
                    <div className="nav-link ">
                      <div className="d-flex flex-column text-center text-reset text-decoration-none">
                        <i className="bi bi-search d-lg-none fontSizeIconTopBar"></i>
                        <span className="smalltext text-center d-none d-md-inline d-lg-none">Search</span>
                      </div>
                      <div className="d-flex h-100 align-items-center">
                        <Form onSubmit={handleSubmit} className="d-none d-lg-inline">
                          <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 "
                            onChange={e => setChangeJob(e.target.value)}
                          />
                          <Button className="d-none" type="submit">
                            click
                          </Button>
                        </Form>
                      </div>
                    </div>

                    <NavLink to={"/"} className="nav-link">
                      <div className="d-flex flex-column text-center text-reset text-decoration-none">
                        <i className="bi bi-house-door-fill text-center fontSizeIconTopBar"></i>
                        <span className="smalltext text-center d-none d-md-inline">Home</span>
                      </div>
                    </NavLink>
                    <NavLink to={"/My Network"} className="nav-link">
                      <div className="d-flex flex-column text-center text-reset text-decoration-none">
                        <i className="bi bi-people-fill text-center fontSizeIconTopBar"></i>
                        <span className="smalltext text-center d-none d-md-inline">My Network</span>
                      </div>
                    </NavLink>
                    <NavLink to={"/Jobs"} className="nav-link">
                      <div className="d-flex flex-column text-center text-reset text-decoration-none">
                        <i className="bi bi-briefcase-fill text-center fontSizeIconTopBar"></i>
                        <span className="smalltext text-center d-none d-md-inline">Jobs</span>
                      </div>
                    </NavLink>
                    <NavLink to={"/Messaging"} className="nav-link">
                      <div className="d-flex flex-column text-center text-reset text-decoration-none">
                        <i className="bi bi-chat-left-dots-fill text-center fontSizeIconTopBar"></i>
                        <span className="smalltext text-center d-none d-md-inline">Messaging</span>
                      </div>
                    </NavLink>
                    <NavLink to={"/Notification"} className="nav-link">
                      <div className="d-flex flex-column text-center text-reset text-decoration-none">
                        <i className="bi bi-bell-fill text-center fontSizeIconTopBar"></i>
                        <span className="smalltext text-center d-none d-md-inline">Notification</span>
                      </div>
                    </NavLink>

                    <div className="align-self-center d-flex-inline flex-column align-items-center me-3">
                      <Link to={"/profilepage/"}>
                        <img
                          src={personalProfile.image}
                          alt="profile"
                          className="rounded-circle topbar-image-profile"
                        />
                      </Link>
                      <NavDropdown title="Me" id="basic-nav-dropdown" className="d-none d-md-inline">
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
                      <NavDropdown title="Per le aziende" id="basic-nav-dropdown" className="d-none d-md-inline">
                        <NavDropdown.Item href="#action/3.4">Per le aziende</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </div>
                </Nav>
              </div>
            </div>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};

export default Topbar;
