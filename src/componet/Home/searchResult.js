import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Card } from "react-bootstrap";
import { withStyles } from '@material-ui/styles';
import  Col  from 'react-bootstrap/Col';
import axios from 'axios';
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});



class searchResult extends React.Component {


  constructor(props){
    super(props);

  }




  
render(){
  const { classes } = this.props;


  if (this.props.result !== undefined ){
    const booths=this.props.result;

    const mainImage=this.props.result.images.map((item)=>{return item.image})
return (

    <Col xs="12" sm="6"  lg="3"  style={{marginTop:"10px"}}  >  
<Card >
  <Card.Img variant="top" src={mainImage['0'] == undefined ? null : "/asset/"+mainImage['0']} />
  <Card.Body style={{ textAlign:'right'}} >
    <Card.Text style={{ fontSize:'x-large'}}  >
    <Link to={"/info/"+booths.id}>
      {booths.name_ar}
    </Link>
    </Card.Text>
    <Button variant="outline-secondary">{booths.category.name_ar}</Button>
    <Button variant="outline-secondary">{booths.booth_type.name_ar}</Button>
  </Card.Body>
</Card>
</Col>

);
}else{
  return null;
}
}
}
export default withStyles(useStyles)(searchResult);