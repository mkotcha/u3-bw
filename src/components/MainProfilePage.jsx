import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainProfilePage = () => {
  const me = useSelector((state) => state.me);

  return (
    <>
      <Container className="d-flex">
        <div className="fluid bg-secondary justify-content-center" style={{ height: '280px', width: '100%' }}>
          <img src="" alt="" />
          <div className="d-flex justify-content-end me-5 fs-5">
            <button className="bg-transparent border-0">
              <i class="bi bi-pencil"></i>
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <button className="bg-transparent border-0">
              <img
                src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="linkedin-profile"
                className="rounded-circle ms-3 "
                style={{ maxHeight: '200px', width: '200px' }}
              />
            </button>
            <div className="d-flex ">
              <button className="bg-transparent border-0 align-self-end me-5 fs-3">
                <i class="bi bi-pencil"></i>
              </button>
            </div>
          </div>
        </div>

        {/* profile name and details */}
      </Container>

      <Container>
        <div className="ms-4">
          <div>
            <h1>{me.name}</h1>
          </div>
          <div>
            <p>Bio</p>
          </div>
          <div className="d-flex">
            <span>Location</span>

            <span className="ms-3">
              <Link>Contact Info</Link>
            </span>
          </div>
          <div className="my-3">
            <Button className="primary rounded-pill px-3 fw-semibold border-2">I am...</Button>
            <Button className="bg-transparent text-primary mx-2 rounded-pill px-3 fw-semibold border-2">
              Add profile section
            </Button>
            <Button className="text-secondary bg-transparent border-secondary rounded-pill px-3 fw-semibold border-2">
              more
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};
export default MainProfilePage;
