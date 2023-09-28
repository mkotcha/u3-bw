import { useDispatch } from "react-redux";
import { setExperienceModalId, showExperienceModal } from "../redux/actions";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const SingleExperience = ({ experience }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const handleMod = () => {
    dispatch(setExperienceModalId(experience._id));
    dispatch(showExperienceModal());
  };

  useEffect(() => {
    setStartDate(new Date(experience.startDate));
    if (experience.endDate) setEndDate(new Date(experience.endDate));
  }, [experience.startDate]);

  return (
    <>
      <div className="d-flex mb-3">
        <div className="d-flex me-auto">
          <div className="w-25">
            <img src={experience?.image ? experience?.image : "/assets/img/company.png"} alt="" className="w-75" />
          </div>

          <div>
            <span className="fw-bold fs-6">{experience.role}</span>
            <div className="fs-6">{experience.company}</div>
            {startDate && (
              <small className="fw-light">
                {monthNames[startDate.getMonth()]} {" - "}
                {startDate.getFullYear()}
              </small>
            )}
            {endDate && (
              <small className="fw-light">
                {" to "}
                {monthNames[endDate.getMonth()]} {" - "}
                {endDate.getFullYear()}
              </small>
            )}
            <div className="fs-6">{experience.description}</div>
            <div className="fs-6">
              <small className="fw-light">{experience.area}</small>
            </div>
          </div>
        </div>
        {location.pathname === "/experience" && (
          <div onClick={handleMod}>
            <i className="bi bi-pencil fs-5"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleExperience;
