import { Col, Container, Row } from "react-bootstrap";
import AsideProfilePage from "./AsideProfilePage";
import MainProfilePage from "./MainProfilePage";

const ProfilePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={7}>
            <MainProfilePage />
          </Col>
          <Col xs={3}>
            <AsideProfilePage />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
