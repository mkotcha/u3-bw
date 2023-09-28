import { Col, Row } from "react-bootstrap";
import Jobs from "./Jobs";
import RightAsideJobsPage from "./RightAsideJobsPage";
import LeftAsideJobsPage from "./LeftAsideJobsPage";

const JobsPageSizing = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={7}>
        <Row className="justify-content-center">
          <Col lg={3}>
            <LeftAsideJobsPage />
          </Col>
          <Col xs={10} lg={6}>
            <Jobs />
          </Col>
          <Col lg={3}>
            <RightAsideJobsPage />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default JobsPageSizing;
