import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Test = () => {
  const id = useSelector(state => state.me._id);
  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profile", event.target.formFile.files[0]);

    console.log(JSON.stringify(formData));

    const url = "https://striveschool-api.herokuapp.com/api/profile/";

    const options = {
      body: formData,
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_BEARER,
      },
    };

    try {
      const response = await fetch(url + id + "/picture", options);

      if (response.ok) {
        const result = await response.json();
        //dispatch(());

        console.log(result);
      }
    } catch (error) {
      console.log("error: " + error);
    }
  };

  return (
    <>
      <Container>
        <p>ciao!</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select a photo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Test;
