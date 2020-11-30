import { Button, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Data from "./Data";

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
  const clicked = props.click;
  const selected = props.update;
  // console.log(selected);
  // console.log(clicked);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const firstName = values.firstName;
  const lastName = values.lastName;
  const email = values.email;
  // const [sendData,setSendData]= useState(false);
  const handleSubmit = () => {
    if (props.click) {
      axios
        .put(`http://localhost:3000/data/${selected.id}`, {
          firstName: firstName,
          lastName: lastName,
          email: email,
        })
        .then((response) => {
          console.log(response.data);
          props.updateCallBack();
          
        });
    } else {
      console.log(values);
      axios
        .post("http://localhost:3000/data", {
          firstName: firstName,
          lastName: lastName,
          email: email,
        })
        .then((response) => {
          console.log(response.data);
          // props.data();
          props.parentCallback();
          setValues({
            firstName: "",
            lastName: "",
            email: "",
          })
        });
    }
  };

  useEffect(() => {
    setValues(
      props.click
        ? {
            firstName: props.update.firstName,
            lastName: props.update.lastName,
            email: props.update.email,
          }
        : {
            firstName: "",
            lastName: "",
            email: "",
          }
    );
  },[clicked,props.update.id]);


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
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
      
    </div>
  );
}

export default DataForm;
