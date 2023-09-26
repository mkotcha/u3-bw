import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { experiencesFetch, showExperienceModal } from "../redux/actions";
import ExperienceModal from "./ExperienceModal";
import { Link } from "react-router-dom";

function ExperienceCard() {
  const dispatch = useDispatch();
  const me = useSelector(state => state.me);
  const experiences = useSelector(state => state.experiences.content);

  const handleShow = () => {
    dispatch(showExperienceModal());
  };

  useEffect(() => {
    dispatch(experiencesFetch(me._id));
  }, [dispatch, me._id]);

  return (
    <Card className="mt-3">
      <ExperienceModal />
      <Card.Header>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col sm={3}>
              <Card.Title className="pt-3">Experience</Card.Title>
            </Col>

            <Col sm={2}>
              <Card.Link onClick={handleShow}>
                <i className="bi bi-plus fs-4"></i>
              </Card.Link>
              <Link to="/experience">
                <i className="bi bi-pencil fs-4 mx-2"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </Card.Header>

      {experiences &&
        experiences.map(experience => (
          <Card.Body key={experience._id}>
            <Card.Title>{experience.role}</Card.Title>
            <Card.Subtitle>{experience.company}</Card.Subtitle>
            <Card.Text>{experience.startDate}</Card.Text>
            <Card.Text>{experience.area}</Card.Text>
            <Card.Text>{experience.description}</Card.Text>
          </Card.Body>
        ))}

      <Card.Footer className="text-center">
        <Card.Link href="#">
          Show all experiences<i className="bi bi-arrow-right-short"></i>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default ExperienceCard;
