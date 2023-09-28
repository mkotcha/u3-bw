import Form, { Button, FormControl } from 'react-bootstrap'
import { useState } from 'react'

const JobSearch = () => {
    const [arrayJobsSearchTitle, setArrayJobsSearchTitle] = useState([]);
    const [searchTitle, setSearchTitle] = useState("")
   
    const handleChange = (event) =>
    {
        setSearchTitle(event.target.value)
    }  

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchJobsTitle()
    }

const fetchJobsTitle = async () => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + searchTitle);

      if (response.ok) {
        let fetchedJobsTitle = await response.json();
        // console.log(fetchedJobs);
        setArrayJobsSearchTitle(fetchedJobsTitle.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  


 return (
    <>
    <Form onSubmit={handleSubmit}>
        <i className="bi bi-search d-lg-none fontSizeIconTopBar"></i>
        <Form.Control type="text" placeholder="Search by title or company" className="mr-sm-2 d-none d-lg-inline" value={searchTitle} onChange={handleChange}>
        <Button><i className="bi bi-arrow-right-short text-primary"></i></Button>
        </Form.Control>
    </Form>
    </>
    )
}

export default JobSearch;