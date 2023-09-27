import { useDispatch } from "react-redux";
import { setPersonalExperienceId, showExperienceModal } from "../redux/actions";

const SingleExperience = ({ experience }) => {
  const dispatch = useDispatch();
  const handleMod = () => {
    dispatch(setPersonalExperienceId(experience._id));
    dispatch(showExperienceModal());
  };

  return (
    <>
      <div className="d-flex">
        <div className="me-auto">
          <p>{experience.company}</p>
        </div>
        <div onClick={handleMod}>
          <i className="bi bi-pencil"></i>
        </div>
      </div>
    </>
  );
};

export default SingleExperience;
