import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextFInputield from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Footer from '../Footer';
import { withStyles } from '@material-ui/styles';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import  Alert  from 'react-bootstrap/Alert';
import Cookies from 'js-cookie';
import Loading from "../layout/loading";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";






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
  avatar: {
    margin: theme.spacing(1),
    width:"11px",
    display:"inline",
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  Text:{
    display:"inline"
  },
  img:{
    height: "0",
  }
}));

const loginTitle = {
  marginRight: "20px",
  fontWeight: "bold"
};

const email = {
    marginBottom: "-5px",
    textAlign: "right"
};

const password = {
    marginTop: "20px",
    marginBottom: "-5px",
    textAlign: "right"
};

const rememberMe = {
  display: "flex",
  marginRight: "-10px"
};

const register = {
    display: "flex",
    marginTop: "30px",
    marginRight: "177px"
};


 class Login extends React.Component {

state={
email:"",
password:"",
isRememberMe:true,
error:"",
isLoaded:false
}

constructor(props){
  super(props);
}



handelChange(event) {
  var value=event.target.value;
  
  if( event.target.type === "checkbox" ){
    value=event.target.checked;
   }
   this.setState({ ...this.state,[event.target.name]:value})
  }

  handleSubmit(event){

event.preventDefault(); 
  const login = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/login",{
    email:this.state.email,
    password:this.state.password,
    isRememberMe:this.state.isRememberMe
  })
  .then(result => {
    if(result.data.message){
    this.setState({isLoaded:false,error:result.data.message});
    }else{
      this.setState({isLoaded:true});
      Cookies.set('auth',JSON.stringify(result.data.data))
     this.props.history.push("/");

    }
     
  })
  .catch(error => {
    this.setState({
      isLoaded: false,
     
    });
  });

}


  //const classes = useStyles();
render(){
  // Style Css 

  const { classes } = this.props;
  // Check Loading File
  if (this.state.isLoaded ==true){
    return (
<Loading />
    )
  }
  return (


     
<Container style={{height:"592px"}}>
<Header />
{this.redirect}
<Card style={{marginTop:"80px"}} >
  <Card.Body>



<Row className="justify-content-md-center" style={{marginTop : "20px"}} >
 {/* Start Error */}
  {this.state.error &&(  <Col lg={12}>
  <Alert variant="danger" >
{this.state.error} !
  </Alert>
  </Col>)  }
 {/* End Error  */}


    <Col lg={6} style={{display: "contents"}}>
      <Avatar alt="User " src="/asset/Group660.png"  classes={{img:classes.img}}  />
        <Typography  align='right'  variant="h5" component="h5" component="h1" variant="h5" className={classes.Text}>
          <p style={loginTitle}>
            تسجيل مستخدم عادي
          </p>
        </Typography>
     </Col>
     </Row>
  <Row className="justify-content-md-center" >

    <Col lg={6}> <React.Fragment>

<form className={classes.form} noValidate>
  <p style={email}>البريد الاليكتروني</p>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    label="ex@do.com"
    name="email"
    autoFocus
    onChange={this.handelChange.bind(this)}
  />
   <p style={password}>كلمة المرور</p>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="كلمة المرور"
    type="password"
    id="password"
    style = {{textAlign:'right'}}
    autoComplete="current-password"
    onChange={this.handelChange.bind(this)}
  />
  <FormControlLabel style = {rememberMe}
    control={<Checkbox value="true" color="primary" />}
    label="تذكرني"
    name="isRememberMe"
    onChange={this.handelChange.bind(this)}
  />
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    onClick={this.handleSubmit.bind(this)}
    className={classes.submit}
  >
   دخول
  </Button>
  <div style={register}>
    <p>ليس لديك حساب ؟</p>&nbsp;
    <Link to={{pathname: "/register"}} >سجل الان</Link>
  </div>
</form>


</React.Fragment>
</Col>
  </Row>
  </Card.Body>
</Card>
  <Footer />
</Container>


  );
  };
}

export default withRouter(withStyles(useStyles)(Login));
