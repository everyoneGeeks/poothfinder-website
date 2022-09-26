import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Header
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";


//Container
import CssBaseline from '@material-ui/core/CssBaseline';
//Image
import Avatar from '@material-ui/core/Avatar';


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
    image:{
      float: 'left',
      position: 'absolute',
      left: '60px',
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
    login:{
    textDecoration: "none",
    color: "#000",
    }
    
  }));
  
  
  
  export default function HeaderUser(props) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed" color="#fff">
          <Toolbar>

          <Avatar alt="Remy Sharp" src="logo.png" className={classes.avatar} />
          <h6>booth Finder</h6>
            <Typography variant="h6" className={classes.title}  >
            <Avatar alt="Remy Sharp" src={props.image} className={classes.avatar} />
            </Typography>

            <MenuItem className={classes.image} >
              
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
 


      </MenuItem>
      <MenuItem className={classes.image1} >
      <Typography variant="h6" color="inherit">
      <Link to={{pathname: "/favorite",state: { date: props.data}}}> اهتماماتي 
</Link>
    </Typography>
    </MenuItem>

    <MenuItem className={classes.image0} >
      <Typography variant="h6" color="inherit">
      <Link to={{pathname: "/reservation",state: { date: props.data}}}> حجوزاتي 
</Link>  
    </Typography>
    </MenuItem>

        </Toolbar>
        </AppBar>
      </React.Fragment>
      </div>
    );
   
  }