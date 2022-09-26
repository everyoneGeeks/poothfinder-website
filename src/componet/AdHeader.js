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
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";

import {useTheme } from '@material-ui/core/styles';






import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
           background:'#191e2d'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
 
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawercx:{
       background:'#191e2d'
  },
  drawerPaper: {
    width: drawerWidth,
                   background:'#191e2d',
                   color:'#fff'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

  export default function Header(props) {
    const classes = useStyles();
const theme = useTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiDrawer: {
      // Name of the rule
      root: {
        // Some CSS
        background: '#f00',
      },
    },
  },
});
const logoText = {
  display: "contents",
  webkitTextStroke:"medium",
  color: "black",
  fontWeight: "bold",
  textDecoration: "none"
};

const urlText = {
  display: "contents",
  webkitTextStroke:"medium",
  color: "#fff",
  fontWeight: "bold",
  textDecoration: "none"
};
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    
        const [anchorEl, setAnchorEl ,auth] = React.useState(null);
    
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
    if(Cookies.get('auth') !== undefined ){
   const auth =JSON.parse(Cookies.get('auth'));
   const name=auth.name;
   return(<div className={classes.root}>
      <CssBaseline />
      <AppBar
      color='default'
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
           <Link to={{pathname: "/"}} style={logoText}>  

        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL+"/logo.png"} className={classes.avatar} classes={{root:classes.fixImage}} />
        <h6 style={{marginRight:"10px"}}>Booth Finder</h6>
        </Link>
        </Toolbar>
      </AppBar>
      
       <Drawer
        className={classes.drawercx}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          root:classes.drawercx,
          paper: classes.drawerPaper,
        }}

      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={{color:"#fff"}}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
  

            <ListItem button >
              <ListItemIcon style={{color:"#fff"}}> <InboxIcon /> </ListItemIcon>
                         <Link to={{pathname: "/advertiser/Statics"}}  style={urlText} >  
              <ListItemText style={{textAlign:'right'}} primary={"تقارير ماليه"} />
              </Link>
            </ListItem>
            
              <ListItem button >
              
              
              
              <ListItemIcon style={{color:"#fff"}}> <InboxIcon /> </ListItemIcon>
                                 <Link to={{pathname: "/advertiser/Reservations"}}  style={urlText} >  
              <ListItemText style={{textAlign:'right'}} primary={" قائمة الحجوزات"} />
              </Link>
            </ListItem>
            

            
                                    <ListItem button >
              <ListItemIcon style={{color:"#fff"}}> <InboxIcon /> </ListItemIcon>
                                        <Link to={{pathname: "/advertiser/AcceptReservations"}}  style={urlText} >  
              <ListItemText style={{textAlign:'right'}} primary={"  تاكيد الحجز النقدي "} />
                 </Link>
            </ListItem>
            

        </List>
        <Divider />
      </Drawer>
    </div>
    
    
    
  );

    }else{
      return (
       <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>

            </main>
        </React.Fragment>
    )}
    />
</Router>
      );
    }
    

   
   
  }