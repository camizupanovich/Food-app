import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, updateRecipe } from "../redux/actions";

export default function Edit(){
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetail(id))
    },[])
    const infoToEdit = useSelector((state)=>state.detailRecipe)
    const [input,setInput]=useState({
        title:infoToEdit.title,
    })
    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit =(input,e)=>{
        e.preventDefault();
        dispatch(updateRecipe(id,input))
    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(input,e)}>
                <input type='text'
                name='title' 
                placeholder='new title'
                onChange={(e)=>handleChange(e)} 
                 value={input.title}/>
                 <input type='submit' value='UPDATE'/>
            </form>
        </div>
    )
}