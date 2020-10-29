import { ADD_POST, DELETE_POST } from "../actionTypes";

export const addPost = (dispatch, payload) => {
  dispatch({
    type: ADD_POST,
    payload,
  })
}

export const deletePost = (dispatch, payload) => {
  dispatch({
    type: DELETE_POST,
    payload,
  })
}
