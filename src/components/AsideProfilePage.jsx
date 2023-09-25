import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { otherProfileFetch } from "../redux/actions";
import { useDispatch } from "react-redux";

const AsideProfilePage = () => {
  const [profiles, setProfile] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(otherProfileFetch());
  }, []);

  return (
    <>
      <div className="border-dark-subtle border rounded py-2 px-2 mb-2">
        <div className="d-flex justify-content-between mb-2">
          <h5>Profile language</h5>
          <i className="bi bi-pencil"></i>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant="success" className="rounded-pill bottoniLingueAside">
            Italiano
          </Button>
          <Button variant="light" className="rounded-pill bottoniLingueAside">
            English
          </Button>
        </div>
        <Container>
          <hr />
        </Container>
        <div className="d-flex justify-content-between mb-2">
          <h5 className="d-inline">Public profile & URL</h5>
          <i className="bi bi-pencil"></i>
        </div>
        <p>www.linkedin.com/in/flavio-de-angelis-4b50b3293</p>
      </div>
      <div className="border-dark-subtle border rounded mb-2">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="see who's hiring"
          className="w-100"
        />
      </div>
      <div className="border-dark-subtle border rounded py-2 px-2 mb-2">
        <h6 className="mb-0">People you may know</h6>
        <p>From your school</p>
      </div>
    </>
  );
};
export default AsideProfilePage;
