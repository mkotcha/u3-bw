import { Col, Row } from "react-bootstrap";
import Jobs from "./Jobs";
import RightAsideJobsPage from "./RightAsideJobsPage";
import LeftAsideJobsPage from "./LeftAsideJobsPage";

const JobsPageSizing = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={10} lg={3}>
        <LeftAsideJobsPage />
      </Col>
      <Col xs={12} sm={10} lg={6}>
        <Jobs />
      </Col>
      <Col xs={12} sm={10} lg={3}>
        <RightAsideJobsPage />
      </Col>
    </Row>
  );
};

export default JobsPageSizing;
