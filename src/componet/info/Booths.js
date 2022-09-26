import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Card } from "react-bootstrap";
import { withStyles } from '@material-ui/styles';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import axios from 'axios';
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
    const booths=this.props.booths;

   
return (
<>

</>
)
}else{
  return null;
}
}
}
export default withStyles(useStyles)(Booths);