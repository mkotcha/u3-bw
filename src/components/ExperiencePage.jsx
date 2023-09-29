import { Col, Container, Row } from "react-bootstrap";
import AsideProfilePage from "./AsideProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { experiencesFetch, showExperienceModal } from "../redux/actions";
import { useEffect } from "react";
import SingleExperience from "./SingleExperience";
import ExperienceModal from "./ExperienceModal";
import { useNavigate, useParams } from "react-router";

const ExpeririencePage = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.me);
  const experiences = useSelector(state => state.experiences.content);
  const navigate = useNavigate();
  const params = useParams();

  const handleShow = () => {
    dispatch(showExperienceModal());
  };

  useEffect(() => {
    if (params.id) {
      dispatch(experiencesFetch(params.id));
    } else {
      if (me._id) {
        dispatch(experiencesFetch(me._id));
      }
    }
  }, [dispatch, me._id, params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExperienceModal />
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} lg={7}>
          <div className="p-4 bg-white my-4 rounded-3 border border-dark-subtle shadow-sm">
            <div className="d-flex  align-items-baseline mb-3">
              <div className="fs-2" onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left"></i>
              </div>
              <div className="ps-2 me-auto">
                <h3 className="fw-bold">Experience</h3>
              </div>
              {!params.id && (
                <div className="fs-2" onClick={handleShow}>
                  <i className="bi bi-plus-lg"></i>
                </div>
              )}
            </div>

            <div>
              {experiences &&
                experiences.map(experience => <SingleExperience key={experience._id} experience={experience} />)}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={10} lg={3}>
          <AsideProfilePage />
        </Col>
      </Row>
    </>
  );
};

export default ExpeririencePage;
