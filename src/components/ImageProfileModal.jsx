import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideProfileImageModal, putImageProfileFetch } from "../redux/actions";

const ImageProfileModal = () => {
  const formData = new FormData();
  const show = useSelector(state => state.imageProfilesModal.showImage);
  const [imgProfile, setImgProfile] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    console.log("close");
    dispatch(hideProfileImageModal());
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(putImageProfileFetch());
    formData.append("profile", imgProfile.file);
    putImageProfileFetch(formData);
    console.log(imgProfile.file);
    console.log(formData);
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="d-flex justify-content-center">
              <img src={imgProfile} alt="imgProfile" className="w-100" />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Form onSubmit={handleSubmit}>
              <Form.Control type="file" onChange={event => setImgProfile(event.target.files[0])} />
              {/* <Button variant="secondary" onClick={event => setImgProfile(URL.createObjectURL(event.target.files[0]))}>Use camera</Button> */}
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit">Upload</Button>
            </Form>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default ImageProfileModal;

/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={event => setImgProfile(URL.createObjectURL(event.target.files[0]))} />
      </Form.Group>
      <img src={imgProfile} alt="imgProfile" /> */
