import { Col, Container, Row } from 'react-bootstrap';
import HomePageMiddle from './HomePageMiddle';
import HomePagePost from './HomePagePost';

const FrontPageSizing = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <></>
        </Col>
        <Col xs={10} lg={6}>
          <HomePageMiddle />
          <HomePagePost />
        </Col>
      </Row>
    </Container>
  );
};

export default FrontPageSizing;
