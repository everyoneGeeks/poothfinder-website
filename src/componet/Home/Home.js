import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import Slider from "./Slider";
import BoothSoon from "./BoothSoon";
import Booths from "./Booths";
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { withStyles } from '@material-ui/styles';
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import Loading from "../layout/loading";
import Button from '@material-ui/core/Button';
import { Form } from 'react-bootstrap';

// Css
const useStyles = makeStyles(theme => ({
  iconFilled: {
    right: "88%",
  },
  root: {
    flexGrow: 1,
    padding:"20px",
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
  },

  iconFilled: {
    right: "88%",
  },
  button: {
    margin: theme.spacing(1),
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
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input:{
    right:22,
    top:0
  }

}));

 class Home extends React.Component {
   


  constructor(props){
  super(props);

  this.state={
    booths:{},
    boothSoons:{},
    isLoaded: false,
    SearchData:{},
    isSearch:false,
    images:["ee14b84464892a37a6938ec93a479c6d","f898d6a4a1ef44927484e78ac1847dbf","687943b8e4aefc6ffd0d4911f825e09a"],
    countries:[],
    categories:[],
    types:[],
    error:"",
    keyword:"",
    categoryId:"",
    countryId:"",
    boothTypeId:"",
    }
    this.HandelSubmitSearch = this.HandelSubmitSearch.bind(this);

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


    const categories =  axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/activeCategories")
    .then(result => {
      this.setState({
        categories: Object.values(result["data"])
      });
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error
      });
    });

    const types =  axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/activeBoothsTypes")
    .then(result => {
      this.setState({
        types: Object.values(result["data"])
      });
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
    const soonBooths =  axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/soonBooths")
    .then(
      (result)=>{

        if(result.data.status){
          this.setState({
            isLoaded: false,
            error:"لايوجد معارض قريبة  ",
            boothSoons:null,
          });
        }else{
        this.setState({
          boothSoons:result.data,

        })
      }
    }
    )
    .catch(error => {
      this.setState({
        isLoaded: false,
        error:"error "
      });
    });

    const booths =  axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/activeBooths")
      .then(
        (result)=>{
          this.setState({
            booths:result.data,
            isLoaded:true,
          })
        }
      )
      .catch(error => {
        this.setState({
          isLoaded: false,
          error:"error "
        });
      });







     }
     
     
  handleChange = (event) => {
      let value=event.target.value;
      let  name= event.target.name;


      axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/search",{[event.target.name]:event.target.value,language:'ar'})

      .then(result=>result)
      .then(result=>{

      if(result.data.status ){
        this.setState({
          isLoaded: true,
        });
      }
      
      if(result.data.message ){
        this.setState({
          isLoaded: true,
        });
      }
      
       this.setState({
        isLoaded: true,
        SearchData:result.data.data,
        isSearch:true,
        [name]:value
      });
      
      
        }
      )
      .catch(error => {
        this.setState({
          isLoaded: true,
        });
      });
    
    };
    
  HandelSubmitSearch=(event)=>{

    


      axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/search",{
        keyword:this.state.keyword,
        countryId:this.state.countryId,
        categoryId:this.state.categoryId,
        boothTypeId:this.state.boothTypeId,
        language:'ar'
      })
      .then(result=>{
        
        if(result.data.status){
        this.setState({
        isLoaded: true,

      });
        }

       this.setState({
        isLoaded: true,
        SearchData:result.data.data,
        isSearch:true,
      });

    }
      )
      .catch(error => {
        console.log(error)

      });
     
    }

    
render(){

const { classes } = this.props;
// Check Loading File
if (this.state.isLoaded ==false){
  return (
<Loading />
  )
}else{

return (
<Container>
<Row>
<Header  />

</Row>

<Row className="justify-content-md-center" style={{marginTop:"80px"}}>
<Col xs="12" lg="4">
    <Card className={classes.card}>
    <CardContent >
    <form className={classes.container} noValidate autoComplete="off">



<Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>بحث</Form.Label>

  <Form.Control as="input" placeholder="بحث"   onChange={this.handleChange.bind(this)}     name="keyword"   />

</Form.Group>

<Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Control
   as="select"
  name="countryId"
  onChange={this.handleChange}>
    <option> الدولة</option>
    {this.state.countries.map((items,index) =>(
               items.map(couuntry=>(
                <option value={couuntry.id}>  {couuntry.name_ar}</option>
              ))
              ) )}
  </Form.Control>
</Form.Group>

<Form.Group controlId="exampleForm.ControlSelect2">
  <Form.Control
   as="select"
  name="categoryId"
  onChange={this.handleChange}>
    <option> التصنيف</option>
    {this.state.categories.map((items,index) =>(
               items.map(category=>(
                <option value={category.id}>  {category.name_ar}</option>
              ))
              ) )}
  </Form.Control>
</Form.Group>

<Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Control
   as="select"
  name="boothTypeId"
  onChange={this.handleChange}>
    <option> المعرض</option>
    {this.state.types.map((items,index) =>(
               items.map(type=>(
                <option value={type.id}>  {type.name_ar}</option>
              ))
              ) )}
  </Form.Control>
</Form.Group>

          <Button
              variant="contained"
              color="primary"
              className={classes.button}
              fullWidth="true" 
              onClick={(e)=>this.HandelSubmitSearch(e)}
               >
                بحث
    </Button>
    </form>
    </CardContent>
  </Card>
  </Col>

    <Col xs="12" lg="8">
        <Slider images={this.state.images}/>
        </Col>
        </Row>



        <Row className="justify-content-md-center" style={{marginTop:"20px"}}>
       <Col xs="12" sm="6" lg="6" style={{marginTop:"10px"}}>

        </Col>

    <Col xs="12"  sm="6" lg="6" style={{marginTop:"10px"}}>

        </Col>
        
        </Row>

<Row className="justify-content-md-center" style={{marginTop:"20px"}}>
       <Col xs="12" sm="6" lg="6" style={{marginTop:"10px"}}>
        <Slider />
        </Col>

    <Col xs="12" sm="6" lg="6" style={{marginTop:"10px"}}>
        <Slider />
        </Col>

        <Col xs="12" sm="6"  lg="6" style={{marginTop:"10px"}}>
        <Slider />
        </Col>

    <Col xs="12"  sm="6" lg="6" style={{marginTop:"10px"}}>
        <Slider />
        </Col>
        </Row>


{this.state.isSearch  ? 
  
(
<div>
<Row  bsPrefix='row ' className="justify-content-md-center" style={{marginTop:"20px"}}>


{this.state.SearchData == null ?
  <Col xs="12"  lg="12" style={{marginTop:"10px"}}>
  <h3  style={{float:"right"}} >  لايوجد معارض  </h3>
  </Col>
   : 
  this.state.SearchData.map((items,index)=>{

return <BoothSoon key={items.id} booths={items} />
})}
  
</Row>
</div>
)
:

(
<div>

<Row  style={{marginTop:"20px"}}>

    <Col xs="12"  lg="12" style={{marginTop:"10px"}}>
    <h3  style={{float:"right"}} >  معارض ستبداء قريبا </h3>
    </Col>

      {this.state.boothSoons == null ?
      <Col xs="12"  lg="12" style={{marginTop:"10px"}}>
      <h3 style={{textAlign:"center"}}>  لايوجد معارض  </h3>
      </Col>
       : this.state.boothSoons.data && this.state.boothSoons.data.map((items,index)=>{
      return <BoothSoon key={items.id} booths={items} />
      })}




</Row>

<Row  bsPrefix='row ' className="justify-content-md-center" style={{marginTop:"20px"}}>

<Col xs="12" lg="12" style={{marginTop:"10px"}}>

<h3  style={{float:"right"}} >     معارض خاصة بالاثاث </h3>
</Col>

{this.state.booths.data   &&   this.state.booths.data.map((items,index)=>{

return <Booths key={items.id} booths={items} category={3} />

})}


</Row> 


<Row  bsPrefix='row ' className="justify-content-md-center" style={{marginTop:"20px"}}>

<Col xs="12" lg="12" style={{marginTop:"10px"}}>

<h3  style={{float:"right"}} >     معارض خاصة الملابس  </h3>
</Col>

{this.state.booths.data   &&  this.state.booths.data.map((items,index)=>{


return <Booths key={items.id} booths={items} category={2}  />


})}


</Row> 

<Row  bsPrefix='row ' className="justify-content-md-center" style={{marginTop:"20px"}}>

<Col xs="12" lg="12" style={{marginTop:"10px"}}>

<h3  style={{float:"right"}} >     معارض خاصة بالالكترونات </h3>
</Col>

{this.state.booths.data   && this.state.booths.data.map((items,index)=>{

return <Booths key={items.id} booths={items}  category={1}  />
})}

</Row>
</div> )


} 


<Footer />

</Container>
);
}
}
 
 
 }
export default withRouter(withStyles(useStyles)(Home));









