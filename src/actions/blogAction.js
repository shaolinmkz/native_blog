import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
  GET_POST,
} from "../actionTypes";
import jsonServer from "../api/jsonServer";

export const getPosts = async (dispatch) => {
  try {
    const { data } = await jsonServer.get("/blogposts");

    dispatch({
      type: GET_POSTS,
      payload: data?.reverse(),
    });
  } catch (err) {
    return err;
  }
};

export const getPost = async (dispatch, id) => {
  try {
    const { data } = await jsonServer.get(`/blogposts/${id}`);
    dispatch({
      type: GET_POST,
      payload: data,
    });
  } catch (err) {
    return err;
  }
};

export const addPost = async (dispatch, payload) => {
  try {
    const { data } = await jsonServer.post("/blogposts", payload);
    dispatch({
      type: ADD_POST,
      payload: data,
    });
  } catch (err) {
    return err;
  }
};

export const editPost = async (dispatch, payload) => {
  try {
    const { data } = await jsonServer.put(`/blogposts/${payload.id}`, payload);
    dispatch({
      type: EDIT_POST,
      payload: data,
    });
  } catch (err) {
    return err;
  }
};

export const deletePost = async (dispatch, payload) => {
  try {
    await jsonServer.delete(`/blogposts/${payload.id}`);
    dispatch({
      type: DELETE_POST,
      payload,
    });
  } catch (err) {
    return err;
  }
};
