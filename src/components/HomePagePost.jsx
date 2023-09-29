import { useEffect } from "react";
import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";

const HomePagePost = () => {
  const posts = useSelector(state => state.mainPagePosts.posts);

  useEffect(() => {}, []);
  return (
    <>
      <div>{posts && posts.slice(0, 21).map(post => <SinglePost key={post._id} post={post} />)}</div>
    </>
  );
};

export default HomePagePost;
