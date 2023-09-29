import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hidePostModal, newPostFetch, fetchPosts, postPostImage, putPostFetch } from "../redux/actions";

const PostModal = () => {
  const navigate = useNavigate();
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const options = {
    headers: { Authorization: "Bearer " + process.env.REACT_APP_BEARER },
  };
  const show = useSelector(state => state.postModal.show);
  const id = useSelector(state => state.postModal.id);
  const personal = useSelector(state => state.me);
  const [picture, setPicture] = useState("");
  const [postText, setPostText] = useState({
    text: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("post", event.target.formFile.files[0]);
    if (id) {
      if (formData.get("experience") !== "undefined") {
        dispatch(postPostImage(personal._id, id, formData));
      }
      dispatch(putPostFetch(postText, id));
    } else {
      dispatch(newPostFetch(postText, personal._id, formData));
    }
    navigate("/profilepage");
  };

  const handleChange = event => {
    setPostText({ text: event.target.value });
  };

  const handleImageChange = event => {
    const url = URL.createObjectURL(event.target.files[0]);
    setPicture(url);
  };

  const handleDelete = async () => {
    const deleteOptions = {
      ...options,
      method: "DELETE",
    };
    try {
      const response = await fetch(url + id, deleteOptions);
      if (response.ok) {
        dispatch(fetchPosts());
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    dispatch(hidePostModal());
  };

  useEffect(() => {
    const postFetch = async () => {
      try {
        const response = await fetch(url + id, options);
        if (response.ok) {
          const result = await response.json();
          setPostText(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id.length > 0) {
      postFetch();
    }
    setPicture(postText.image);
  }, [id]);

  return (
    <Modal show={show} size="lg" className="">
      <Modal.Header closeButton onClick={handleClose}>
        <Link className="text-decoration-none text-dark">
          <div className="d-flex align-items-center  m-3">
            <img className="rounded-circle" src={personal.image} alt="" style={{ height: "70px", width: "70px" }} />
            <div className="ms-2">
              <span className="fs-5">
                {personal.name}
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
            <div>
              <img src={picture} alt="" className=" w-50" />
            </div>
            <Form.Group controlId="formFile" className="mb-3" onChange={handleImageChange}>
              <Form.Label>Company image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

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
        {id && (
          <div className="me-auto" onClick={handleDelete} role="button">
            Delete experience
          </div>
        )}

        <Button type="submit" form="post-form" variant="outline-secondary">
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
