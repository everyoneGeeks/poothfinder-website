import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Card } from "react-bootstrap";
import { withStyles } from '@material-ui/styles';
import  Col  from 'react-bootstrap/Col';
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});



class Booths extends React.Component {


  constructor(props){
    super(props);

  }

render(){
  const { classes } = this.props;


  if (this.props.booths !== undefined ){
    const booths=this.props.booths.booth;
    const mainImage=this.props.booths.booth.images.map((item)=>{return item.image})

return (

    <Col xs="12" sm="6"  lg="3"  style={{marginTop:"10px"}}  >  
<Card >
  <Card.Img variant="top" src={mainImage['0'] == undefined ? null :"https://00a384-poothfinder-graduate.magdsoft.com/"+mainImage['0']} />
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
export default withStyles(useStyles)(Booths);