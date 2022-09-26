import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { withStyles } from '@material-ui/styles';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loading from "../layout/loading";
import { Button,Card } from "react-bootstrap";
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";
import { Carousel } from "react-bootstrap";
// Css
const useStyles = makeStyles(theme => ({
  iconFilled: {
    right: "88%",
  },
  root: {
    flexGrow: 1,
    padding:"20px",
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    direction:"rtl",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 233,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input:{
    right:22,
    top:0
  }

}));

 class Main extends React.Component {
   
  state={
    Reservations:[],
    isLoaded: false,
    error:"",
    message:""
    }

  constructor(props){
    super(props);

  }

  async  componentDidMount(){
    const { match: { params } } = this.props;
  
    const auth=JSON.parse(Cookies.get('auth'));   

    

      const booths =await axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/showOwnerBooths",{

        apiToken:auth.api_token,
      }).then(result => {
        if(result.data.message){
        this.setState({isLoaded:true,error:result.data.message});
        }else{
          this.setState({isLoaded:true,Reservations:result.data.data});
        }
      })
        .catch(error => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  
      }

    
render(){
    // Check Loading File
  if (this.state.isLoaded ==false){
    return (
<Loading />
    )
  }
  const { classes } = this.props;
console.log(this.state.Reservations);

 return (
<Container >
<Header />

  <Row  style={{marginTop:"20px"}}>


    </Row>




<Footer />

</Container>
  );
}
}
export default withStyles(useStyles)(Main);