import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  experiencesFetch,
  hideExperienceModal,
  postExperienceFetch,
  postExperienceImage,
  putExperienceFetch,
  unsetPersonalExperienceId,
} from "../redux/actions";
import { useEffect, useState } from "react";

const ExperienceModal = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const options = {
    headers: { Authorization: "Bearer " + process.env.REACT_APP_BEARER },
  };

  const show = useSelector(state => state.experienceModal.show);
  const id = useSelector(state => state.experienceModal.id);
  const personal = useSelector(state => state.me);
  const [picture, setPicture] = useState("");

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  const [jobDate, setJobDate] = useState({
    startMonth: "Month",
    startYear: "Year",
    endMonth: "Month",
    endYear: "Year",
  });

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideExperienceModal());
    dispatch(unsetPersonalExperienceId());
    setExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
    setPicture("");
  };

  const handleChange = event => {
    switch (event.target.id) {
      case "startMonth":
        setJobDate({ ...jobDate, startMonth: event.target.value });
        break;
      case "startYear":
        setJobDate({ ...jobDate, startYear: event.target.value });
        break;
      case "endMonth":
        setJobDate({ ...jobDate, endMonth: event.target.value });
        break;
      case "endYear":
        setJobDate({ ...jobDate, endYear: event.target.value });
        break;
      default:
        setExperience({ ...experience, [event.target.id]: event.target.value });
        break;
    }
  };

  const handleImageChange = event => {
    const url = URL.createObjectURL(event.target.files[0]);
    setPicture(url);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("experience", event.target.formFile.files[0]);
    if (id) {
      if (formData.get("experience") !== "undefined") {
        postExperienceImage(personal._id, id, formData);
      }
      dispatch(putExperienceFetch(experience, personal._id, id));
    } else {
      dispatch(postExperienceFetch(experience, personal._id, formData));
    }
  };

  const handleDelete = async () => {
    const deleteOptions = {
      ...options,
      method: "DELETE",
    };
    try {
      const response = await fetch(url + personal.id + "/experiences/" + id, deleteOptions);
      if (response.ok) {
        dispatch(experiencesFetch(personal._id));
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (parseInt(jobDate.startMonth) && parseInt(jobDate.startYear)) {
      setExperience(e => ({
        ...e,
        startDate: jobDate.startYear + "-" + jobDate.startMonth,
      }));
    }
    if (parseInt(jobDate.endMonth) && parseInt(jobDate.endYear)) {
      setExperience(e => ({
        ...e,
        endDate: jobDate.endYear + "-" + jobDate.endMonth,
      }));
    }
  }, [jobDate]);

  useEffect(() => {
    const experienceFetch = async () => {
      try {
        const response = await fetch(url + personal.id + "/experiences/" + id, options);
        if (response.ok) {
          const result = await response.json();
          setExperience(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id.length > 0) {
      experienceFetch();
    }

    if (experience.image) {
      setPicture(experience.image);
    }
  }, [id, experience._id]);

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

              <div>
                <img src={picture} alt="" className=" w-50" />
              </div>
              <Form.Group controlId="formFile" className="mb-3" onChange={handleImageChange}>
                <Form.Label>Company image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group className="mb-3 text-secondary">
                <Form.Label>Location</Form.Label>
                <Form.Control id="area" type="text" value={experience.area} required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3 text-secondary me-3" required>
                <Form.Label>Start date</Form.Label>
                <div className="d-flex">
                  <Form.Select className="me-1" aria-label="start month" id="startMonth" onChange={handleChange}>
                    <option>Month</option>
                    {[...Array(12).keys()].map(elm => (
                      <option key={elm} value={elm + 1}>
                        {elm + 1}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Select
                    className="ms-1"
                    aria-label="Default select example"
                    id="startYear"
                    onChange={handleChange}
                  >
                    <option>Year</option>

                    {new Array(43).fill("a").map((elm, i) => (
                      <option key={i} value={i + 1980}>
                        {i + 1980}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 text-secondary me-3" required>
                <Form.Label>End date</Form.Label>
                <div className="d-flex">
                  <Form.Select className="me-1" aria-label="end month" id="endMonth" onChange={handleChange}>
                    <option>Month</option>
                    {[...Array(12).keys()].map(elm => (
                      <option key={elm} value={elm + 1}>
                        {elm + 1}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Select
                    className="ms-1"
                    aria-label="Default select example"
                    id="endYear"
                    onChange={handleChange}
                  >
                    <option>Year</option>

                    {new Array(43).fill("a").map((elm, i) => (
                      <option key={i} value={i + 1980}>
                        {i + 1980}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 text-secondary">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  as="textarea"
                  value={experience.description}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {id && (
              <div className="me-auto" onClick={handleDelete}>
                Delete experience
              </div>
            )}
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
