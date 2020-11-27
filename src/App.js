import { makeStyles, Paper } from "@material-ui/core";
import "./App.css";
import DataForm from "./component/DataForm";
import React, { useState } from "react";
import Data from "./component/Data";

const useStyles = makeStyles((theme) => ({
  paperContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      {/* <DataForm></DataForm> */}
      <Data></Data>
    </div>
  );
}

export default App;
