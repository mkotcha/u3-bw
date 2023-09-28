import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hidePostModal, newPostFetch } from "../redux/actions";

const PostModal = () => {
  const show = useSelector(state => state.postModal.show);
  const [postText, setPostText] = useState({
    text: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newPostFetch(postText));
    /* dispatch() */
  };

  const handleChange = event => {
    setPostText({ text: event.target.value });
  };

  const handleClose = () => {
    dispatch(hidePostModal());
  };

  useEffect(() => {}, []);

  return (
    <Modal show={show} size="lg" className="">
      <Modal.Header closeButton onClick={handleClose}>
        <Link className="text-decoration-none text-dark">
          <div className="d-flex align-items-center  m-3">
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
                  <i className="bi bi-caret-down-fill"></i>
                </span>
              </span>
              <div className="fs-6">Post To Anyone</div>
            </div>
          </div>
        </Link>
      </Modal.Header>

      <Modal.Body>
        <div className="p-3 fs-5">
          <Form id="post-form" onSubmit={event => handleSubmit(event)}>
            <Form.Group>
              <Form.Control
                required
                as="textarea"
                placeholder="What do you want to talk about?"
                value={postText.text}
                onChange={handleChange}
                className="border-0"
                style={{ height: "200px" }}
              />
            </Form.Group>
          </Form>
        </div>

        <div className="ps-3  pb-3">
          <div className="d-flex ">
            <span className="me-2">
              <Button variant="outline-secondary" className="py-2 px-3 rounded-circle">
                <span className="fs-5 text-secondary  ">
                  <i className="bi bi-card-image "></i>
                </span>
              </Button>
            </span>
            <span className="me-2">
              <Button variant="outline-secondary" className="py-2 px-3 rounded-circle color-secondary ">
                <span className="fs-5 text-secondary">
                  <i className="bi bi-calendar3"></i>
                </span>
              </Button>
            </span>
            <span className="me-2">
              <Button variant="outline-secondary" className="py-2 px-3 rounded-circle color-secondary ">
                <span className="fs-5 text-secondary">
                  <i className="bi bi-flower1"></i>
                </span>
              </Button>
            </span>
            <span className="me-2">
              <Button variant="outline-secondary" className="py-2 px-3 rounded-circle color-secondary ">
                <span className="fs-5 text-secondary">
                  <i className="bi bi-three-dots"></i>
                </span>
              </Button>
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" form="post-form" variant="outline-secondary">
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
