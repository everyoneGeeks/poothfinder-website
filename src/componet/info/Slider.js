import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Carousel, Col, Nav, Navbar ,Modal,Button,ButtonToolbar,Form ,InputGroup,FormControl} from "react-bootstrap";
import Row  from 'react-bootstrap/Row';
import Cookies from 'js-cookie';
import Loading from "../layout/loading";
import { withRouter } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import axios from 'axios';
import  Alert  from 'react-bootstrap/Alert';
import { withStyles } from '@material-ui/styles';
import DatePicker from "react-datepicker";
import DateFnsUtils from '@date-io/date-fns';
import PaymentIcon from '@material-ui/icons/Payment';
import CheckIcon from '@material-ui/icons/Check';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const useStyles = makeStyles({
  square: {
    background:"#fff",
    border:"1px solid #999",
    float: "left",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "34px",
    marginRight: "-1px",
    marginTop: "-1px",
    padding: "0",
    textAlign: "center",
    width: "34px",
  },
  containerBooths:{
    width: "100%",
    borderColor: "#949292",
    borderWidth: "1px",
    height: "351px",
    borderStyle: "solid",
    marginTop: "11px",
    padding: "3px",
  }
});


class Slider extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      modalShow:false,
      showReservation:false,
      startDate: new Date(),
      endDate:new Date(),
      error: "",
      ShowAccepted:false,
      reservations:"",
      HideInfo:false,
      isLoading:false,
      paymentType:"",
      notRegister:false,
      CashMessage:false,
      OnlineMessage:false,
      color:this.props.fav == true  ? this.props.fav :"#f8f9fa"
    };

  }
  
  
   showCashMessage= (e) => {
    this.setState({
      paymentType: "cash",
      CashMessage:true,
      OnlineMessage:false,
    });
    
  };
  
showOnlienMessage= (e) => {
    this.setState({
        paymentType: "online",
      CashMessage:false,
      OnlineMessage:true,
    });
  };
  
 handleChangeStart= date => {
    this.setState({
      startDate: date
    });
  };
   handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };
  
reservations=(item)=>{

  this.setState({ modalShow: true, reservations: item })
}
HideInfo=(e)=>{
    this.setState({ HideInfo: true,showReservation:true })
}

HideShowModel=(e)=>{
    this.setState({ modalShow:false})
}

HideModelNotRegister=(e)=>{
    this.setState({notRegister:false })
}
HideModelShowAccept=(e)=>{
    this.setState({ShowAccepted:false })
    window.location.reload(); 
}
ShowInfo=(e)=>{
      this.setState({ HideInfo: false,showReservation:false })
}
 makeFavorite(e,data){
         const auth=JSON.parse(Cookies.get('auth'));
      const register = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/addRemoveFavorite",{
        boothId:data,
        apiToken:auth.api_token,
      })
    .then(result => {
      if(result.data.message){
      this.setState({
        error:result.data.message,
        isLoading:true,
        color:"#f8f9fa"
      });
      }else{
        this.setState({
        isLoading:true,
        color: "#3f51b5"
      });
      }
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
      });
    });
    }
    
    
    
    
     makeReservations(e,data){
       if(Cookies.get('auth') == null  ){
        this.setState({
        notRegister:true,

      });
      return null;
       }
         const auth=JSON.parse(Cookies.get('auth'));
         
      const register = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/reservation",{
        boothBoutiqueId:data,
        from:this.state.startDate,
        to:this.state.endDate,
        payment_type:this.state.paymentType,
        apiToken:auth.api_token,
      })
    .then(result => {
      if(result.data.status == 200){
      this.setState({
        ShowAccepted:true,
        modalShow:false,
         isLoading:true,
        
      });
      }else{
        this.setState({
        isLoading:true,
        color: "#3f51b5"
      });
      }
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
      });
    });
    }







render() {
  
  const ownerName = {
    display: "inline",
    fontSize: "larger",
    fontWeight: "bold",
    paddingRight: "10px"
  };
  
  const ownerBoothName = {
    marginTop: "15px",
    fontSize: "x-large"
  };
  
  const boothDetails = {
    fontSize: "large"
  };
  
  const boothDivDetails = {
    marginTop: "40px",
    textAlign:"right"
  };
  
  const boothDate = {
    marginRight: "48px",
    marginTop: "-10px",
    fontSize: "small"
  };
  
  const   containerBooths={
    width: "100%",
    borderColor: "#949292",
    borderWidth: "1px",
    height: "351px",
    borderStyle: "solid",
    marginTop: "11px",
    padding: "5px",
    overflow:"hidden"
  };

  const buttons={backgroundColor: "#d2dde8",width: "70px",height: "50px"};
if(!this.props.images ){
  return null
}
const that = this;
  return (
    <Container >
<Header />

  <Row  style={{marginTop:"88px"}}>

 {/* Start Error */}
  {this.state.error !== null ? '' : 
  (  <Col lg={12}>
  <Alert variant="danger" >
{this.state.error } !
  </Alert>
  </Col>)  }
 {/* End Error  */}

  

 <Col lg={6} >


<Carousel>

{this.props.images.images.map(items=>(
      <Carousel.Item key={items.id}>

      <img style={{ height: 318}}
        className="d-block w-100"
        src={process.env.PUBLIC_URL + "https://00a384-poothfinder-graduate.magdsoft.com/"+items.image}
      />

<Carousel.Caption>
<BottomNavigation
      value={0}
      onChange={(e)=>this.makeFavorite(e,this.props.images.id)}
      showLabels
      style={{backgroundColor:"#3f51b500"}}
    >
      
      <BottomNavigationAction   style={{color:this.state.color, marginRight: "470px", bottom: "213px"}} icon={<FavoriteIcon />} />
      
    </BottomNavigation>
    </Carousel.Caption>
   
    </Carousel.Item>
  ))} 

</Carousel>

</Col>


<Col lg={6} style={{textAlign:"right"}}>
  <div  style={{display:"inline"}}> 
    <img alt="User " src={process.env.PUBLIC_URL+"/asset/"+this.props.images.booth_owner.image } width="35px" />
  </div>
  <div style={{display:"inline"}}>
    <p style={ownerName}>
      {this.props.images.booth_owner.name }
    </p><br />
    <p style={boothDate}>
       تاريخ النشر  {this.props.images.starts_from}
    </p>
    
  </div>
  <h3 style={ownerBoothName}> <b>{this.props.images.name_ar} </b> </h3>
  <p style={{marginTop: "20px"}}>{this.props.images.description_ar}</p>
</Col>

</Row>



<Row>
<Col lg={6} >
  <div style={containerBooths} >
<Row>


{this.props.images && this.props.images.boothBoutiques.map(items=>(

( function (){
if(items.is_reservations == null){
    return  <Col lg={2} style={{padding:"0px"}} ><button onClick={() => that.reservations(items)}   style={buttons}> </button></Col>;

}else{
  return   <Col lg={2} style={{padding:"0px"}} ><button  style={{backgroundColor:"#ffc107",width: "70px",height: "50px"}}> </button></Col>;
}

})()

  ))}
  </Row>
  </div>
  

  
  
  
</Col>
<Col lg={6} style={boothDivDetails}>
<h3 style={boothDetails}><b style={{marginRight: "40px"}}>  تفاصيل المعرض  </b></h3>
<ul style={{listStyle: "none"}}>
<li style={{marginTop:"20px"}}> 
  <i class="fa fa-square" aria-hidden="true"></i>
  <b style={{marginLeft:"153px"}}> المساحة </b> &emsp;    {this.props.images.area}
</li>  

<li style={{marginTop:"20px"}}> <i class="fa fa-square" aria-hidden="true"></i>

<b style={{marginLeft:"120px"}}> عدد البوتيكات </b> &emsp;  {this.props.images.number_of_boutiques}</li>  


<li style={{marginTop:"20px"}}> <i class="fa fa-square" aria-hidden="true"></i>

<b style={{marginLeft:"166px"}}> الدولة </b> &emsp;  {this.props.images.country.name_ar}</li>  


<li style={{marginTop:"20px"}}> <i class="fa fa-square" aria-hidden="true"></i>

<b style={{marginLeft:"160px"}}> العنوان </b> &emsp;  {this.props.images.location.address}</li>  


<li style={{marginTop:"20px"}}> <i class="fa fa-square" aria-hidden="true"></i>

<b style={{marginLeft:"155px"}}> التصنيف </b> &emsp;  {this.props.images.category.name_ar}</li>  

<li style={{marginTop:"20px"}}> <i class="fa fa-square" aria-hidden="true"></i>

<b style={{marginLeft:"134px"}}> نوع المعرض </b> &emsp;  {this.props.images.booth_type.name_ar}</li>  

<li style={{marginTop:"20px"}}> <i class="fa fa-square" aria-hidden="true"></i>
  <b style={{marginLeft:"60px"}}>  المدة الزمنية  </b> &emsp;
   من :  
  {this.props.images.starts_from}  &nbsp;
   الي :  
  {this.props.images.ends_at}   
</li>  
</ul>
</Col>
</Row>

  {this.state.modalShow &&
          <Modal
       show="true"
      size="lg"
       dialogClassName="modal-180w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
{this.state.reservations.name_ar}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <Row>
     <Col lg={6}>
     <Carousel>

{this.state.reservations.images.map(items=>(
      <Carousel.Item key={items.id}>

      <img style={{ height: 318}}
        className="d-block w-100"
        src={process.env.PUBLIC_URL + "https://00a384-poothfinder-graduate.magdsoft.com/"+items.image}
      />

<Carousel.Caption>
    </Carousel.Caption>
   
    </Carousel.Item>
  ))} 

</Carousel>

     </Col>
     {this.state.HideInfo == false&&
    <Col lg={6} style={{padding:"0px",direction:"rtl"}}>
    <h4  style={{float:"right"}}>  ريال /الشهر  {this.state.reservations.price}</h4> 
    <h3  style={{fontSize: "large",float: "right",marginLeft: "25px",marginBottom:"60px"}} >{this.state.reservations.description_ar}  </h3>
    
    
    
    
    <table >

    <tbody>
        <tr>
            <td style={{fontSize: "21px"}}>البوتيك</td>
            <td style={{width: "204px",textAlign:"center"}}>{this.state.reservations.name_ar}</td>
        </tr>
        <tr>
            <td style={{fontSize: "21px"}}>االمساحة</td>
            <td style={{width: "204px",textAlign:"center"}}> {this.state.reservations.area}</td>
        </tr>
        
                <tr>
            <td style={{fontSize: "21px"}}>النوع</td>
            <td style={{width: "204px",textAlign:"center"}}> {this.state.reservations.boutiquesTypes.name_ar}</td>
        </tr>
    </tbody>
</table>
    
     <Col lg={12} style={{textAlign:"center",marginTop:'20px'}}>

    <Button variant="primary" size="sm" style={{width: "263px",}}  onClick={(e) => that.HideInfo(e)} >
   حجز البوتيك
    </Button>

  </Col>
     </Col>
     }
     {this.state.showReservation   &&
     <Col lg={6}>
      <h4 style={{width:"78%"}} >  {this.state.reservations.name_ar} حجز بوتيك</h4>
            <h5 style={{float: "right",fontWeight: "bold"}}> فترة الحجز </h5>
     
         <table style={{marginTop:"50px"}}>

    <tbody>
        <tr>
            <td style={{fontWeight:"bold"}}> من يوم </td>
            <td><MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={this.state.startDate}
          onChange={this.handleChangeStart}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> </MuiPickersUtilsProvider></td>
        </tr>
        <tr>
            <td style={{fontWeight:"bold"}}>الي يوم </td>
            <td>   
           <MuiPickersUtilsProvider utils={DateFnsUtils}> 
         <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={this.state.endDate}
          onChange={this.handleChangeEnd}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider></td>
        </tr>
        
                <tr>

        </tr>
    </tbody>
</table>
     
  <h5 style={{float: "right",fontWeight: "bold"}}> طريقة الدفع  </h5>
<br/>
  <fieldset style={{marginTop:"20px",textAlign:"right"}}> 
    <Form.Group as={Row}>

      <Col sm={10}>
        <Form.Check
        onChange={(e) =>this.showCashMessage(e)}
          type="radio"
          label="كاش  "
          inline
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />

      </Col>
    </Form.Group>
  </fieldset>
  
    <fieldset style={{marginTop:"20x",textAlign:"right"}}>
        <Form.Group as={Row}>

      <Col sm={10}>
    <Form.Check
          type="radio"
         onClick={(e) =>this.showOnlienMessage(e)}
          label="دفع online "
          inline
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>

{this.state.CashMessage  && 
  <Alert variant={"secondary"}>
  في حالة الدفع النقدي يتم حجز المساحة لمدة زمنية محددة حتي يتم  تاكيد الحجز وان لم يتم التاكيد يلغي 
  </Alert>
}
  {this.state.OnlineMessage  && 
  <Col lg={12} style={{marginBottom:"50px"}}>
  <div>
   <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><PaymentIcon/></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="crad Number"
      aria-label="crad Number"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
   

<Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>

   </div>
   </Col>
  
}
<Col lg={4} style={{display:"inline",}}>
       <Button variant="primary" size="sm" style={{width:"40%"}}  onClick={(e) => that.makeReservations(e,this.state.reservations.id)}  >
    حجز البوتيك 
    </Button>
</Col>
    
<Col lg={4} style={{display:"inline"}}>    
        <Button variant="primary" size="sm"  style={{width:"40%",backgroundColor: "#ffffff",
    color: "#007bff"}}  onClick={(e) => that.ShowInfo(e)} >
      عودة للتفاصيل  
    </Button>
</Col>

     </Col>
}




     </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e) => that.HideShowModel(e)}  >اغلاق</Button>
      </Modal.Footer>
    </Modal>
}


{this.state.notRegister &&
      <Modal show={this.state.notRegister} style={{top:250}}>

        <Modal.Body  style={{textAlign:"center"}}>
        <h5>عفوا يجب عليك التسجيل في الموقع اولا  </h5> 
        <br/>
        <Button variant="secondary" style={{width: "100px",backgroundColor: "#ffffff",
    color: "#007bff"}} onClick={(e)=>this.HideModelNotRegister(e)}   >
            تجاهل 
          </Button>
          <Button variant="primary" style={{width: "100px",marginRight: "59px" }} href={"https://00a384-poothfinder-graduate-website-dev.magdsoft.com/register"}>
            تسجيل   
          </Button>
        </Modal.Body>
    
      </Modal>
}

{this.state.ShowAccepted &&
      <Modal show={this.state.ShowAccepted} style={{top:250}}>

        <Modal.Body  style={{textAlign:"center"}}>
        <h5> <CheckIcon/>تم الحجز اليوتيك    </h5> 
        <br/>
        <Button variant="secondary" style={{width: "100px",backgroundColor: "#ffffff",
    color: "#007bff"}} onClick={(e)=>this.HideModelShowAccept(e)}   >
            تجاهل 
          </Button>
        </Modal.Body>
    
      </Modal>
}



<Footer></Footer>

</Container>
  )

  }
}export default withRouter(withStyles(useStyles)(Slider));