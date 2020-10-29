import blogReducer, { initialBlogState } from "../reducer/blogReducer";
import { CreateNewContext } from '../utils';

const newContext = CreateNewContext({ reducer: blogReducer, initialState: initialBlogState });

export const BlogContext = newContext.Context;

export const useBlogContext = newContext.useContextData;

export default newContext.Provider;
