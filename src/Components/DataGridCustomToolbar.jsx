import { InputAdornment, TextField, IconButton } from '@mui/material';
import { Search } from "@mui/icons-material"
import React from 'react';
import {GridToolbarDensitySelector, } from "@mui/x-data-grid";

const DataGridCustomToolbar = () => {



    return (
       <GridToolbarCotainer>
        <FlexBetween width = "100%">
            <FlexBetween>
                <GirdToolbarColumnsButton/>
                <GridToolbarDensitySelector />
                <GridToolbarExport/>
            </FlexBetween>
            <TextField
            label="search"
            sx={{mb: "0.5rem", width: "15rem"}}
            onChange={(e)=> setSearchInput(e.target.value)}
            value={searchInput}
            variant='standard'
            InputProps={{endAdornment: (
                <InputAdornment postion="end">
                <IconButton onClick= {()=>{
                    setSearch(searchInput);
                    setSearchInput("");

                }}
                >
                    <Search/>
                </IconButton>
                </InputAdornment>

            ),
        }}
        />
        
            </FlexBetween>
       </GridToolbarCotainer>
    );
};

export default DataGridCustomToolbar;