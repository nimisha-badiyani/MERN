import express from "express";
import {
  createPosts,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/postController.js";
import { uploadImage, getImage } from "../controller/imageController.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", createPosts);

router.get("/posts", getAllPosts);
router.get("/posts/:id", getPost);
router.post("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

export default router;
