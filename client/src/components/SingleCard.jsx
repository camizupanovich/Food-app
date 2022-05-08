import React from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import s from './styles/SingleCard.module.css';
import { addFavoriteRecipe } from "../redux/actions";

export default function SingleCard({image,title,score,diets,id}){
    const dispatch = useDispatch();
    return(
        <div className={s.card}>
            <button className={s.fav} onClick={(e)=>dispatch(addFavoriteRecipe(id))}>♡</button>
            <img className={s.img} src={image} alt={title}/>
            <div className={s.title}>{title.toUpperCase()}</div>
            <div className={s.score}>{`★ ${score} Pts. `}</div>
            <div className={s.listcontainer}>
            {diets?.map((diets,i)=>(
                <span key={i} className={s.listContent}>| {diets} </span>
            ))}
            </div>
            <Link to={`/recipes/${id}`} className={s.detail}>Lets cook ! </Link>
        </div>
    )
}