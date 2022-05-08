import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getDetail} from '../redux/actions';
import s from './styles/DetailCard.module.css';

export default function DetailCard(){
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetail(id))
    },[]);
    const detailRecipe = useSelector((state)=>state.detailRecipe);
    return(
        <>
        { detailRecipe? (
                <div className={s.container}>
                    <h1 className={s.title}>{detailRecipe.title}</h1>
                        <div className={s.score}>{detailRecipe.score}</div>
                        <div className={s.healthScore}>{detailRecipe.healthScore}</div>
                    <img className={s.image} src={detailRecipe.image} alt='recipe'/>
                    <div>{detailRecipe.summary}</div>
                    <div>{detailRecipe.instructions}</div>
                    <div>{detailRecipe.diets}</div>
                    <div>{detailRecipe.steps}</div>
                    <div>{detailRecipe.time}</div>
                    <div>{detailRecipe.dishType}</div>
                </div>
            ) : (<div>recipe not found</div>)
        }
        </>
    )
}