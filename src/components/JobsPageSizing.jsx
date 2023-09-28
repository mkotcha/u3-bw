import { Col, Container, Row } from "react-bootstrap";
import Jobs from "./Jobs";


const JobsPageSizing = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={7}>
        <Row className="justify-content-center">
          <Col lg={3}>
            {/* <LeftAsideHomepage /> */}
          </Col>
          <Col xs={10} lg={6}>
            <Jobs />
          </Col>
          <Col lg={3}>
            {/* <RightAsideHompage /> */}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default JobsPageSizing;