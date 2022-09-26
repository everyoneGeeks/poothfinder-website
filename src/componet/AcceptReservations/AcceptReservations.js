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
import Modal from 'react-bootstrap/Modal'
// Css
import DoneIcon from '@material-ui/icons/Done';
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


  
 class AcceptReservations extends React.Component {
   
  state={
    Reservations:[],
    isLoaded: false,
    error:"",
    message:"",
    setShow:false,
    show:false,
    name:null,
    id:null
    
  }
  

  constructor(props){
    super(props);

  }

handleShow(id,name){
  console.log(name);
 
       this.setState({ show:true,name:name,id:id}) 
}

handleClose=(e)=>{
       this.setState({ show:false,name:null,id:null}) 
}

  componentDidMount() {
this.handleAccept();
  }


handleAccept(id){
       this.setState({ show:false,name:null,id:null}) 
        var  auth=JSON.parse(Cookies.get('auth'));   

      var  booths = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/confirmCashReservation",{

        apiToken:auth.api_token,
        reservationId:id,
        payment_status:"accepted",
      }).then(result => {
        if(result.data.status !== 200){
        this.setState({isLoaded:true,error:result.data.message});
        }else{
          this.setState({isLoaded:true});
          window.location.reload();
        }
      })
        .catch(error => {
          this.setState({
            isLoaded: true,
            error
          });
        });
       

}
  async  componentDidMount(){
  
    const auth=JSON.parse(Cookies.get('auth'));   

    

      const booths =await axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/cashReservationsList",{

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
        <h3  style={{float:"right"}} >  تاكيد الحجز النقدي</h3>
        </Col>



<Col lg={12} style={{"marginTop":"50px","textAlign": "right"}}>

<Accordion >



{this.state.Reservations   &&   this.state.Reservations.map((items,index)=>{

return(<Col lg={12}>
  <Card>

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
      <th> تاكيد  </th>
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
      <td>{ item.reservation.reservation_status == 'waiting' ? (<Button variant="primary" onClick={this.handleShow.bind(this,item.reservation.id,item.reservation.user.name)} >تاكيد</Button>): (item.reservation.reservation_status !=='cancelled' ? (<DoneIcon style={{color:'#28a745'}}/>) :('no')) }</td>

{this.state.show !== true ? '' : (     <Modal style={{top:'100px'}} show={true} onHide={this.handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>تاكيد دفع   {this.state.name} </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.handleClose}  >
            الغاء
          </Button>
          <Button variant="primary" onClick={this.handleAccept.bind(this,this.state.id)} style={{marginRight:'50px'}}>
            تاكيد 
          </Button>
        </Modal.Footer>
      </Modal>) }
      
    </tr>
    );
  }
  })}


  </tbody>
</Table>
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
export default withStyles(useStyles)(AcceptReservations);