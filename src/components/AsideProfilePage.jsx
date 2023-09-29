import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNewFriend, removeAFriend } from "../redux/actions";

const AsideProfilePage = () => {
  let profiles = useSelector(state => state.profiles.profiles);
  let friendList = useSelector(state => state.addFriend.friendsList);
  const dispatch = useDispatch();

  const handleClick = id => {
    if (friendList.includes(id)) {
      dispatch(removeAFriend(id));
    } else {
      dispatch(addNewFriend(id));
    }
  };
  return (
    <>
      <div className="border-dark-subtle border rounded py-2 px-2 mb-2 backgroundWhite mt-4">
        <div className="d-flex justify-content-between mb-2">
          <h5>Profile language</h5>
          <i className="bi bi-pencil"></i>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant="success" className="rounded-pill bottoniLingueAside">
            Italiano
          </Button>
          <Button variant="light" className="rounded-pill bottoniLingueAside">
            English
          </Button>
        </div>
        <Container>
          <hr />
        </Container>
        <div className="d-flex justify-content-between mb-2">
          <h5 className="d-inline">Public profile & URL</h5>
          <i className="bi bi-pencil"></i>
        </div>
        <p className="textGreyAside">www.linkedin.com/in/flavio-de-angelis-4b50b3293</p>
      </div>
      <div className="border-dark-subtle border rounded mb-2">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="see who's hiring"
          className="w-100"
        />
      </div>
      <div className="border-dark-subtle border rounded py-2 px-2 mb-2 backgroundWhite">
        <h6 className="mb-0">People you may know</h6>
        <p className="textGreyAside">From your school</p>
        {profiles
          ? profiles.slice(0, 3).map(profile => {
              return (
                <div key={profile._id} className="border-bottom  py-2">
                  <div className="d-flex">
                    <img src={profile.image} alt="" className="otherProfiles rounded-circle align-self-start me-2" />
                    <div>
                      <Link to={"/profilepage/" + profile._id} className="otherProfilesUsernameAside">
                        <h6 className="m-0 ">{profile.username}</h6>
                      </Link>
                      <p>{profile.title}</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Button
                      onClick={() => handleClick(profile._id)}
                      className="rounded-pill border border-black text-center mx-auto"
                      variant="light"
                    >
                      {friendList.includes(profile._id) ? (
                        <>
                          <i className="bi bi-person-dash-fill me-1"></i>
                          Remove
                        </>
                      ) : (
                        <>
                          <i className="bi bi-person-plus-fill me-1"></i>
                          Connect
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              );
            })
          : ""}
        <Button variant="light" className="text-center pt-2 textGreyAside w-100">
          Show All
        </Button>
      </div>
      <div className="border-dark-subtle border rounded py-2 px-2 mb-2 backgroundWhite">
        <div className="d-flex">
          <img
            src="data:image/png;base64,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"
            alt="linkedin logo"
            className="linkedinLogoAside me-3 align-self-start
            "
          />
          <p className="align-self-start">LEARNING</p>
        </div>
        <p>Add new skills with these courses, free for 24 hours</p>
        <div className="d-flex border-bottom pb-2">
          <img
            src="https://media.licdn.com/dms/image/C560DAQE_1UWtPeV57w/learning-public-crop_60_100/0/1665506470259?e=1696244400&v=beta&t=HJkmXcqBuVUwWrhhXgIjloviWWgXKTxuWu2JekxEbSw"
            alt="menagment"
            className="me-2"
          />
          <p>Project Management Foundations</p>
        </div>
        <div className="d-flex border-bottom pb-2 mt-2">
          <img
            src="https://media.licdn.com/dms/image/C4D0DAQGqC3vTABOpmQ/learning-public-crop_60_100/0/1678734020079?e=1696244400&v=beta&t=fEUqBwbOxqaJatcNYet1fGaCHDK2m2H02HBOYbvjDHM"
            alt="menagment"
            className="me-2"
          />
          <p>Introduction to Artificial Intelligence</p>
        </div>
        <div className="d-flex border-bottom pb-2 mt-2">
          <img
            src="https://media.licdn.com/dms/image/C4E0DAQHOl-2agpS1Gg/learning-public-crop_60_100/0/1605821728995?e=1696244400&v=beta&t=kfyPa_tGrHmRkjMuznZ0K1gfjVBg_e3tAT0N_DYNe4w"
            alt="menagment"
            className="me-2"
          />
          <p>Speaking Confidently and Effectively</p>
        </div>
        <Button variant="light" className="text-center pt-2 textGreyAside w-100">
          See my recommendations
        </Button>
      </div>
      <div className="border-dark-subtle border rounded mb-2">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="see who's hiring"
          className="w-100"
        />
      </div>
    </>
  );
};
export default AsideProfilePage;
