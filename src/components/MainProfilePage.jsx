import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { showProfileImageModal, showProfileModal } from "../redux/actions";
import ProfileModal from "./ProfileModal";
import { useEffect, useState } from "react";
import Test from "./Test";

const MainProfilePage = () => {
  const params = useParams();
  // let me = null;
  const personalProfile = useSelector(state => state.me);
  const selectedProfile = useSelector(state => state.selectedProfile);

  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(showProfileModal());
  };

  const handleShowImage = () => {
    if (!params.id) dispatch(showProfileImageModal());
  };

  useEffect(() => {
    if (params.id) {
      setProfile(selectedProfile);
    } else {
      setProfile(personalProfile);
    }
  }, [params.id, personalProfile, selectedProfile, setProfile]);

  return (
    <>
      <ProfileModal />
      <Test />
      {profile && (
        <div className="border border-secondary-subtle rounded shadow-sm bg-white mt-4">
          <div className="bg-warning border rounded rounded-bottom-0 profile-background"></div>
          <div className="px-4">
            <div className="d-flex w-100">
              <div className="me-auto" role={!params.id ? "button" : ""}>
                <img
                  id="profile-page-picture"
                  src={profile.image}
                  alt="linkedin-profile"
                  className="rounded-circle"
                  style={{ height: "150px", width: "150px" }}
                  onClick={handleShowImage}
                />
              </div>
              <div className="mt-auto">
                {!params.id && (
                  <div className="fs-4" role="button" onClick={handleShow}>
                    <i className="bi bi-pencil"></i>
                  </div>
                )}
              </div>
            </div>

            {/* profile name and details */}
          </div>
          <Container>
            <div className="ms-2 mt-3">
              <div>
                <h3>
                  {profile.name} {profile.surname}
                </h3>
              </div>
              <div>
                <p>{profile.bio}</p>
              </div>
              <div className="d-flex">
                <span>{profile.area}</span>

                <span className="ms-3">
                  <Link>{profile.email}</Link>
                </span>
              </div>
              <div className="my-3">
                <Button className="primary rounded-pill px-3 fw-semibold border-2">I am...</Button>
                <Button className="bg-transparent text-primary mx-2 rounded-pill px-3 fw-semibold border-2">
                  Add profile section
                </Button>
                <Button className="text-secondary bg-transparent border-secondary rounded-pill px-3 fw-semibold border-2">
                  more
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
export default MainProfilePage;
