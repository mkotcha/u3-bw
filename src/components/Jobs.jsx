import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [arrayJobs, setArrayJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs");

      if (response.ok) {
        let fetchedJobs = await response.json();
        // console.log(fetchedJobs);
        setArrayJobs(fetchedJobs.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <Card>
      <Container>
        <Row>
          <Col sm={2}>
            <Card.Img src="" rounded />
          </Col>
          <Col sm={8}>
            <Card.Link> {arrayJobs.title}</Card.Link>
            <Card.Title>azenda</Card.Title>
            <Card.Subtitle>jdbviub</Card.Subtitle>
          </Col>
          <Col sm={1}>
            <i className="bi bi-eye-slash-fill"></i>
          </Col>
          <Col sm={1}>
            <i className="bi bi-bookmark"></i>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Jobs;
