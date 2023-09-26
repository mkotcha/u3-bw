import { Button, Dropdown, DropdownButton, Form, InputGroup, Modal, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideExperienceModal, postExperienceFetch } from "../redux/actions";
import { useState } from "react";

const ExperienceModal = () => {
  const show = useSelector(state => state.experienceModal.show);
  const personal = useSelector(state => state.me);

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideExperienceModal());
  };

  const handleChange = event => {
    setExperience({ ...experience, [event.target.id]: event.target.value });
  };

  const handleSelect = event => {
    console.log(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(postExperienceFetch(experience, personal._id));
  };

  return (
    <>
      {experience && (
        <Modal show={show} size="lg">
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Add experience</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <small className="text-secondary">* Indicates required</small>
            </p>
            <Form id="personal-form" onSubmit={event => handleSubmit(event)}>
              <Form.Group className="mb-3 text-secondary">
                <Form.Label>Role</Form.Label>
                <Form.Control id="role" type="text" value={experience.role} required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary">
                <Form.Label>Company name</Form.Label>
                <Form.Control id="company" type="text" value={experience.company} required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary">
                <Form.Label>Location</Form.Label>
                <Form.Control id="area" type="text" value={experience.area} required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary me-3">
                <Form.Label>Start date</Form.Label>

                <div className="d-flex">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Month"
                    id="start-date-month"
                    onSelect={event => handleSelect(event)}
                    className="me-3">
                    {[...Array(12).keys()].map(elm => (
                      <Dropdown.Item eventKey={elm + 1} key={elm} value={elm + 1}>
                        {elm + 1}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>

                  <DropdownButton variant="outline-secondary" title="year" id="start-date-year">
                    {new Array(43).fill("a").map((elm, i) => (
                      <Dropdown.Item key={i} value={i + 1980}>
                        {i + 1980}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 text-secondary">
                <Form.Label>Description</Form.Label>
                <Form.Control id="description" type="textarea" defaultValue={experience.description} required />
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
      )}
    </>
  );
};

export default ExperienceModal;
