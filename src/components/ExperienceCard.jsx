import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { experiencesFetch, showExperienceModal } from "../redux/actions";
import ExperienceModal from "./ExperienceModal";
import { Link, useParams } from "react-router-dom";
import SingleExperience from "./SingleExperience";

function ExperienceCard() {
  const dispatch = useDispatch();
  const me = useSelector(state => state.me);
  const params = useParams();
  const experiences = useSelector(state => state.experiences.content);

  const handleShow = () => {
    dispatch(showExperienceModal());
  };

  useEffect(() => {
    if (params.id) {
      dispatch(experiencesFetch(params.id));
    } else if (me._id) dispatch(experiencesFetch(me._id));
  }, [dispatch, me._id, params.id]);

  return (
    <Card className="mt-3">
      <ExperienceModal />

      <Container className="m-2">
        <div className="d-flex align-items-center">
          <div className="me-auto">
            <div className="pt-3 fw-bold fs-4">Experience</div>
          </div>

          {!params.id && (
            <>
              <Link onClick={handleShow} className="text-reset">
                <i className="bi bi-plus-lg fs-4 me-4 text-tertiary"></i>
              </Link>
              <Link to="/experience" className="text-reset">
                <i className="bi bi-pencil fs-4 mx-2 text-secondary"></i>
              </Link>
            </>
          )}
        </div>
      </Container>
      <div className="mx-2 px-3 ">
        {experiences &&
          experiences.map(experience => <SingleExperience key={experience._id} experience={experience} />)}
      </div>
      <Card.Footer className="text-center">
        <Link to={params.id ? "/experience/" + params.id : "/experience"} className="text-reset text-decoration-none">
          <span className="text-tertia text-body-tertiary">
            Show all experiences<i className="bi bi-arrow-right-short"></i>
          </span>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default ExperienceCard;
