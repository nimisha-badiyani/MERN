import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { createPost, uploadFile } from "../../service/api";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  TextField: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  Textarea: {
    width: "100%",
    marginTop: 50,
    border: "none",
    fontSize: 18,
    "&:focus-visible": {
      outilne: "none",
    },
  },
}));

const initialValues = {
  title: "",
  description: "",
  image: "",
  username: "codding",
  Categories: "All",
  createdDate: new Date(),
};
const CreateView = () => {
  const classes = useStyle();

  const history = useHistory();

  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const url = post.image || `https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80`;

  useEffect(() => {
    const getImage = async () => {
      // console.log(file);
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        // console.log("file data", file);
        // console.log("data **************", data);
        const images = await uploadFile(data);
        // console.log("************** images data", images);
        post.image = images.data;
        setImage(images.data);
        setImage(post.image);
      }
    };
    getImage();
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };
  return (
    <>
      <Box className={classes.container}>
        <img src={url} alt="create" className={classes.image} />
        <FormControl className={classes.form}>
          <label htmlFor="fileInput">
            <AddCircle fontSize="large" color="action" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <InputBase
            onChange={(e) => handleChange(e)}
            placeholder="Title"
            className={classes.TextField}
            name="title"
          />
          <Button
            onClick={() => savePost()}
            variant="contained"
            color="primary"
          >
            Publish
          </Button>
        </FormControl>

        <TextareaAutosize
          minRows={5}
          placeholder="tell your story..."
          className={classes.Textarea}
          onChange={(e) => handleChange(e)}
          name="description"
        />
      </Box>
    </>
  );
};

export default CreateView;
