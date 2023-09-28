import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";

const PersonalPosts = () => {
  const posts = useSelector(state => state.mainPagePosts.posts);
  const me = useSelector(state => state.me);
  const [personalPost, setPersonalPost] = useState([]);

  useEffect(() => {
    console.log(
      "post: ",
      posts.filter(post => post.user._id == me._id)
    );
    setPersonalPost(posts.filter(post => post.user._id === me._id));
  }, [me._id, posts]);

  console.log();
  return (
    <>
      {personalPost.map(post => (
        <SinglePost key={post._id} post={post} />
      ))}
    </>
  );
};

export default PersonalPosts;
