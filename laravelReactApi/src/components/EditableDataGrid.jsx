import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const EditableDataGrid = ( {data, stateFromEditTable} ) => {

    const [editedRow, setEditedRow] = useState([]);


    useEffect(()=>{

    },[])
  

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
    const processRowUpdate = (newRow) => {
        console.log(newRow);
    };
    const handleProcessRowUpdateError = (error) => {
        console.error('Error processing row update:', error);
      };

  return (
    <>
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
        processRowUpdate={processRowUpdate}
        
      />
    </>
  );
};

export default EditableDataGrid;