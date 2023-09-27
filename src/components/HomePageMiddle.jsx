import { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';

const HomePageMiddle = () => {
  /* const state = useSelector(state => state.generalPosts); */
  const dispatch = useDispatch();
  /* console.log(state); */

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Container>
        <Container className="d-flex mt-3 bg-light p-3 ">
          <Row>
            <Col className="d-flex">
              <div>
                <img
                  className="rounded-circle"
                  src="https://images.unsplash.com/photo-1591738802175-709fedef8288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt=""
                  style={{ height: '50px', width: '50px' }}
                />
              </div>

              <Form.Group controlId="validationCustom01">
                <Form.Control
                  style={{ height: '50px', width: '430px', objectFit: 'contain' }}
                  className="rounded-pill ms-1"
                  required
                  type="text"
                  placeholder="Start a post"
                  defaultValue="Start a post"
                />{' '}
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Container className="bg-light pb-3">
          <Row>
            <Col className="d-flex justify-content-between">
              <Link className="text-decoration-none">
                <i class="bi bi-image-fill fs-5">
                  <span className="ms-2 fw-medium fs-6 italic-none fst-normal text-secondary text-opacity-75">
                    Media
                  </span>
                </i>
              </Link>

              <Link className="text-decoration-none ">
                <i class="bi bi-calendar3 fs-5">
                  <span className="ms-2 fw-medium fs-6 italic-none fst-normal text-secondary text-opacity-75 ">
                    Event
                  </span>
                </i>
              </Link>
              <Link className="text-decoration-none">
                <i class="bi bi-newspaper fs-5">
                  <span className="ms-2 fw-medium fs-6 italic-none fst-normal text-secondary text-opacity-75">
                    Write Article
                  </span>
                </i>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex mt-3 bg-light p-3 ">
          <Row>
            <Col className="d-flex ">
              <div className="">
                <img
                  className="rounded-circle"
                  src="https://images.unsplash.com/photo-1591738802175-709fedef8288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt=""
                  style={{ height: '50px', width: '50px' }}
                />
              </div>

              <div className="d-flex flex-column lh-sm ms-2 ">
                <span>
                  Name <span className="text-opacity-50">• You</span>
                </span>
                <span>position</span>
                <span>
                  time • <i class="bi bi-globe-americas"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bg-light ">
          <div className="text-opacity-50 pb-4 border-bottom">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet repellendus quod optio animi, ullam
            dicta ex consequuntur laudantium dignissimos recusandae. !
          </div>
          <Container className="bg-light mt-4 pb-4 ">
            <Row>
              <Col className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <i class="bi bi-hand-thumbs-up fs-4"></i>
                  <span>Like</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <i class="bi bi-chat-text fs-4 "></i>
                  <span className="">Comment</span>
                </div>
                <div className="d-flex flex-column">
                  <i class="bi bi-crop fs-4"></i>
                  <span>Repost</span>
                </div>
                <div className="d-flex flex-column">
                  <i class="bi bi-send fs-4"></i>
                  <span>send</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default HomePageMiddle;
