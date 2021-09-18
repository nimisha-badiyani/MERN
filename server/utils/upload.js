import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  //   url: "mongodb+srv://nimi_blog:nimi6464@blog.rkijc.mongodb.net/BLOG_PROJECT?retryWrites=true&w=majority",
  url: "mongodb://127.0.0.1:27017/blog",
  options: { useNewURLParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-blog${file.originalname}`;
    }

    return {
      bucketName: "photos",
      fileName: `${Date.now()}-blog${file.originalname}`,
    };
  },
});

export default multer({ storage });