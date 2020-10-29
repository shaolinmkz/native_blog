import React, { createContext } from "react";

export const BlogContext = createContext();

function BlogContextProvider({ children }) {
	return <BlogContext.Provider>{children}</BlogContext.Provider>;
}

export default BlogContextProvider;
