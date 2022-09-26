import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Card } from "react-bootstrap";
import { withStyles } from '@material-ui/styles';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { Carousel } from "react-bootstrap";
import {BrowserRouter as Router,Switch, Route,Redirect,Link} from "react-router-dom";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});


class Booths extends React.Component {

Link(e){
  
}
render(){

  const { classes } = this.props;
  const item =this.props.data;
  console.log(item.boothBoutique.images);
  return (
<Card  style={{marginBottom:"20px"}}>
<Row>
<Col lg={4}>
<Carousel style={{padding:"10px"}}>
{this.props.data && this.props.data.boothBoutique.images.map(items=>(
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
<Col lg={4}>
 <h3 style={{float:"right",marginTop:20}}>{this.props.data.boothBoutique.name_ar}</h3>
    <table style={{width: "302px",
    marginTop: "79px"}}>

    <tbody>
      
    </tbody>
</table>
</Col>


<Col lg={4}  style={{position:'relative',top:300,right: -18}}>    

        <Button variant="primary" size="sm" href={"https://00a384-poothfinder-graduate-website-dev.magdsoft.com/info/"+this.props.data.boothBoutique.booth_id}  style={{width:"40%",backgroundColor: "#ffffff",
    color: "#007bff"}}  >
  عودة للتفاصيل  
    </Button>
  
</Col>
</Row>
</Card>
  );
}
}
export default withStyles(useStyles)(Booths);