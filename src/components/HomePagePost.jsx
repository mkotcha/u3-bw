import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../redux/actions";

const HomePagePost = () => {
  const posts = useSelector(state => state.mainPagePosts.posts);
  const dispatch = useDispatch();
  /*  console.log(state); */

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <Container>
        {posts &&
          posts.slice(0, 21).map(post => (
            <Container key={post._id} className="rounded border-dark-subtle border p-0 mb-2">
              <Container className="d-flex bg-light pt-2">
                <Row>
                  <Col className="d-flex ">
                    <div className="">
                      <img
                        className="rounded-circle"
                        src={post.user.image}
                        alt=""
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>

                    <div className="d-flex flex-column lh-sm ms-2 ">
                      <span>
                        {post.user.name} <span className="text-opacity-50">• You</span>
                      </span>
                      <span>{post.user.area}</span>
                      <span>
                        {post.user.updatedAt} • <i class="bi bi-globe-americas"></i>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container className="bg-light ">
                <div className="text-opacity-50 pb-4 border-bottom">{post.text}</div>
                <Container className="bg-light mt-4 pb-4 ">
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <div className="d-flex flex-column">
                        <i class="bi bi-hand-thumbs-up fs-4"></i>
                        <span>Like</span>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <i class="bi bi-chat-text fs-4 "></i>
                        <span className="">Comment</span>
                      </div>
                      <div className="d-flex flex-column">
                        <i class="bi bi-crop fs-4"></i>
                        <span>Repost</span>
                      </div>
                      <div className="d-flex flex-column">
                        <i class="bi bi-send fs-4"></i>
                        <span>send</span>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Container>
          ))}
      </Container>
    </>
  );
};

export default HomePagePost;
