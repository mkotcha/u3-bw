import { Col, Container, Row } from "react-bootstrap";
import AsideProfilePage from "./AsideProfilePage";

const ExpeririencePage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={8} lg={7}>
            <p>ciao</p>
          </Col>
          <Col xs={4} lg={3}>
            <AsideProfilePage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExpeririencePage;
