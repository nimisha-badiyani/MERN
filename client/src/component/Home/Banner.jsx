// import React from 'react'
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 61,
      color: "#ffffff",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 20,
      backgroundColor: "#ffffff",
    },
  },
});
const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.image}>
        <Typography>BLOG</Typography>
        <Typography>Code for interview</Typography>
      </Box>
    </>
  );
};

export default Banner;
