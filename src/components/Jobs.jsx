import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { searchForJobs } from "../redux/actions";

const Jobs = () => {
  const [arrayJobs, setArrayJobs] = useState([]);
  const [arrayJobsSearchTitle, setArrayJobsSearchTitle] = useState([]);

  const searchJobFilter = useSelector(state => state.jobSearch.search);

  const [changeJob, setChangeJob] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchForJobs(changeJob));
  };

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

  useEffect(() => {
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

    if (searchJobFilter.length >= 3) {
      fetchJobsTitle();
    }
  }, [searchJobFilter]);

  return (
    <div className="rounded border border-secondary-subtle bg-white mt-3">
      <div className="p-3">
        <div className="d-lg-none mb-4 mt-1">
          <Form onSubmit={handleSubmit} id="searchForm">
            <Form.Label>Search a job</Form.Label>
            <div className="d-flex align-items-center gap-3">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
                onChange={e => setChangeJob(e.target.value)}
              />
              <Button type="submit" variant="outline-primary">
                Search
              </Button>
            </div>
          </Form>
        </div>
        {searchJobFilter.length >= 1 ? <h2>Jobs result :</h2> : <h2>Jobs</h2>}
      </div>
      {searchJobFilter.length >= 1
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
