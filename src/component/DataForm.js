import { Button, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState,useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

function DataForm(props) {
  const classes = useStyles();
//   const initialValues =(props.click?({
//     firstName:props.select.firstName,
//     lastName:props.select.lastName,
//     email:props.select.email
// }):({
//   firstName:"",
//   lastName:"",
//   email:""
// }))
const clicked=  props.click;
const selected= props.select;
console.log(selected);
console.log(clicked);
  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:""
  })
const handleInputChange=(event)=>{
    setValues({
        ...values,[event.target.name]:event.target.value
    })
}
const firstName=values.firstName;
const lastName= values.lastName;
const email=values.email;

const handleSubmit=()=>{
  if(props.click){
     axios.put(`http://localhost:3000/data/${selected.id}`,{
      firstName:firstName,
      lastName:lastName,
      email:email
  }).then((response)=>{
    console.log(response.data);
    props.data();
  })
  }else{
    console.log(values);
    axios.post("http://localhost:3000/data",{
        firstName:firstName,
        lastName:lastName,
        email:email
    }).
    then((response)=>{
        console.log(response.data);
        props.data();

    })
  }
    
  
   
}
useEffect(() => {
setValues(
  (props.click?({
        firstName:props.select.firstName,
        lastName:props.select.lastName,
        email:props.select.email
  }):{
      firstName:"",
      lastName:"",
      email:""
    })
)}, [clicked])

  return (
    <div>
      <form className={classes.root}>
        <div>
          <TextField
            label="First Name"
            variant="outlined"
            autoComplete="off"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            label="Last Name"
            variant="outlined"
            autoComplete="off"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            label="Email"
            variant="outlined"
            autoComplete="off"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          ></TextField>
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {/* <Button
          color="primary"
          variant="contained"
          onClick={props.getData}
        >
          ShowList
        </Button> */}
      </form>
    </div>
  );
}

export default DataForm;
