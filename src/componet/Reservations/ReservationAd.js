import React from 'react';
import Header from '../AdHeader';
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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from 'react-bootstrap/Table'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// Css
import Accordion from 'react-bootstrap/Accordion'

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

 class ReservationAd extends React.Component {
   
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
  
    const auth=JSON.parse(Cookies.get('auth'));   

    

      const booths =await axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/reservationsList",{

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
<Container style={{height:"500px"}} >
<Header />

  <Row  style={{marginTop:"20px"}}>
  <Col xs="12"  lg="12" style={{marginTop:"10px"}}>
        <h3  style={{float:"right"}} > قائمة الحجوزات</h3>
        </Col>



<Col lg={12} style={{"marginTop":"50px","textAlign": "right"}}>

<Accordion >



{this.state.Reservations   &&   this.state.Reservations.map((items,index)=>{

return(<Col lg={12}>
  <Card>
    <Card.Header >
    <span>{items[index].name_ar}</span>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{'textAlign':'end'}}>
<ArrowBackIosIcon s/>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
 <Table responsive>
  <thead>
    <tr>
      <th>اسم الحاجز</th>
      <th>التاريخ </th>
      <th>اسم البوتيك  </th>
      <th>المساحة  </th>
      <th>النوع </th>
      <th>المدة  </th>
      <th>السعر  </th>
      <th>طريقة الدفع  </th>
    </tr>
  </thead>
  <tbody>
  {items[index].reservationsBoutiques.map((item,index)=>{
  if(item.reservation !==null){
    return(    <tr>
      <td>{item.reservation.user.name}</td>
      <td>{item.created_at} </td>
      <td>{item.reservation.boothBoutique.name_ar} </td>
      <td>{item.reservation.boothBoutique.area} </td>
      <td>{item.reservation.boothBoutique.boutiquesTypes.name_ar}</td>
      <td> من {item.reservation.starts_from}  الي   {item.reservation.ends_at}</td>
      <td>{item.reservation.price} </td>
     <td>{item.reservation.payment_type}</td>

    </tr>
    );
  }
  })}


  </tbody>
</Table>
    </Accordion.Collapse>
  </Card>
  </Col>
  
  

  )
})}





  

</Accordion>
</Col>

    </Row>




<Footer />

</Container>
  );
}
}
export default withStyles(useStyles)(ReservationAd);