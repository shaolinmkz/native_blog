import React, { createContext, useContext } from "react";
import useBlogReducer from "../reducer/blogReducer";

export const BlogContext = createContext();

export const useBlogContext = () => {
    const { state, dispatch } = useContext(BlogContext);

    return [state, dispatch]
};

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useBlogReducer();
	return <BlogContext.Provider value={{ state, dispatch }}>{children}</BlogContext.Provider>;
}

export default BlogContextProvider;
