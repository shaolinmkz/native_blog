import React, { useState } from "react";
import { addPost } from "../actions/blogAction";
import BlogPostForm from "../components/BlogPostForm";
import { useBlogContext } from "../context/BlogContext";

export default ({ navigation }) => {
  const [post, setPost] = useState({
    content: "",
    title: "",
  });

  const [state, dispatch] = useBlogContext();

  const lastId = state?.blogs[0]?.id;
  const newId = lastId ? +lastId + 1 : 1;

  const handleChange = ({ name, value }) => {
    setPost((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (post.title && post.content) {
      addPost(dispatch, { id: `${newId}`, ...post });
      navigation.navigate("IndexScreen");
    }
  };

  return (
    <BlogPostForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      post={post}
    />
  );
};
