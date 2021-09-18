import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  component: {
    backgroundColor: '#ffffff',
    color: 'black',
  },
  container: {
    justifyContent: 'center',
    "& >*": {
      padding: 20
    }
  },
  Link: {
    textDecoration: 'none',
    color:'inherit',
  },
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link className={classes.Link} to='/'><Typography>Home</Typography></Link>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <Typography>Login</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
