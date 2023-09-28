import { Col, Container, Row } from "react-bootstrap";
import HomePageMiddle from "./HomePageMiddle";
import HomePagePost from "./HomePagePost";
import AsideMainPage from "./AsideMainPage";
import RightAsideHompage from "./RightAsideHomePage";
import LeftAsideHomepage from "./LeftAsideHomepage";
import PostModal from "./PostModal";

const FrontPageSizing = () => {
  return (
    <>
      <PostModal />
      <Row className="justify-content-center">
        <Col lg={7}>
          <Row className="justify-content-center">
            <Col lg={3}>
              <LeftAsideHomepage />
            </Col>
            <Col xs={10} lg={6}>
              <HomePageMiddle />
              <Container>
                <hr />
              </Container>
              <HomePagePost />
            </Col>
            <Col lg={3}>
              <RightAsideHompage />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FrontPageSizing;
