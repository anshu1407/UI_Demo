import { makeStyles, Paper } from "@material-ui/core";
import "./App.css";
import DataForm from "./component/DataForm";
import React, { useState } from "react";
import Data from "./component/Data";
import Parent from "./component/Parent";
import Home from "./component/Home";

const useStyles = makeStyles((theme) => ({
  paperContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function App() {
  // const[update, setUpdate]=useState('');
  // const [click, setClick] = useState(false);
  // const [get, setGet]=useState('');
  // const classes = useStyles();

  return (
    <div>
      {/* <Home></Home> */}
      {/* <DataForm ></DataForm> */}
      <Data></Data>
      {/* <Parent></Parent> */}
    </div>
  );
}

export default App;
