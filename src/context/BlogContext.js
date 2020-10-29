import React, { createContext, useContext, useReducer } from "react";
import blogReducer, { initialBlogState } from "../reducer/blogReducer";

export const BlogContext = createContext();

export const useBlogContext = () => {
    const { state, dispatch } = useContext(BlogContext);

    return [state, dispatch]
};

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialBlogState);
	return <BlogContext.Provider value={{ state, dispatch }}>{children}</BlogContext.Provider>;
}

export default BlogContextProvider;
