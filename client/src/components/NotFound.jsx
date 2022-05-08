import React from "react";
import img from '../resources/RecipeNotFound.png';
import s from './styles/NotFound.module.css';

export default function NotFound(){
    return(
        <div className={s.container}>
            <img  className={s.image} src={img} alt='Not Found'/>
            <button  className={s.button}> Create a recipe !</button>
        </div>
    )
}