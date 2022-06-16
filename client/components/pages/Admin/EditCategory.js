import React, { useState } from 'react';
import styled from "styled-components"
import {TextField,Button} from "@material-ui/core"
import {editCategory} from "../../../Api/requests"


const FieldHolder = styled.div`
margin-bottom:10px;
`

const EditCategory = ()=>{
    const [values,setValues] = useState({
       blob:"",
       categoryName:""
    })
    const [src,setSrc] = useState(null)
   
    const changeHandler = (event,value)=>{
        const copyValues = {...values}
        const newFormData = new FormData();
        copyValues[value] = value == "blob" ? event.target.files[0] : event.target.value
        
        if(value == "blob"){
            const createdUrl = URL.createObjectURL(event.target.files[0])
            setSrc(createdUrl);
        }

        setValues(copyValues)
      
    }

    return (
        <div>
            <FieldHolder>
                <TextField value={values.categoryName} onChange={(e)=>changeHandler(e,"categoryName")} variant="outlined" size="small" label="Category Name"></TextField>
            </FieldHolder>
            <FieldHolder>
              <input onChange={(e)=>changeHandler(e,"blob")} type="file" accept="image/*"></input>
            </FieldHolder>
            <FieldHolder>
               <img style={{width:"200px",height:"200px",objectFit:"cover"}} src={src}></img>
            </FieldHolder>
            <FieldHolder>
               <Button onClick={()=>editCategory(values)} variant="outlined" color="secondary" style={{textTransform:"none"}}>Add</Button>
            </FieldHolder>
        </div>
    )
}

export default EditCategory;