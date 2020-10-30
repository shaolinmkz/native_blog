import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "../actionTypes";

export const initialBlogState = {
  blogs: [],
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
        singlePost: payload,
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
        singleBlog: payload,
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
