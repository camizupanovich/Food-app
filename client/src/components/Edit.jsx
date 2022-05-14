import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, updateRecipe } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import s from './styles/Edit.module.css';

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
        image: infoToEdit.image,
        summary: infoToEdit.summary,
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
            case 'image':
                if(!/[(http(s)?):\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(entry.image)){
                  error.image = 'The image must be a validate url'
                }
                break
             case 'summary':
                if(entry.summary>150){
                    error.summary= 'Should not exceed 150 characters'
                }
                 if(entry.summary.length<1){
                    error.summary='Required field'
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
    const defaultImage = 'https://static.vecteezy.com/system/resources/previews/003/594/976/original/one-continuous-line-drawing-of-young-handsome-male-chef-opening-cloche-tray-to-serve-main-dish-to-customer-at-hotel-restaurant-excellent-service-concept-single-line-draw-design-illustration-vector.jpg'
    const handleSubmit =(input,e)=>{
        e.preventDefault();
        if(input.image.length<10){
            input.image=defaultImage
        }
        dispatch(updateRecipe(id,input));
        setTimeout(()=>{
            history.push(`/recipes/${id}`)
        },1500)
    }
    return(
        <div className={s.editContainer}>
            <div className={s.titleUpdate} >Lets UPDATE !</div>
            <hr/>
            <form className={s.formEdit} onSubmit={(e)=>handleSubmit(input,e)}>

                 <label className={s.label}>
                {errors.title? 
                (<span  htmlFor="title" className={s.error}>{errors.title}</span>)
                :<span  htmlFor="title" className={s.span}>TITLE</span>}
                <input  name='title'
                className={s.input}
                type='text' 
                placeholder='Title of your recipe' 
                onChange={(e)=>handleChange(e)} 
                value={input.title} required/>
                </label>
                <hr/>
                 
                 {input.image!==''? 
                    (<img src={input.image} alt='new recipe' width='270px'/>) :
                    (<img src={defaultImage}  alt='new recipe' width='270px'/>)}
                    <hr/>
                 
                 <label className={s.label}>
                  {errors.image? <span className={s.error}>{errors.image}</span> :
                 <span  htmlFor="image" className={s.span}>URL IMAGE</span>}
                 <input name='image'
                 className={s.input}
                 type='url'
                 placeholder="http://letscook.com/image"
                  onChange={(e)=>handleChange(e)}
                  value={input.image} />
                 </label>
                  <hr/>
                  
                <label className={s.label}>
                {errors.summary? (<span className={s.error}>{errors.summary}</span>):
                <span  htmlFor="summary" className={s.span}>SUMMARY</span>}
                <textarea name='summary'
                rows='3'
                className={s.input}
                type='text'
                placeholder="Describe your recipe here"
                onChange={(e)=>handleChange(e)}
                value={input.summary} required/>
                </label>
                <hr/>

                 <input type='submit' value='UPDATE' className={s.submit} disabled={handlePrevSubmit(errors)}/>
            </form>
            <Link  className={s.link} to={`/recipes/${id}`}><button className={s.cancel} >CANCEL</button></Link>
        </div>
    )
}