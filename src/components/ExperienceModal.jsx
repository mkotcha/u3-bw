import { Button, Dropdown, DropdownButton, Form, InputGroup, Modal, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { experienceFetch, getPersonalExperience, hideExperienceModal } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ExperienceModal = () => {
  const show = useSelector(state => state.experienceModal.show);
  const personal = useSelector(state => state.me);
  const experience = useSelector(state => state.experience);
  const dispatch = useDispatch();
  const params = useParams();
  const [language, setLanguage] = useState("");
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleClose = () => {
    dispatch(hideExperienceModal());
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    if (params.id) {
      console.log("id ", params.id);
      dispatch(experienceFetch(params.id));
    } else {
      dispatch(experienceFetch(personal._id));
    }
  }, []);

  return (
    <>
      <Modal show={show} size="lg">
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Edit experience</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <small className="text-secondary">* Indicates required</small>
          </p>
          <Form id="personal-form" onSubmit={event => handleSubmit(event)}>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Title </Form.Label>
              <Form.Control id="title" type="text" defaultValue={experience.title} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Company name</Form.Label>
              <Form.Control id="company" type="text" defaultValue={experience.company} required />
            </Form.Group>
            <Form.Group className="mb-3 text-secondary">
              <Form.Label>Location</Form.Label>
              <Form.Control id="area" type="text" defaultValue={experience.area} required />
            </Form.Group>
            <div className="d-flex">
              <Form.Group className="mb-3 text-secondary me-3">
                <Form.Label>Start date</Form.Label>
                <DropdownButton variant="outline-secondary" title="Month" id="start-date">
                  {month.map(elm => (
                    <Dropdown.Item value={elm}>{elm}</Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form.Group>
              <Form.Group className="mb-3 text-secondary">
                <Form.Label>End date</Form.Label>
                <DropdownButton variant="outline-secondary" title="year" id="end-date">
                  {new Array(43).fill("a").map((elm, i) => (
                    <Dropdown.Item value={i + 1980}>{i + 1980}</Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form.Group>
              <Form.Group className="mb-3 text-secondary">
                <Form.Label>Description</Form.Label>
                <Form.Control id="description" type="text" defaultValue={experience.description} required />
              </Form.Group>
            </div>
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
    </>
  );
};

export default ExperienceModal;
