import React from 'react';
import styled from "styled-components"
import {TextField,Button} from "@material-ui/core"



const EditModerator = ()=>{

    return (
        <div>
            <TextField variant="outlined" size="small" label="First Name"></TextField>
            <TextField variant="outlined" size="small" label="Surname"></TextField>
            <TextField variant="outlined" size="small" label="Password"></TextField>
            <TextField variant="outlined" size="small" label="Email"></TextField>
            <Button size="medium" variant="outlined" color="secondary" style={{textTransform:"none"}}>Create</Button>
        </div>
    )
}

export default EditModerator;