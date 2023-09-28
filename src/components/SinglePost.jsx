import { Col, Container, Row } from "react-bootstrap";

const SinglePost = ({ post }) => {
  return (
    <>
      <div className="bg-white rounded border border-secondary-subtle   my-3">
        <div className="d-flex p-3">
          <div className="pt-2">
            <img
              className="rounded-circle pt-1"
              src={post.user.image}
              alt="user logo"
              style={{ height: "50px", width: "50px" }}
            />
          </div>

          <div className="d-flex flex-column lh-sm m-2 ">
            <span className="fw-bold">{post.user.name}</span>
            <small className="text-secondary">{post.user.area}</small>
            <small className="text-secondary">
              {post.user.updatedAt} • <i className="bi bi-globe-americas"></i>
            </small>
          </div>
        </div>
        <div className=" ">
          <div className="p-4 ">{post.text}</div>

          <div className="d-flex justify-content-around border-top py-2 text-center">
            <div className="d-flex flex-column">
              <i className="bi bi-hand-thumbs-up fs-4"></i>
              <span>Like</span>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <i className="bi bi-chat-text fs-4 "></i>
              <span className="">Comment</span>
            </div>
            <div className="d-flex flex-column">
              <i className="bi bi-crop fs-4"></i>
              <span>Repost</span>
            </div>
            <div className="d-flex flex-column">
              <i className="bi bi-send fs-4"></i>
              <span>send</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePost;
