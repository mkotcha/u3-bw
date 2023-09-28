import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";

const HomePagePost = () => {
  const posts = useSelector(state => state.mainPagePosts.posts);

  useEffect(() => {}, []);
  return (
    <>
      <Container>{posts && posts.slice(0, 21).map(post => <SinglePost key={post._id} post={post} />)}</Container>
    </>
  );
};

export default HomePagePost;
