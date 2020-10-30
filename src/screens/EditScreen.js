import React, { useState, useEffect } from "react";
import { editPost } from "../actions/blogAction";
import BlogPostForm from "../components/BlogPostForm";
import { useBlogContext } from "../context/BlogContext";

export default ({ navigation }) => {
  const [post, setPost] = useState({
    content: "",
    title: "",
  });
  const [saving, setSaving] = useState(false);

  const id = navigation.getParam("id");

  const [{ singlePost }, dispatch] = useBlogContext();

  const handleChange = ({ name, value }) => {
    setPost((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    setSaving(true);
    editPost(dispatch, post)
    .then(() => {
      setSaving(false);
      navigation.pop();
    })
  };

  useEffect(() => {
    if (id) {
      setPost(singlePost);
    } else {
      navigation.pop();
    }
  }, []);

  return (
    <BlogPostForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      post={post}
      saving={saving}
    />
  );
};
