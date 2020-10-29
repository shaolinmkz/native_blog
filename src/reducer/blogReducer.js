import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "../actionTypes";

const dummyPost = [
  {
    id: "2",
    title: "The Key 🔑 of life",
    content: 'The key of life has a name written in the sands of time...',
  },
  {
    id: "1",
    title: "God is love ❤️",
    content: 'Love of God can mean either love for God or love by God...',
  },
];

export const initialBlogState = {
  blogs: dummyPost,
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
