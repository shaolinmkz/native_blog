import React, { useState } from "react";
import { addPost } from "../actions/blogAction";
import BlogPostForm from "../components/BlogPostForm";
import { useBlogContext } from "../context/BlogContext";

export default ({ navigation }) => {
  const [post, setPost] = useState({
    content: "",
    title: "",
  });

  const [saving, setSaving] = useState(false);

  const [, dispatch] = useBlogContext();

  const handleChange = ({ name, value }) => {
    setPost((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (post.title && post.content) {
      setSaving(true);
      addPost(dispatch, post)
      .then(() => {
        setSaving(false);
        navigation.pop();
      })
    }
  };

  return (
    <BlogPostForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      post={post}
      saving={saving}
    />
  );
};
