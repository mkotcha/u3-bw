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
    console.log("click");
    dispatch(showProfileImageModal());
  };

  useEffect(() => {
    console.log();
    if (params.id) {
      setProfile(selectedProfile);
    } else {
      setProfile(personalProfile);
    }
  }, [params.id, personalProfile, selectedProfile, setProfile]);

  return (
    <>
      {profile && (
        <Container className="border rounded bg-white mt-4">
          <ProfileModal />
          <Test />
          <Container className="d-flex mt-2">
            <div
              className="fluid  justify-content-center p-0"
              style={{
                height: "235px",
                width: "100%",
                position: "relative",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundImage:
                  "URL(https://media.licdn.com/dms/image/C4D16AQH-cFycCHgyyw/profile-displaybackgroundimage-shrink_350_1400/0/1623871492315?e=1701302400&v=beta&t=4SONOo_KOAgC36nEQ3ZuzifeRhaPpzs0iiFUHiQyUHE)",
              }}>
              <div className="d-flex justify-content-end me-5 fs-5">
                <button className="bg-transparent border-0">
                  <i className="bi bi-pencil"></i>
                </button>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <button className="bg-transparent border-0">
                  <img
                    src={personalProfile.image}
                    alt="linkedin-profile"
                    className="rounded-circle ms-1 "
                    style={{ maxHeight: "150px", width: "150px" }}
                    onClick={handleShowImage}
                  />
                </button>
                <div className="d-flex ">
                  {!params.id && (
                    <button className="bg-transparent border-0 align-self-end me-5 fs-3" onClick={handleShow}>
                      <i className="bi bi-pencil"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* profile name and details */}
          </Container>
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
        </Container>
      )}
    </>
  );
};
export default MainProfilePage;
