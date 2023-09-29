import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [arrayJobs, setArrayJobs] = useState([]);
  const [arrayJobsSearchTitle, setArrayJobsSearchTitle] = useState([]);

  const searchJobFilter = useSelector(state => state.jobSearch.search);

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

  const fetchJobsTitle = async () => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + searchJobFilter);

      if (response.ok) {
        let fetchedJobsTitle = await response.json();
        // console.log(fetchedJobs);
        setArrayJobsSearchTitle(fetchedJobsTitle.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (searchJobFilter.length >= 3) {
      fetchJobsTitle();
      console.log(searchJobFilter);
      console.log(arrayJobsSearchTitle);
    }
  }, [searchJobFilter]);

  return (
    <div className="rounded border border-secondary-subtle bg-white mt-3">
      <div className="p-3">{searchJobFilter.length >= 3 ? <h2>Serched Jobs</h2> : <h2>Jobs</h2>}</div>
      {searchJobFilter.length >= 3
        ? arrayJobsSearchTitle.slice(0, 20).map(job => (
            <div className="p-3" key={job._id}>
              <Row>
                <Col sm={2}>
                  <Card.Img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80"
                    className="rounded"
                  />
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
            </div>
          ))
        : arrayJobs.slice(0, 20).map(job => (
            <div className="p-3" key={job._id}>
              <Row>
                <Col sm={2}>
                  <Card.Img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80"
                    className="rounded"
                  />
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
            </div>
          ))}
    </div>
  );
};

export default Jobs;
