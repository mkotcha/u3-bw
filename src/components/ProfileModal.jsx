import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfileModal = () => {
  const me = useSelector(state => state.me);

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <small className="text-secondary">* Indicates required</small>
          </p>
          <Form id="personal-form">
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" placeholder={me.name} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control type="text" placeholder={me.surname} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>email*</Form.Label>
              <Form.Control type="email" placeholder={me.email} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Bio*</Form.Label>
              <Form.Control type="textarea" placeholder={me.bio} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Title*</Form.Label>
              <Form.Control type="text" placeholder={me.title} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Area*</Form.Label>
              <Form.Control type="text" placeholder={me.area} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Image url</Form.Label>
              <Form.Control type="text" placeholder={me.area} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button type="submit" form="personal-form" variant="primary">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ProfileModal;
