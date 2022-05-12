import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import s from './styles/Landing.module.css';
import img from '../resources/img_landing.png';
import {  getRecipes, getTypes,getMyRecipes } from "../redux/actions";

export default function Landing(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRecipes());
        dispatch(getTypes());
        dispatch(getMyRecipes());
    },[dispatch]);

    return(
        <div>
            <img src={img} alt='Welcome' className={s.image}/>
            <Link to='/recipes'className={s.enter}><p className={s.p}>Let's Cook!</p></Link>
        </div>
    )
}