import { createMuiTheme, makeStyles, Paper, ThemeProvider } from "@material-ui/core";
import "./App.css";
import DataForm from "./component/DataForm";
import React, { useState } from "react";
import Data from "./component/Data";
import Parent from "./component/Parent";
import Home from "./component/Home";
import { dark } from "@material-ui/core/styles/createPalette";

const useStyles = makeStyles((theme) => ({
  paperContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const theme = createMuiTheme(
  {
    palette:{
      type:dark
    }
  }
)

function App() {
  // const[update, setUpdate]=useState('');
  // const [click, setClick] = useState(false);
  // const [get, setGet]=useState('');
  // const classes = useStyles();

  return (
    <div>
     <ThemeProvider theme={theme}>
     <Paper>
     {/* <Home></Home> */}
      {/* <DataForm ></DataForm> */}
      <Data></Data>
     </Paper>
     </ThemeProvider>
    </div>
  );
}

export default App;
