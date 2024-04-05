import React from "react";

const ReferenceFields = () => {
    return (
        <>
            <Typography variant="h4" color="blue">
                Reference Search
            </Typography>
            <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                marginTop={3}
                gap={2}
                flexWrap={"wrap"}
                maxWidth={"66%"}
            >
                <TextField
                    id="outlined-basic"
                    label="Unique Id"
                    variant="outlined"
                    name="unique_id"
                    InputProps={{ style: { borderRadius: "3rem" } }}
                    onChange={handlechange}
                />
                <TextField
                    id="outlined-basic"
                    label="Supplier Id"
                    variant="outlined"
                    InputProps={{ style: { borderRadius: "3rem" } }}
                />
            </Stack>
        </>
    );
};

export default ReferenceFields;
