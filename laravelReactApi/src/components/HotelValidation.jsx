import React from "react";
import Typography from "@mui/material/Typography";
import "../index.css";
import LayoutHeading from "./LayoutHeading";
import InputFields from "./InputFields";
import DataGridComponent from "./DataGridComponent";
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'


const HotelValidation = () => {
    
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
               <InputFields  />
            </Stack>
            <Stack
                    flexDirection={"row"}
                    gap={8}
                    justifyContent={"space-around"}
                    flexWrap={"wrap-reverse"}
            >
                    <Typography variant="h6" color="initial">
                        Result Table
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                        Records found
                    </Typography>
            </Stack>
            <Grid
                    container
                    maxWidth={"95%"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
            >
                    <Grid item xs={7.5}>
                        <DataGridComponent/>
                    </Grid>
                    <Grid item xs={4}>
                        <Map/>
                    </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default HotelValidation

   