import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Slider from "./Slider";
import Cookies from 'js-cookie';
import Loading from "../layout/loading";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import  Alert  from 'react-bootstrap/Alert';
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

 class Info extends React.Component {
   
  state={
    booths:[],
    isLoaded: false,
    error:"",
    }

  constructor(props){
    super(props);

  }

  async  componentDidMount(){
    const { match: { params } } = this.props;
        if(Cookies.get('auth')){
    const auth=JSON.parse(Cookies.get('auth'));   
    let apiToken=auth.api_token;
        }else{
    const auth=null;
    let apiToken=null;
        }
    

      const booths =await axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/showBooth",{
        boothId:params.id,
        // apiToken:apiToken,
      }).then(result => {
        if(result.data.message){
        this.setState({isLoaded:true,error:result.data.message});
        }else{
          this.setState({isLoaded:true,booths:result.data});
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
    const data=this.state.booths.data;
 return (
<div>


 <Slider images={data}  fav={this.state.booths.isFavorite}/>
</div>

  
  );
}
}
export default withRouter(withStyles(useStyles)(Info));