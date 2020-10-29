import { ADD_POST, DELETE_POST, EDIT_POST } from "../actionTypes";

export const addPost = (dispatch, payload) => {
  dispatch({
    type: ADD_POST,
    payload,
  });
};

export const editPost = (dispatch, payload) => {
  dispatch({
    type: EDIT_POST,
    payload,
  });
};

export const deletePost = (dispatch, payload) => {
  dispatch({
    type: DELETE_POST,
    payload,
  });
};
