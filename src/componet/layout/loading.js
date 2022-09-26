import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  
}));


export default function Loading() {
  const classes = useStyles();
  return (
    <>
    <Container>
    <Row className="justify-content-md-center"  
    style={{
      textAlign:'center',
      position:"relative",
      top:"200px"}}>
    <Col lg={12} >
    <CircularProgress color="secondary" />
    </Col>
    </Row>
    </Container>
    </>
  );

}