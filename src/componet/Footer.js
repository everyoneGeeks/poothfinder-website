import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Header
import Typography from '@material-ui/core/Typography';
import { Col,Row } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({

  footer: {
    height: "130px",
    color: "#fff",
    padding: "48px",
    backgroundColor: "#1F2538",
    position: "absolute",
    width: "100%",
    left: "0",
    padding: "10px",
    bottom:"-200px"
      },
      avatar:{
        
      }
  }));
  
  const footerpages = {
    textAlign:"right",
    marginRight: "306px",
    width: "inherit"
  };
  
  const socialList = {
    paddingLeft: "14px",
    listStyle: "none",
    display: "inline-flex"
  };
  
  const pagesLink = {
    textDecoration: "none",
    color: "aliceblue",
    fontSize: "x-small"
  };
  
  
  export default function Footer() {
    const classes = useStyles();
    return (
      <footer className={classes.footer} style={{marginTop:"40px"}}>
        <Row className="justify-content-md-center" style={{marginTop:"20px"}}  >
          <Col lg={4}>
            <div style={footerpages}>
              <p style={{marginRight: "50px"}}>تصفح </p>
              <ul style={socialList}>
                  <li style={{padding: "10px"}}>
                    <a target="_blank" style={pagesLink} href="#">
                      من نحن
                    </a>
                  </li>
                  <li style={{padding: "10px"}}>
                    <a target="_blank" style={pagesLink} href="#">
                      اتصل بنا
                    </a>
                  </li>
                  <li style={{padding: "10px"}}>
                    <a target="_blank" style={pagesLink} href="#">
                      اشترك
                    </a>
                  </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div style={{textAlign:"center"}}>
              <p style={{marginLeft: "33px"}}>
              تابعنا علي 
              </p>
              <ul style={socialList}>
                  <li style={{padding: "10px"}}>
                    <a target="_blank"  style={pagesLink} href="#">
                      F
                    </a>
                  </li>
                  <li style={{padding: "10px"}}>
                    <a target="_blank"  style={pagesLink} href="#">
                      T
                    </a>
                  </li>
                  <li style={{padding: "10px"}}>
                    <a target="_blank"  style={pagesLink} href="#">
                      LN
                    </a>
                  </li>
                  <li style={{padding: "10px"}}>
                    <a target="_blank"  style={pagesLink} href="#">
                      Y
                    </a>
                  </li>
                  <li style={{padding: "10px"}}>
                    <a target="_blank"  style={pagesLink} href="#">
                      In
                    </a>
                  </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>   <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL+"/logo.png"} className={classes.avatar} /> </Col>
    
        </Row>
        <Row className="justify-content-md-center" style={{marginTop:"-3px"}} >
        <Col lg={12}>            
          <Typography variant="h6"  align="center" style={{fontSize: "xx-small",
            marginTop: "-13px"
          }} >
            Copyright @ 2019 Booth Finder All right resered 
          </Typography> 
        </Col>
        </Row>
      </footer>
    );
  
  }