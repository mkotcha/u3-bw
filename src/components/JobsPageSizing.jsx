import { Col, Row } from "react-bootstrap";
import Jobs from "./Jobs";
import RightAsideJobsPage from "./RightAsideJobsPage";
import LeftAsideJobsPage from "./LeftAsideJobsPage";

const JobsPageSizing = () => {
  return (
    <Row className="justify-content-center w-100">
      <Col xs={12} sm={10} lg={10} xxl={8}>
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
      </Col>
    </Row>
  );
};

export default JobsPageSizing;
