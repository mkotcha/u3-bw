import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showPostModal } from "../redux/actions";

const HomePageMiddle = () => {
  const personalProfile = useSelector(state => state.me);
  const dispatch = useDispatch();
  return (
    <>
      <div className="my-3 " onClick={() => dispatch(showPostModal())}>
        <div className=" border-dark-subtle border w-100 d-flex p-3 align-items-center  bg-white rounded">
          <div>
            <img
              className="rounded-circle"
              src={personalProfile.image}
              alt=""
              style={{ height: "58px", width: "58px" }}
            />
          </div>
          <div className="flex-grow-1 px-2">
            <Form.Group controlId="validationCustom01" size="lg">
              <Form.Control
                className="rounded-pill ms-1 py-3"
                required
                type="text"
                placeholder="Start a post"
                defaultValue="Start a post"
              />
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageMiddle;
