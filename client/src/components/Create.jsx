import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { postRecipe } from "../redux/actions";
import s from './styles/Form.module.css';
import {useHistory} from 'react-router-dom';

export default function Create(){
    const defaultImage = 'https://static.vecteezy.com/system/resources/previews/003/594/976/original/one-continuous-line-drawing-of-young-handsome-male-chef-opening-cloche-tray-to-serve-main-dish-to-customer-at-hotel-restaurant-excellent-service-concept-single-line-draw-design-illustration-vector.jpg'
    const diets = useSelector((state)=>state.types)
    const [input,setInput]=useState({
        title:'',
        summary:'',
        image:'',
        steps:'',
        score:'',
        healthScore:'',
        diets:[]
    })
//validate form with javascript
    const [errors,setErrors]=useState('')

    const validate = (entry,e)=>{
        const {name}= e.target;
        let error = {};
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
            case 'summary':
                if(entry.summary>150){
                    error.summary= 'Should not exceed 150 characters'
                }
                if(entry.summary.length<1){
                    error.summary='Required field'
                }
                break
            case 'steps':
                if(entry.steps>250){
                    error.steps= 'Should not exceed 250 characters'
                }
                if(entry.steps.length<1){
                    error.steps='Required field'
                }
                break
            case 'image':
                if(!/[(http(s)?):\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(entry.image)){
                    error.image = 'The image must be a validate url'
                }
                break
            case 'diets':
                if(entry.diets.length< 1){
                    error.diets = 'Minimum selection required'
                }
                if(entry.diets.length>3){
                    error.diets = 'The limit of selection is 3'
                }
                break
            case 'score':
                if(entry.score<1){
                    error.score= 'The score cannot be 0'
                }
                break
            case 'healthScore':
                if(entry.healthScore<1){
                    error.healthScore= 'The health score cannot be 0'
                }
                break
            default:
                return '';
            }
        return error;
    }

    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
                ...input, [e.target.name]:e.target.value
            }, e)
        );
    }

    const handleDiets = (e)=>{
        let filtereds = [...input.diets]
        if(e.target.checked === true){
            filtereds.push(e.target.id)
        }else{
            filtereds = filtereds.filter((f)=>f !== e.target.id)
        }
        setInput({
            ...input,
            diets:filtereds
        });
        setErrors(
            validate({
                ...input, [e.target.name]: filtereds
            },e)
        );
    }

    const handleChekInfo = (errors)=>{
        return Object.keys(errors).length>0
    }

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (input,e)=>{
        e.preventDefault();
        //imagen por default
        if(input.image.length<10){
            input.image=defaultImage
        }
        dispatch(postRecipe(input));
        setTimeout(()=>{
            history.push('/recipes')
        },1500)
    }

    return(
        <div className={s.component}>
        <form  className={s.container} onSubmit={(e)=>handleSubmit(input,e)}>

            <div className={s.Box}>

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

            <label className={s.label}>
            {errors.summary? (<span className={s.error}>{errors.steps}</span>):
            <span  htmlFor="steps" className={s.span}>STEPS</span>}
            <textarea name='steps'
            rows='3'
            className={s.input}
            type='text'
            placeholder="Describe the steps for your recipe here"
            onChange={(e)=>handleChange(e)}
            value={input.steps} required/>
            </label>
            <hr/>

            </div>

            <div  className={s.Box}>
                
            <label className={s.labelScore}>
            {errors.score? <span className={s.error}>{errors.score}</span>: 
            <span className={s.span}>SCORE: {input.score}</span>}
            <input name='score'
            type="range" min="0" max="100"  step="1" 
            onChange={(e)=>handleChange(e)}
            value={input.score}/>
            </label>
            <hr/>
            
            <label className={s.labelScore}>
            {errors.healthScore? (<span className={s.error}>{errors.healtScore}</span>): 
            <span className={s.span}>HEALTH SCORE: {input.healthScore}</span>}
            <input name='healthScore'
            type="range" min="0" max="100"  step="1" 
            onChange={(e)=>handleChange(e)}
            value={input.healthScore}/>
            </label>
            <hr/>

            <div className={s.dietsBox}>
            {errors.diets? <span className={s.error}>{errors.diets}</span>: 
            <span className={s.span}>SELECT THE TYPES OF DIETS</span>}
            <hr/>
                {diets?.map((d)=>{
                    return(<label key={d.name} className={s.dietName}>
                        <input type='checkbox'
                        id={d.name}
                        name='diets'
                        onChange={(e)=>handleDiets(e)}/> {d.name.toUpperCase()}</label>
                    );
                })}
            </div>

            </div>
            
            
            <div className={`${s.Box} ${s.lastBox}`}>
                <span className={s.lets}>LETS </span>
                <span className={s.create}>CREATE !</span>
                <input type='submit'className={s.submit} value='Send Recipe' disabled={handleChekInfo(errors)}/>
            </div>

        </form>
        </div>
    )
}