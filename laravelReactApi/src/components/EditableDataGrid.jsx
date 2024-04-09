import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import '../index.css';


const EditableDataGrid = ( {data, stateFromEditTable} ) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
    console.log(selectedRows);
  };

  function isNumeric(n1){
     const n = parseInt(n1);
     if(isNaN(n)){
      return false;
     }
     console.log(n);
     const uniqueIdRegex = /^[0-9]+$/;
     return uniqueIdRegex.test(n);
  }
    const handleUpdateRow = async (newRow) =>{
      console.log(isNumeric(newRow.unique_id));
       try{
          const uniqueId = newRow.unique_id;
          if(isNumeric(uniqueId) || uniqueId === 'N' || uniqueId === 'n'){
            console.log(true);
            await axios.put('http://127.0.0.1:8000/api/update',newRow)
            .then((response)=>{
              alert(response.data.message);
            });
          }
        else{
          alert("Trying to update a invalid format");
        }
       }
       catch(error){
        console.error(error);
        alert("Error saving changes!..Please try again");
       }
    }
  

    const HotelSearchColumn = [
        {
            field: "ind",
            headerName: "ID",
            width: "50",
            Cell: ({ value }) => <span>{value + 1}</span>,
            headerClassName:'custom-header'
        },
        { field: "unique_id", headerName: "Unique ID", width: "80",editable:true , headerClassName:'custom-header'},
        { field: "name", headerName: "Hotel Name", width: "170",headerClassName:'custom-header' },
        { field: "address", headerName: "Address", width: "200", headerClassName:'custom-header' },
        { field: "latitude", headerName: "Latitude", width: "100", headerClassName:'custom-header' },
        { field: "longitude", headerName: "Longitude", width: "100", headerClassName:'custom-header' },
        {
            field: "unique_supplier_id",
            headerName: "Unique Supplier ID",
            width: "150",
            headerClassName:'custom-header'
        },
    ];
 
  return (
    <div className="EditDataGrid">
      <DataGrid
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: "blue",
            color: "white",
          },
        }}
        getRowId={(users) => users.ind}
        columns={HotelSearchColumn}
        rows={data.map((user) => ({ ...user, ind: user.ind + 1 }))}
        pageSize={10}
        checkboxSelection
        disableRowSelectionOnClick
        pageSizeOptions={[]}
        autoPageSize
        processRowUpdate={(newRow)=>{handleUpdateRow(newRow)}}
        onRowSelectionModelChange={handleSelectionChange}
        keepNonExistentRowsSelected
        
      />
      {selectedRows.length > 0 && (
        <IconButton
          style={{ position: 'absolute', bottom: '10px', right: '10px' }}
          onClick={() => {
            // Handle delete action for selected rows
            console.log('Delete selected rows:', selectedRows);
          }}
        >
          <DeleteIcon fontSize="1.5rem" color="primary"/>
        </IconButton>
      )}
    </div>
  );
};

export default EditableDataGrid;