import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { newPostFetch } from "../redux/actions";

const PostModal = () => {
  /* const show = useSelector(state => state.PostModal.show); */
  const [postText, setPostText] = useState({
    text: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newPostFetch(postText));
    console.log(postText);
    /* dispatch() */
  };

  const handleChange = event => {
    setPostText({ text: event.target.value });
  };

  useEffect(() => {}, []);

  return (
    <Container className="w-75">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Link className="text-decoration-none text-dark">
            <div lg={8} className="d-flex align-items-center  ">
              <img
                className="rounded-circle"
                src="https://images.unsplash.com/photo-1591738802175-709fedef8288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt=""
                style={{ height: "70px", width: "70px" }}
              />
              <div className="ms-2">
                <span className="fs-5">
                  Name{" "}
                  <span className="ms-2 fs-6">
                    <i class="bi bi-caret-down-fill"></i>
                  </span>
                </span>
                <div className="fs-6">Post To Anyone</div>
              </div>
            </div>
          </Link>
        </Modal.Header>

        <Modal.Body>
          <div style={{ height: "200px" }} className="mt-5 mb-5 fs-5">
            <Form onSubmit={event => handleSubmit(event)}>
              <Form.Group controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={postText.text}
                  onChange={handleChange}
                />

                <Button type="submit">Submit form</Button>
              </Form.Group>
            </Form>

            <p className="opacity-50">What do you want to talk about?</p>
          </div>
        </Modal.Body>

        <Container className="fs-4 ps-0">
          <span className="opacity-75 fw-bolder">
            <i class="bi bi-emoji-smile"></i>
          </span>
        </Container>

        <Container className="ps-0 mt-3 border-bottom pb-4">
          <div>
            <span className="me-2">
              <button className="py-2 px-3 rounded-circle color-secondary ">
                <span className="fs-5 text-secondary ">
                  <i className="bi bi-card-image "></i>
                </span>
              </button>
            </span>
            <span className="me-2">
              <button className="py-2 px-3 rounded-circle color-secondary ">
                <span className="fs-5 text-secondary">
                  <i className="bi bi-calendar3"></i>
                </span>
              </button>
            </span>
            <span className="me-2">
              <button className="py-2 px-3 rounded-circle color-secondary ">
                <span className="fs-5 text-secondary">
                  <i className="bi bi-flower1"></i>
                </span>
              </button>
            </span>
            <span className="me-2">
              <button className="py-2 px-3 rounded-circle color-secondary ">
                <span className="fs-5 text-secondary">
                  <i className="bi bi-three-dots"></i>
                </span>
              </button>
            </span>
          </div>
        </Container>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
};

export default PostModal;
