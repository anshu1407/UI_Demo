import {
  MenuItem,
  TextField,
  Grid,
  Typography,
  makeStyles,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Switch,
  FormGroup,
  Checkbox,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

function Form() {
  const classes = useStyles();
  const [values, setValues] = useState({
    fullName: "",
    lastName: "",
    dateTime: new Date(),
    gender: "male",
    city: "",
    language: false,
    isRemember: false,
  });

  const handleInputChange = (event) => {
    // const [ name , value ] = event.target
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleCheckboxChange = (event) => {
    // const [ name , value ] = event.target
    setValues({
      ...values,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSubmit=()=>{
    console.log(values);
  }
  // useEffect(() => {
  //   setValues([]);
  // },[])
  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="outlined"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            autoComplete="off"
          ></TextField>
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
            autoComplete="off"
          ></TextField>
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            name="dateTime"
            value={values.dateTime}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={values.language}
                  onChange={handleCheckboxChange}
                  name="language"
                />
              }
              label="English"
            />
          </FormGroup>
          <FormControl>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isRemember}
                  onChange={handleCheckboxChange}
                  name="isRemember"
                />
              }
              label="Remember Me"
            />
          </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} container justify="center" alignContent="center"> 
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
