import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import LanguageDropdown from "./LanguageDropdown";

const FooTer = () => {
  return (
    <Row className="w-100 mt-5" id="Footer">
      <Col xs={4} sm={2}>
        <div className="d-flex flex-column justify-content-around">
          <p>About</p>
          <p>Community Guidelines</p>
          <p>Privacy & Terms</p>
          <p>Sales Solutions</p>
          <p>Safety Center</p>
        </div>
      </Col>
      <Col xs={4} sm={2}>
        <div className="d-flex flex-column justify-content-around">
          <p>Accessibility</p>
          <p>Careers</p>
          <p>Ad Choices</p>
          <p>Mobile</p>
        </div>
      </Col>
      <Col xs={4} sm={2}>
        <div className="d-flex flex-column justify-content-around">
          <p>Talent Solutions</p>
          <p>Marketing Solutions</p>
          <p>Advertising</p>
          <p>Small Business</p>
        </div>
      </Col>
      <Col xs={12} sm={2}>
        <div className="d-flex flex-column justify-content-around">
          <div className="d-flex">
            <i className="bi bi-question-circle-fill"></i>
            <div>
              <h6 className="mb-0">Questions?</h6>
              <p>Visit our Help Center.</p>
            </div>
          </div>
          <div className="d-flex">
            <i className="bi bi-gear-fill"></i>
            <div>
              <h6 className="mb-0">Manage your account and privacy</h6>
              <p>Go to your Settings.</p>
            </div>
          </div>
          <div className="d-flex">
            <i className="bi bi-shield-shaded"></i>
            <div>
              <h6 className="mb-0">Recommendation transparency</h6>
              <p>Learn more about Recommended Content.</p>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={4}>
        <div className="d-flex flex-column">
          <p className="mb-0">Select language</p>
          <LanguageDropdown />
        </div>
      </Col>
    </Row>
  );
};
export default FooTer;
