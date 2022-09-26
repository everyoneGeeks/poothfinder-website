import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Footer from '../Footer';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import  Alert  from 'react-bootstrap/Alert';
import Cookies from 'js-cookie';
import Loading from "../layout/loading";
import Subscription from "../Adregister/AdSubscription";

import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";
import { Form } from 'react-bootstrap';






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
    height: "44px",
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
    width: "11%",
    height: "100%",
    objectFit:"cover",
    textAlign: "center",
  }
}));

const loginTitle = {
  marginRight: "20px",
  fontWeight: "bold"
};

const roles = {
  display: "table",
  marginRight: "-26px"
};

 class AdRegister extends React.Component {

state={
email:"",
password:"",
password_conform:"",
name:"",
phone:"",
isRememberMe:true,
error:"",
isLoaded:false,
isLogin:false,
countries:[],
countryId:""
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

  componentDidMount(){
    const countries =  axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/activeCountries")
    .then(result => {
      this.setState({
        countries: Object.values(result["data"])
        
      });
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error
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
  if(this.state.isLogin ==true){
    return (<Subscription data={this.state} />);
  }

  return (


     
<Container style={{height:"1000px"}}>
<Header />
{this.redirect}
<Card style={{marginTop:"80px"}} >
  <Card.Body>



<Row className="justify-content-md-center" style={{marginTop : "20px"}} >
 {/* Start Error */}
 
  {this.props.error == null ? '' : 
  (  <Col lg={12}>
  <Alert variant="danger" >
{this.props.error } !
  </Alert>
  </Col>)  }
 {/* End Error  */}


    <Col lg={6} style={{display: "contents"}}>
      <Avatar alt="User " src="/asset/Group659.png" className={classes.avatar} />
        <Typography  align='right'  variant="h5" component="h5" component="h1" variant="h5" className={classes.Text}>
          <p style={loginTitle}>
            تسجيل  حساب معلن 
          </p>
        </Typography>
     </Col>
     </Row>
  <Row className="justify-content-md-center" >

    <Col lg={6}> <React.Fragment>

<form className={classes.form} noValidate>
<p style={{    
    marginBottom: "-3px",
    textAlign: "right"}}>الاسم</p>
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="name"
    label="الاسم  "
    name="name"
    autoFocus
    onChange={this.handelChange.bind(this)}
  />
<p style={{    
    marginBottom: "-3px",
    textAlign: "right"}}>البريد الاليكتروني</p>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    label="ex@do.com "
    name="email"
    onChange={this.handelChange.bind(this)}
  />
  
<p style={{    
    marginBottom: "-3px",
    textAlign: "right"}}>رقم الجوال</p>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="phone"
    label="رقم الجوال "
    type="phone"
    id="phone"
    autoComplete="current-password"
    onChange={this.handelChange.bind(this)}
  />
  <p style={{    
    marginBottom: "-3px",
    textAlign: "right"}}>الدولة</p>
<Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Control
   as="select"
  name="countryId"
  onChange={this.handelChange.bind(this)}>
    <option> اختر دولتك</option>
    {this.state.countries.map((items,index) =>(
               items.map(couuntry=>(
                <option value={couuntry.id}>  {couuntry.name_ar}</option>
              ))
              ) )}
  </Form.Control>
</Form.Group>
<p style={{    
    marginBottom: "-3px",
    textAlign: "right"}}>رمز المرور</p>
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="رمز المرور"
    type="password"
    id="password"
    autoComplete="current-password"
    onChange={this.handelChange.bind(this)}
  />

<p style={{    
    marginBottom: "-3px",
    textAlign: "right"}}>تاكيد الرمز</p>
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password_conform"
    label= " تاكيد رمز المرور "
    type="password_conform"
    id="password_conform"
    onChange={this.handelChange.bind(this)}
  />
  <div style={roles}>
    <FormControlLabel
      style = {{marginTop: "3px"}}
      control={<Checkbox value="true" color="primary" />}
      label="موافق على "
      name="isRememberMe"
      onChange={this.handelChange.bind(this)}
    />&nbsp; &nbsp; &nbsp;
    <Link to={{pathname: "/roles"}}>الشروط والاحكام</Link>
  </div>
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    onClick={(e)=>{this.setState({isLogin:true})}}
    className={classes.submit}
  >
تسجيل  </Button>
<Link to={{pathname: "/advertiser/login"}}>  
<p style={{ textAlign: "center",
    marginTop: "20px"}}>
تسجيل دخول      
</p>
</Link>
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

export default withRouter(withStyles(useStyles)(AdRegister));
