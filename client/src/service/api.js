import axios from "axios";

const URL = "http://localhost:6464";

export const createPost = async (post) => {
  try {
    console.log("post data ", post);
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API", error);
  }
};

export const getAllPosts = async (params) => {
  try {
    let response = await axios.get(`${URL}/posts${params}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPosts API", error);
  }
};

export const getPost = async (id) => {
  try {
    console.log("oh yeah!!!!");
    let response = await axios.get(`${URL}/posts/${id}`);
    console.log("oh yeah!!!!", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    return await axios.post(`${URL}/update/${id}`, post);
    // console.log(response.data);
    // return response.data;
  } catch (error) {
    console.log("Error while calling updatePost API", error);
  }
};

export const deletePost = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
    // console.log(response.data);
    // return response.data;
  } catch (error) {
    console.log("Error while calling deletePost API", error);
  }
};

export const uploadFile = async (post) => {
  try {
    let a = await axios.post(`${URL}/file/upload`, post);
    console.log(a);
    return a;
    // console.log(response.data);
    // return response.data;
  } catch (error) {
    console.log("Error while calling uploading the image", error);
  }
};
