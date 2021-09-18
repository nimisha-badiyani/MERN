import { response } from "express";
import Post from "../schema/postSchema.js";

export const createPosts = async (request, response) => {
  console.log(request.body);
  try {
    const post = await new Post(request.body);
    console.log("data added");
    post.save();
    // console.log("2");
    // console.log(post);
    response.status(200).json("blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let categories = request.query.categories;
    let posts;
    try {
        if(username)
            posts = await Post.find({ username: username });
        else if (categories)
            posts = await Post.find({ categories: categories });
        else
            posts = await Post.find({});
        
    response.status(200).json(posts);
    // return posts
    console.log(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  console.log("1");
  try {
    console.log(request.params.id);
    let data = await Post.findById(request.params.id);
    response.status(200).json(data);
    console.log(data);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updatePost = async (request, response) => {
  try {
    let posts = await Post.findByIdAndUpdate(request.params.id,{$set: request.body});
    response.status(200).response("Blog updated successfully");
    // return posts
    console.log(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deletePost = async (request, response) => {
  try {
      let post = await Post.findById(request.params.id);
      await post.delete();
    response.status(200).response("Blog deleted successfully");
    // return posts
    console.log(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};