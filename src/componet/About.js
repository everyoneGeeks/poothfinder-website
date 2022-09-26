import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
}));


export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <React.Fragment>
<Header />
About
<Footer />
    </React.Fragment>
    </div>
  );

}