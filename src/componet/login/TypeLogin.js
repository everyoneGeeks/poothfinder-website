import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Footer from '../Footer';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { Link  } from 'react-router-dom';
import  Login from './Login'
import AdLogin from "../Adlogin/AdLogin";
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';

const useStyles = makeStyles(theme => ({
  
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
backgroundColor:"#FFF"

  },
  root: {
    padding: theme.spacing(3, 2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar:{
    width:"165px",
    height:"155px"
  },
  fix:{
    right: "133px",
    marginTop: "50px",
  }
}));

const cardStyle = {
  marginTop: "105px",
  width: "680px",
  height: "-webkit-fill-available",
  marginRight: "190px"
};

const userImg = {
  height: '125px',
  width: '40%',
  placeContent: 'stretch',
  marginRight: '30px'
};

const ownerImg = {
  height: "125px",
  width: "40%",
  placeContent: "stretch",
  marginLeft: "414px"
};

const userLogin = {
    textDecoration: "none",
    color: "black"
};

const loginTitle = {
  fontWeight: "bold",
  marginTop: "20px"
};


export default function TypeLogin() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  return (
<Container style={{height:"350px"}}>
<Header />


  <Card style={cardStyle} >
  <Card.Body>
  <Row className="justify-content-md-center"  >
    <Col lg={12}   >

    <Typography  align='center' variant="h5" component="h5">
    <p  style={loginTitle}>
    تسجيل دخول
    </p>
          </Typography>
    </Col>
    
  <Col  bsPrefix="col-lg-6 col-lg-pull-4 "  className={classes.fix}>
  <Link style={userLogin} to={{pathname:"/login", state: { fromDashboard: false }}} >
           <Avatar alt="User " src="/asset/Group660.png" style={userImg} className={classes.avatar} />
           <Typography  align='right'  variant="h5" component="h5" style={{marginRight: "45px"}}>
           مستخدم عادي 
           </Typography>
           </Link>
           </Col>

    <Col bsPrefix="col-lg-6 col-lg-push-4" className={classes.fix}>   
  <Link style={userLogin} to={{pathname:"/advertiser/login", state: { fromDashboard: false }}} >
  
       <Avatar alt="Admin " src="/asset/Group659.png" style={ownerImg}  className={classes.avatar} />
       <Typography  align='right'  variant="h5" component="h5" style={{marginRight: "-92px"}}>
     حساب معلن
          </Typography>
       </Link> 
       </Col>
       
       </Row>
  </Card.Body>
</Card>


  <Footer />
</Container>
  );
  }
