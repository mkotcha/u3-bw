import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";
import PostModal from "./PostModal";
const PersonalPosts = () => {
  const posts = useSelector(state => state.mainPagePosts.posts);
  const me = useSelector(state => state.me);
  const [personalPost, setPersonalPost] = useState([]);
  // const postId = useSelector(state => state.postModal.id);
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
      <PostModal />
      {personalPost.map(post => (
        <SinglePost key={post._id} post={post} />
      ))}
    </>
  );
};

export default PersonalPosts;
