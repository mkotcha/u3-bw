import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideProfileModal, putPersonalFetch, showProfileModal } from "../redux/actions";

const ProfileModal = () => {
  const me = useSelector(state => state.me);
  const show = useSelector(state => state.profileModal.show);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const profile = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      email: event.target.email.value,
      bio: event.target.bio.value,
      title: event.target.title.value,
      area: event.target.area.value,
      image: event.target.image.value,
    };

    dispatch(putPersonalFetch(profile));

    handleClose();
  };

  const handleClose = () => {
    console.log("close");
    dispatch(hideProfileModal());
  };

  return (
    <Modal show={show} size="lg">
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Edit intro</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          <small className="text-secondary">* Indicates required</small>
        </p>
        <Form id="personal-form" onSubmit={event => handleSubmit(event)}>
          <Form.Group className="mb-3 text-secondary">
            <Form.Label>First Name*</Form.Label>
            <Form.Control id="name" type="text" defaultValue={me.name} required />
          </Form.Group>
          <Form.Group className="mb-3 text-secondary">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control id="surname" type="text" defaultValue={me.surname} required />
          </Form.Group>
          <Form.Group className="mb-3 text-secondary">
            <Form.Label>email*</Form.Label>
            <Form.Control id="email" type="email" defaultValue={me.email} required />
          </Form.Group>
          <Form.Group className="mb-3 text-secondary">
            <Form.Label>Bio*</Form.Label>
            <Form.Control id="bio" type="textarea" defaultValue={me.bio} required />
          </Form.Group>
          <Form.Group className="mb-3 text-secondary">
            <Form.Label>Title*</Form.Label>
            <Form.Control id="title" type="text" defaultValue={me.title} required />
          </Form.Group>
          <Form.Group className="mb-3 text-secondary">
            <Form.Label>Area*</Form.Label>
            <Form.Control id="area" type="text" defaultValue={me.area} required />
          </Form.Group>
          <Form.Group className="mb-3 text-secondary">
            <Form.Label>Image url</Form.Label>
            <Form.Control id="image" type="text" defaultValue={me.image} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
        <Button type="submit" form="personal-form" variant="primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
