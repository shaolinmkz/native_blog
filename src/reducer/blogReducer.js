import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "../actionTypes";

const mockBlogPost = [
  { title: "Blog Post #3", id: "3" },
  { title: "Blog Post #2", id: "2" },
  { title: "Blog Post #1", id: "1" },
];

export const initialBlogState = {
  blogs: mockBlogPost,
  singleBlog: null,
};

export default (state = initialBlogState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        blogs: payload,
      };
    case GET_POST:
      return {
        ...state,
        singleBlog: payload,
      };
    case ADD_POST:
      return {
        ...state,
        blogs: [payload, ...state.blogs],
      };
    case EDIT_POST:
      return {
        ...state,
        blogs: state.blogs.map((data) =>
          data.id === payload.id ? payload : data
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        blogs: state.blogs.filter((data) => data.id !== payload.id),
      };
    default:
      return state;
  }
};

