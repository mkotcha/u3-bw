import { Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNewFriend, removeAFriend } from "../redux/actions";

const RightAsideHompage = () => {
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
      <div className="border-dark-subtle border rounded py-2 px-2 mb-2 backgroundWhite mt-3">
        <h6 className="mb-2">Add to your feed</h6>
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
                      variant="light">
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
      <div>
        <div className="border-dark-subtle border rounded mb-2">
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="see who's hiring"
            className="w-100"
          />
        </div>
        <Container className="text-center">
          <div className="d-flex">
            <Col className="fontSizeFooterHompage">About</Col>
            <Col className="fontSizeFooterHompage">Accessibility</Col>
            <Col className="fontSizeFooterHompage">Help Center</Col>
          </div>
          <div className="d-flex">
            <Col className="fontSizeFooterHompage">Privacy & Terms </Col>
            <Col className="fontSizeFooterHompage">Ad Choices</Col>
          </div>
          <div className="d-flex">
            <Col className="fontSizeFooterHompage">Advertising</Col>
            <Col className="fontSizeFooterHompage">Business Services</Col>
          </div>
          <div className="d-flex mb-1">
            <Col className="fontSizeFooterHompage">Get the LinkedIn app</Col>
            <Col className="fontSizeFooterHompage">More</Col>
          </div>
          <h6 className="fontSizeFooterHompage">LinkedIn Corporation © 2023</h6>
        </Container>
      </div>
    </>
  );
};

export default RightAsideHompage;
