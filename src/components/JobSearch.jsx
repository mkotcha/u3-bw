import { Form, Button, FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobSearch = () => {
  const [arrayJobsSearchTitle, setArrayJobsSearchTitle] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const searchJobFilter = useSelector(state => state.jobSearch.search);

  const handleChange = event => {
    setSearchTitle(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
    fetchJobsTitle();
    console.log(searchJobFilter);
  }, [searchJobFilter]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <i className="bi bi-search d-lg-none fontSizeIconTopBar"></i>
        <Form.Control
          type="text"
          placeholder="Search by title or company"
          className="mr-sm-2 d-none d-lg-inline"
          value={searchTitle}
          onChange={handleChange}
        ></Form.Control>
        <Button>
          <i className="bi bi-arrow-right-short text-primary"></i>
        </Button>
      </Form>
    </>
  );
};

export default JobSearch;
