import { Col, Container, Row } from "react-bootstrap";
import HomePageMiddle from "./HomePageMiddle";
import HomePagePost from "./HomePagePost";
import AsideMainPage from "./AsideMainPage";

const FrontPageSizing = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <AsideMainPage />
        </Col>
        <Col xs={10} lg={6}>
          <HomePageMiddle />
          <HomePagePost />
        </Col>
        <Col lg={3}>
          <AsideMainPage />
        </Col>
      </Row>
    </Container>
  );
};

export default FrontPageSizing;
