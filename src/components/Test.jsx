import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Test = () => {
  const me = useSelector(state => state.me);
  const [picture, setpicture] = useState("");
  const handleChange = event => {
    const url = URL.createObjectURL(event.target.files[0]);
    setpicture(url);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile", event.target.formFile.files[0]);
    const url = "https://striveschool-api.herokuapp.com/api/profile/";
    const options = {
      body: formData,
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_BEARER,
      },
    };
    try {
      await fetch(url + me._id + "/picture", options);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    setpicture(me.image);
  }, [me.image]);

  return (
    <>
      <Container>
        <p>ciao!</p>
        <Row className="justify-content-center">
          <Col sm={8} md={6}>
            <Form onSubmit={handleSubmit}>
              <div>
                <img src={picture} alt="" className="w-100" />
              </div>
              <Form.Group controlId="formFile" className="mb-3" onChange={handleChange}>
                <Form.Label>Select a photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group>
                <Button type="submit">Submit</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Test;
