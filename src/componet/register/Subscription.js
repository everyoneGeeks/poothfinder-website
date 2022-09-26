import React from 'react';
import axios from 'axios';
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
import "../register/style.css";
import Register from "./Register";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { Button,ButtonToolbar,Form ,InputGroup,FormControl} from "react-bootstrap";


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
    width: "11%",
    height: "100%",
    objectFit:"cover",
    textAlign: "center",
  }
}));


 class Subscription extends React.Component {

state={
email:"",
password:"",
password_conform:"",
name:"",
phone:"",
isRememberMe:true,
error:"",
isLoaded:false,
isRegister:false
}

constructor(props){
  super(props);
  if(this.props.data == null){
    this.props.history.push({
        pathname: '/register',
      })
  }
}

handleSubmit(event,data){
    

    event.preventDefault();
    
      const register = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/registeUser",{
        email:this.props.data.email,
        password:this.props.data.password,
        name:this.props.data.name,
        password_confirmation:this.props.data.password_conform,
        phone:this.props.data.phone,
        countryId:this.props.data.countryId,
        isRememberMe:this.props.data.isRememberMe,
        // accountingType:data ==true ? 'subscription' : 'commission',
      })
      .then(result => {
        if(result.data.message){
            
          this.setState({isRegister:true,error:result.data.message});
 
        }else{
          this.setState({isLoaded:true});
         this.props.history.push("/login");
    
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
  
  if(this.state.isRegister == true){
    return (<Register error={this.state.error} />);
  }
  return (


     
<Container style={{height:"1000px"}}>
<Header />
{this.redirect}
<div id="price">

  <div class="plan standard">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>نظام العمولة  </h3>
        <div class="price">$25<span>/PER CAR</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى.</li>
        </ul>
      </div>
      <div class="btn">
<Button variant="link"  onClick={(e)=>this.handleSubmit(e)} > اشترك الان </Button>
      </div>
    </div>
  </div>

  <div class="plan basic">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>الاشتراك الشهري  </h3>
        <div class="price">$50<span>/PER CAR</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى.</li>

        </ul>
      </div>
      <div class="btn">
<Button variant="link"  onClick={(e)=>this.handleSubmit(e)} > اشترك الان </Button>
      </div>
    </div>
  </div>



</div>
  <Footer />
</Container>


  );
  };
}

export default withRouter(withStyles(useStyles)(Subscription));
