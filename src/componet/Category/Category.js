import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Booths from "../Home/BoothSoon";
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { withStyles } from '@material-ui/styles';
import  Alert  from 'react-bootstrap/Alert';
import Loading from "../layout/loading";
import { withRouter } from "react-router-dom";

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

 class Category extends React.Component {
   


  constructor(props){
    super(props);

  }


  state={
    Booths:[],
    isLoaded: false,
    error:"",
    message:"",
    }
    componentDidMount(){
        const { match: { params } } = this.props;
      const Booths = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/categoryBooths",{
        categoryId:params.id,
      }).then(result => {
        if(result.data.message){
          this.setState({
            isLoaded:false,
            error:result.data.message
          });
          }
          else{
          this.setState({
            Booths:result.data,

          });
        }
      })
        .catch(error => {
          this.setState({
            isLoaded: false,
            error
          });
        });
  
      }

    
render(){
  const { classes } = this.props;
  const item=[];
  let x= this.state.Booths.data;
  let name="";
  for(const key in x){
name=x[key].category.name_ar;
    item.push( <Booths key={key} booths={x[key]} />)
  }
    // Check Loading File
    if (this.state.isLoaded ==true){
      return (
  <Loading />
      )
    }else{

    

 return (
<Container style={{height:"592px"}}>
<Header  />

 {/* Start Error */}
  {this.state.error &&(  <Col lg={12}>
  <Alert variant="danger" >
{this.state.error} !
  </Alert>
  </Col>)  }
 {/* End Error  */}


  <Row  style={{marginTop:"20px"}}>
  <Col xs="12"  lg="12" style={{marginTop:"10px"}}>
        <h3  style={{float:"right"}} > {name} </h3>
        </Col>

{/* Booth  */}

  {this.state.Booths   ? item
  : 

  (<Col lg={12}>
    <h3  style={{textAlign:"center"}} > لا يوجد معارض لهذا القسم </h3>
       </Col>)
  
  
  }






    </Row>
<Footer />

</Container>
  );
}
}
 }
export default withRouter(withStyles(useStyles)(Category));