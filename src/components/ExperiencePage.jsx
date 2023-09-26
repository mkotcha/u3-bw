import { Col, Container, Row } from "react-bootstrap";
import AsideProfilePage from "./AsideProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { experiencesFetch, showExperienceModal } from "../redux/actions";
import { useEffect } from "react";
import SingleExperience from "./SingleExperience";
import ExperienceModal from "./ExperienceModal";
import { useNavigate } from "react-router";

const ExpeririencePage = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.me);
  const experiences = useSelector(state => state.experiences.content);
  const navigate = useNavigate();
  const handleShow = () => {
    dispatch(showExperienceModal());
  };

  useEffect(() => {
    dispatch(experiencesFetch(me._id));
  }, [dispatch, me._id]);

  return (
    <>
      <Container>
        <ExperienceModal />
        <Row className="justify-content-center">
          <Col xs={8} lg={7}>
            <Container className="bg-light my-4 rounded-3 border border-dark-subtle shadow-sm">
              <div className="d-flex  align-items-baseline">
                <div className="fs-2" onClick={() => navigate(-1)}>
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="ps-2 me-auto">
                  <h3 className="fw-bold">Experience</h3>
                </div>
                <div className="fs-2" onClick={handleShow}>
                  <i className="bi bi-plus-lg"></i>
                </div>
              </div>

              <div>
                {experiences &&
                  experiences.map(experience => <SingleExperience key={experience._id} experience={experience} />)}
              </div>
            </Container>
          </Col>
          <Col xs={4} lg={3}>
            <AsideProfilePage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExpeririencePage;
