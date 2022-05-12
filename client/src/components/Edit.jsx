import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, updateRecipe } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Edit(){
    const dispatch = useDispatch();
    const history = useHistory();
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
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value
            },e)
        )
    }
    const [errors,setErrors]=useState('')
    const validate = (entry,e)=>{
        const {name} = e.target;
        let error ={};
        switch(name){
            case 'title':
                if(!/^[/A-Za-z\s]+$/g.test(entry.title)){
                    error.title = 'Must not contain numbers or special characters';
                }
                if(entry.title.length>25){
                    error.title = 'Should not exceed 25 characters'
                }
                if(entry.title.length<1){
                    error.title='Required field'
                }
                break
            default: 
            return '';
        }
        return error;
    }
    const handlePrevSubmit = (errors)=>{
        return Object.keys(errors).length>0
    }
    const handleSubmit =(input,e)=>{
        e.preventDefault();
        dispatch(updateRecipe(id,input));
        setTimeout(()=>{
            history.push(`/recipes/${id}`)
        },1500)
    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(input,e)}>
                {errors.title? <span>{errors.title}</span> : <span>Title</span>}
                <input type='text'
                name='title' 
                placeholder='new title'
                onChange={(e)=>handleChange(e)} 
                 value={input.title}/>
                 <input type='submit' value='UPDATE' disabled={handlePrevSubmit(errors)}/>
            </form>
            <Link to={`/recipes/${id}`} ><button>Cancel</button></Link>
        </div>
    )
}