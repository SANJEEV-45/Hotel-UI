import React from "react";
import Typography from '@mui/material/Typography'

const TableComponent = () => {
    return (
        <>
            <Typography  variant="h6" color="initial">
                Result Table
            </Typography>
            <Typography variant="h6" color="initial" gutterBottom>
                Records found
            </Typography>
        </>
    );
};

export default TableComponent;
