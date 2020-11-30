import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { Button, TextField } from "@material-ui/core";
import DataForm from "./DataForm";

// {setUpdate , setClick, setGet}
function Data(props) {
  const [rows, setRows] = useState([]);
  const[update,setUpdate]=useState('');
  const[click,setClick]= useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 200,
    renderCell: (params) => (
        
      <strong>
        {/* {console.log(params)};
        {(params.value)}
         onClick={showData} */}
         <Button onClick={()=>{showData(params.data)}}>
          {params.value} 
         </Button>
      </strong>
    )},
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "fullname",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
    {
      field: "delete",
      headerName: "Remove",
      width: 120,
      description: "Delete the complete row",
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              handleDelete(params.data.id);
            }}
          >
            DELETE
          </Button>
        </strong>
      ),
    },
  ];
const showData=(data)=>{
   setUpdate(data);
    setClick(true);
  console.log(data)}
  
  const handleDelete = (id) => {
    console.log("deleted");

    axios.delete(`http://localhost:3000/data/${id}`).then((response) => {
      
      getData();
      // const data= getData();
    //  setGet(data)
    // setGet(getData())
      console.log(response);
    });
  };
  const getData = () => {
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        const res = response.data;
        setRows(res);
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   props.sendData?getData():getData();
  // }, []);
  
  
  const handleClick = (data) => {
    
    setUpdate(data);
    setClick(true);
    console.log(data)
  };
  // const [dataReceived,setDataReceived]= useState(false);
  const handleCallBack=()=>{
       getData();
  }
  const updateCallBack=()=>{
    getData();
    // setUpdate(null);
    setClick(false);
  }
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataForm parentCallback={handleCallBack} updateCallBack={updateCallBack}
      // data={getData} 
      click={click} update={update}
      ></DataForm>
      <DataGrid
        rows={rows}
        // onRowClick={(rowParams) => {
        //   handleClick(rowParams.data);
          
        // }}
        columns={columns}
      />
    </div>
  );
}

export default Data;
