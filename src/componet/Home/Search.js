import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';

import { Form } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
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


class Search extends React.Component {

  constructor(props){
    super(props);
  }

  state={
    countries:[],
    categories:[],
    types:[],
    error:"",
    keyword:"",
    categoryId:"",
    countryId:"",
    boothTypeId:"",
    isLoaded: false,
    error:"",
    search:{},
    isSearch:false,

    }

  componentDidMount(){
      const countries = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/activeCountries")
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


        const categories = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/activeCategories")
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
  
        const types = axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/activeBoothsTypes")
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
  }

    
 
    handleChange= name => event => {

      this.setState({
        ...this.state,
        [name]: event.target.value,
      });
      this.search({
        [name]: event.target.value,
      });
    };
  
    search(search){

      axios.post("https://00a384-poothfinder-graduate.magdsoft.com/api/search",search)
         .then(
           (result)=>{
             
             if(result.data.status == 204){
               this.setState({
                 isLoaded: false,
                   isSearch:true,
                 error:"error "
               });
             }
             this.setState({
                 search:result.data,
                 isSearch:true,
                 isLoaded: true,
             });
              if(this.props.search()){
              
                this.props.search(result.data);
              }

           }
         )
         .catch(error => {
           this.setState({
             isLoaded: false,
             error:"error "
           });
         });
       }
       
render(){
  const { classes } = this.props;
  return (
      <form className={classes.container} noValidate autoComplete="off">


<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>بحث</Form.Label>
    <Form.Control type="text" placeholder="بحث" onChange={this.handleChange('keyword')}  />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control
     as="select"
    name="countryId"
    onChange={this.handleChange('countryId')}>
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
    onChange={this.handleChange('categoryId')}>
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
    onChange={this.handleChange('boothTypeId')}>
      <option> المعرض</option>
      {this.state.types.map((items,index) =>(
                 items.map(type=>(
                  <option value={type.id}>  {type.name_ar}</option>
                ))
                ) )}
    </Form.Control>
  </Form.Group>
</Form>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                fullWidth="true" 
                 >
                  بحث
      </Button>
      </form>

  );
  }
}
export default withStyles(useStyles)(Search);
