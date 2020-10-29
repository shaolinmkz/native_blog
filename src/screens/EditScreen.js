import React, { useState, useEffect } from "react";
import { editPost } from "../actions/blogAction";
import BlogPostForm from "../components/BlogPostForm";
import { useBlogContext } from "../context/BlogContext";

export default ({ navigation }) => {
  const [post, setPost] = useState({
    content: "",
    title: "",
  });

  const id = navigation.getParam("id");

  const [state, dispatch] = useBlogContext();

  const handleChange = ({ name, value }) => {
    setPost((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (id) {
      editPost(dispatch, post);
      navigation.navigate("IndexScreen");
    }
  };

  useEffect(() => {
    if (id) {
      const post = state.blogs.find(({ id: blogId }) => blogId === id);
      setPost(post);
    } else {
      navigation.navigate("IndexScreen");
    }
  }, []);

  return (
    <BlogPostForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      post={post}
    />
  );
};
