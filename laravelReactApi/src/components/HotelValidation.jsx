import React, { useEffect, useState } from "react";
import "../index.css";
import LayoutHeading from "./LayoutHeading";
import InputFields from "./InputFields";
import DataGridComponent from "./DataGridComponent";
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import TableComponent from "./TableComponent";
import MapComponent from "../layouts/Map";


const HotelValidation = () => {
    const[data,setData] = useState([]);

    const updateData = (Datas) => {
        setData(Datas)
      };

      useEffect(()=>{

      },[updateData])
    
  return (
    <>   
       <Container
                maxWidth="xl"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
            <LayoutHeading/>
            <Stack
                    flexDirection={"row"}
                    marginTop={5}
                    gap={4}
                    flexWrap={"wrap"}
                    maxWidth={"90%"}
            >
                <InputFields updateData={updateData} />
            </Stack>
            <Stack
                    flexDirection={"row"}
                    gap={8}
                    justifyContent={"space-around"}
                    flexWrap={"wrap-reverse"}
            >
              <TableComponent/>
            </Stack>
            <Grid
                    container
                    maxWidth={"95%"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
            >
                    <Grid item xs={7.5}>
                        <DataGridComponent data={data} />
                    </Grid>
                    <Grid item xs={4}>
                        <MapComponent data={data}/>
                    </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default HotelValidation
