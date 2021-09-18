import mongoose from "mongoose";
import grid from "gridfs-stream";
const url = "http//localhost:6464";

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadImage = (request, response) => {
  try {
    if (!request.file) {
      return response.status(404).json("File not found");
    }
    const imageURL = `${url}/file/${request.file.filename}`;
    response.status(200).json(imageURL);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getImage = async (req, res) => {
  //   try {
  //     const file = await gfs.files.findOne({ filename: request.params.filename });
  //     console.log("555555", file);
  //     const readstream = gfs.createReadStream(file.filename);
  //     readstream.pipe(response);
  //   } catch (error) {
  //     response.status(500).json(error);
  //   }
  // };
  try {
    const file = await gfs.files.find({ filename: req.params.filename });
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  } catch (err) {
    res.json({ err });
  }
};
