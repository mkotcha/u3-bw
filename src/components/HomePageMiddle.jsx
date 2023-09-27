import { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';

const HomePageMiddle = () => {
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
      </Container>
    </>
  );
};

export default HomePageMiddle;
