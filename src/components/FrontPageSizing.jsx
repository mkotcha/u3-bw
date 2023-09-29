import { Col, Row } from "react-bootstrap";
import HomePageMiddle from "./HomePageMiddle";
import HomePagePost from "./HomePagePost";
import RightAsideHompage from "./RightAsideHomePage";
import LeftAsideHomepage from "./LeftAsideHomepage";
import PostModal from "./PostModal";

const FrontPageSizing = () => {
  return (
    <>
      <PostModal />
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} lg={10} xxl={8}>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} lg={3}>
              <LeftAsideHomepage />
            </Col>
            <Col xs={12} sm={10} lg={6}>
              <HomePageMiddle />
              <hr />
              <HomePagePost />
            </Col>
            <Col xs={12} sm={10} lg={3}>
              <RightAsideHompage />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FrontPageSizing;
