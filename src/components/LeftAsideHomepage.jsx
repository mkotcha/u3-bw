import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const LeftAsideHomepage = () => {
  const personalProfile = useSelector(state => state.me);
  return (
    <>
      <div className="border-dark-subtle border rounded pb-2  mb-2 backgroundWhite mt-3">
        <div className="aside-profile-backgraund"></div>
        <div className="mb-2 text-center">
          <img
            src={personalProfile.image}
            alt="profile"
            className="rounded-circle mb-4"
            id="aside-profile-image"
            style={{ width: "80px" }}
          />
          <h4>Welcome, Flavio!</h4>
          <p>Add a photo</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between px-2">
          <div>
            <p className="mb-0">Connections</p>
            <p className="textGreyAside">Grow your network</p>
          </div>
          <i className="bi bi-pencil"></i>
        </div>
        <hr />
        <p className="textGreyAside px-2">Access exclusive tools & insights</p>
        <p className="mb-0 px-2">Try Premium for free</p>
        <hr />
        <div className="d-flex px-2">
          <i class="bi bi-bookmark-fill"></i>
          <p>My items</p>
        </div>
      </div>
      <div className="border-dark-subtle border rounded py-2 px-2 mb-2 backgroundWhite mt-3">
        <p>Groups</p>
        <div className="d-flex justify-content-between">
          <p>Events</p>
          <i class="bi bi-plus"></i>
        </div>
        <p>Followed Hashtags</p>
        <hr />
        <p className="text-center">Discover more</p>
      </div>
    </>
  );
};
export default LeftAsideHomepage;
