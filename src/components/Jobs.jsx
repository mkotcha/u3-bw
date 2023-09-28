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
    {arrayJobs.slice(0,20).map(job => (
      <Container>
        <Row>
          <Col sm={2}>
            <Card.Img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80" rounded />
          </Col>
          <Col sm={8}>
            <Card.Link> {job.title}</Card.Link>
            <Card.Title>{job.company_name}</Card.Title>
            <Card.Subtitle>{job.job_type}</Card.Subtitle>
          </Col>
          <Col sm={1}>
            <i className="bi bi-eye-slash-fill"></i>
          </Col>
          <Col sm={1}>
            <i className="bi bi-bookmark"></i>
          </Col>
        </Row>
      </Container>
    
    ))}
    </Card>
  );
};

export default Jobs;
