import { Col, Container, Row } from "react-bootstrap";
import Jobs from "./Jobs";

const JobsPageSizing = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={10} lg={3}>
        {/* <LeftAsideHomepage /> */}
      </Col>
      <Col xs={12} sm={10} lg={6}>
        <Jobs />
      </Col>
      <Col xs={12} sm={10} lg={3}>
        {/* <RightAsideHompage /> */}
      </Col>
    </Row>
  );
};

export default JobsPageSizing;
