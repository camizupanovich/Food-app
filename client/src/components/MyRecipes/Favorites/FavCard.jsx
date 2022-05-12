import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavoriteRecipe } from "../../../redux/actions";
import s from '../../styles/FavCard.module.css';

export default function FavCard({id,title,image}){
    const dispatch = useDispatch();
    const handleDeleteFav = (e)=>{
        dispatch(removeFavoriteRecipe(id));
    } 
    return(
        <div className={s.container} >
            <img className={s.img} src={image} alt={title}/>
            <div className={s.title}>{title.toUpperCase()}</div>
            <div onClick={(e)=>{handleDeleteFav(e)}}className={s.remove}>🗑</div>
            <Link to={`/recipes/${id}`} className={s.detail}>Lets Cook ! </Link>
        </div>
    )
}