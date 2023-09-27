import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideProfileImageModal, personalFetch } from "../redux/actions";

const Test = () => {
  const me = useSelector(state => state.me);
  const [picture, setpicture] = useState("");
  const dispatch = useDispatch();

  const show = useSelector(state => state.imageProfilesModal.showImage);

  const handleChange = event => {
    const url = URL.createObjectURL(event.target.files[0]);
    setpicture(url);
  };
  const handleClose = () => {
    console.log("close");
    dispatch(hideProfileImageModal());
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile", event.target.formFile.files[0]);
    const url = "https://striveschool-api.herokuapp.com/api/profile/";
    const options = {
      body: formData,
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_BEARER,
      },
    };
    try {
      const response = await fetch(url + me._id + "/picture", options);
      if (response.ok) dispatch(personalFetch());
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    if (me.image) {
      setpicture(me.image);
    }
  }, [dispatch, me.image]);

  return (
    <>
      <Modal show={show}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Button onClick={handleClose}>
              <i class="bi bi-x-lg"></i>
            </Button>
          </Modal.Header>

          <Modal.Body>
            <div>
              <img src={picture} alt="" className="w-100" />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFile" className="mb-3" onChange={handleChange}>
                <Form.Label>Select a photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group>
                <Button type="submit">Submit</Button>
              </Form.Group>
            </Form>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default Test;
