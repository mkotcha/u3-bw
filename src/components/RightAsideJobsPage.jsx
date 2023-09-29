import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const RightAsideJobsPage = () => {
  return (
    <>
      <div className="border-dark-subtle border rounded py-2  mb-2 backgroundWhite mt-3">
        <h6 className="mb-0 ps-2">Job seeker guidance</h6>
        <p className="fs-7 ps-2">Recommended based on your activity</p>
        <div className="d-flex py-2 bg-white-grey">
          <p className="ps-1">I want to improve my resume</p>
          <img
            src="https://www.linkedin.com/dms/prv/image/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQL3WQi9YbkmogAAAYrbMHHbdxK89xn9Krzg3dY9g5a4uMWSMSZ5RUBblJc&e=1695980899&v=beta&t=KJKgadY4_HrpxYw9Z4ZCd-Cmd67rU3iyjScCa8Kq3uA"
            alt=""
            className="pe-1"
          />
        </div>
        <p className="fs-7 ps-2">
          Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to
          help you land your next opportunity.
        </p>
        <div className="d-flex">
          <Link to="/" className="ps-2">
            Show more
          </Link>
          <i className="bi bi-arrow-right"></i>
        </div>
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
    </>
  );
};

export default RightAsideJobsPage;
