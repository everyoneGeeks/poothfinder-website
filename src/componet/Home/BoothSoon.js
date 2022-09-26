import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Card } from "react-bootstrap";
import { withStyles } from '@material-ui/styles';
import  Col  from 'react-bootstrap/Col';
import axios from 'axios';
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";




class BoothSoon extends React.Component {


  constructor(props){
    super(props);

  }

render(){
  const { classes } = this.props;
  
  const boothName = {
      color: "black",
      fontWeight: "bold",
      textDecoration: "none"
  };
  
  const boothdiv = {  
    display: "block",
    height: "50px",
    fontSize:"initial"
  };
  
  const cardButton = {
    padding: "5px",
    fontSize: ".9rem"
  };
  
  const cardLeftButton = {
    padding: "5px",
    fontSize: ".9rem",
    marginRight: "10px"
  };



  if (this.props.booths !== undefined ){
    const booths=this.props.booths;

    const mainImage=this.props.booths.images.map((item)=>{return item.image})
return (

    <Col xs="12" sm="6"  lg="3"  style={{marginTop:"10px"}}  >  
<Card >
  <Card.Img variant="top" src={mainImage['0'] == undefined ? null : "https://00a384-poothfinder-graduate.magdsoft.com/"+mainImage['0']} />
  <Card.Body style={{ textAlign:'right'}} >
    <Card.Text style={boothdiv}  > 

      <Link style={boothName} to={{pathname: "/info/"+booths.id}}>  
      {booths.name_ar}
      </Link>

    </Card.Text>
    
    <Button style={cardButton} variant="outline-secondary">
    
        <Link to={{pathname: "/category/"+booths.category.id}}>  
      {booths.category.name_ar}</Link>
    </Button>

    <Button  variant="outline-secondary" style={cardLeftButton}> 
      <Link to={{pathname:"/type/"+booths.booth_type.id}}>  
        {booths.booth_type.name_ar}
      </Link>
    </Button>
  
  </Card.Body>
</Card>
</Col>

);
}else{
  return null;
}
}
}
export default BoothSoon;