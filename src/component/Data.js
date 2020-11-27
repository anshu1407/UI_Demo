import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { Button, TextField } from "@material-ui/core";
import DataForm from "./DataForm";

function Data(props) {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 200 },
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

  const handleDelete = (id) => {
    console.log("deleted");

    axios.delete(`http://localhost:3000/data/${id}`).then((response) => {
      
      getData();
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
  const [select, setSelect] = useState("");
  const [click, setClick] = useState(false);
  const handleClick = (data) => {
    setSelect(data);
    //  console.log(select);
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataForm data={getData} select={select} click={click}></DataForm>
      <DataGrid
        rows={rows}
        onRowClick={(rowParams) => {
          handleClick(rowParams.data);
          setClick(true);
        }}
        columns={columns}
      />
    </div>
  );
}

export default Data;
