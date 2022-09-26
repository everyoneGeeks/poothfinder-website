import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Header
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//Container
import CssBaseline from '@material-ui/core/CssBaseline';
//Image
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Cookies from 'js-cookie';
import Dropdown   from 'react-bootstrap/Dropdown';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";

const logoText = {
  display: "contents",
  webkitTextStroke:"medium",
  color: "black",
  fontWeight: "bold",
  textDecoration: "none"
};

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      float: 'left',
      position: 'absolute',
      left: '15px',
    },
    login:{
    textDecoration: "none",
    color: "#000",
    },

    fixImage:{
      width:"50px",
      height:"60px"
    },
    image:{
      float: 'left',
      position: 'absolute',
      left: '90px',
    },
    image1:{
      float: 'left',
      position: 'absolute',
      left: '273px',
    },
    image0:{
      float: 'left',
      position: 'absolute',
      left: '154px',
    },
  }));
  

  
  export default function Header(props) {
    const [anchorEl, setAnchorEl ,auth] = React.useState(null);
    
    const open = Boolean(anchorEl);
    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };
const CloseMenu=()=>{
       setAnchorEl(null);
};
    const handleClose = () => {
      setAnchorEl(null);
      Cookies.remove('auth');
    return (<Redirect to={{pathname:"/"}}/>);
    };
    const classes = useStyles();

    if(Cookies.get('auth') !== undefined ){
   const auth =JSON.parse(Cookies.get('auth'));
   const name=auth.name;
   return(
    <div className={classes.root} >
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="#fff">
        <Toolbar style={{display: "flex",
    marginRight: "10px",
    marginLeft: "90px"}}>
        <Link to={{pathname: "/"}} style={logoText}>  

        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL+"/logo.png"} className={classes.avatar} classes={{root:classes.fixImage}} />
        <h6 style={{marginRight:"10px"}}>Booth Finder</h6>
        </Link>
          <Typography variant="h6" style={{display: "flex",
            marginLeft: "-60px"}} className={classes.title}   >
          <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
              <AccountCircle />
            </IconButton>
          
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={CloseMenu}
            >
              <MenuItem onClick={handleClose}>logout</MenuItem>
            </Menu>
          <p style={{fontSize: "small",
            display: "contents"}}>{name}</p>
          </div>

          </Typography>



      </Toolbar>
      </AppBar>
    </React.Fragment>
    </div>
  );

    }else{
      return (
        <div className={classes.root}>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="fixed" color="#fff">
            <Toolbar style={{display: "flex",
    marginRight: "70px",
    marginLeft: "70px"}}>
            <Link to={{pathname: "/"}} style={logoText}>  

<Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL+"/logo.png"} className={classes.avatar} classes={{root:classes.fixImage}} />
<h6 style={{marginRight:"10px"}}>Booth Finder</h6>
</Link>
              <Typography variant="h6" className={classes.title}  >
                <Link style={{textDecoration: "none"}}  className={classes.login} to="/typeLogin" > دخول </Link> 
              </Typography>
          </Toolbar>
          </AppBar>
        </React.Fragment>
        </div>
      );
    }
    

   
   
  }