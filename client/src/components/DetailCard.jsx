import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getDetail,deleteRecipe} from '../redux/actions';
import { Link } from "react-router-dom";
import s from './styles/DetailCard.module.css';
import { useHistory } from "react-router-dom";

export default function DetailCard(){
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetail(id))
    },[]);
    const detailRecipe = useSelector((state)=>state.detailRecipe);
    const history = useHistory();

    const handleDelete = (e)=>{
        e.preventDefault();
        dispatch(deleteRecipe(id));
        setTimeout(()=>{
            history.push('/recipes')
        },1500);
    }

    return(
        <>
        { detailRecipe? (
                <div className={s.container}>
                    <h1 className={s.title}>{detailRecipe.title}</h1>
                
                <div className={s.groupsContainer}>
                    
                <div className={s.groupOne}>
                    
                    <img className={s.image} src={detailRecipe.image} alt='recipe'/>
                    {detailRecipe.time? 
                    <div className={s.timeContainer}>
                        <div className={s.time}> {detailRecipe.time}'</div>
                    </div> 
                    : (<div className={s.btnConfig}><div onClick={(e)=>handleDelete(e)}>🗑</div>
                        <Link className={s.btn} to={`/edit/${detailRecipe.id}` }>
                        <div>✎</div></Link> </div>)}

                    <div className={s.score}>🎖{detailRecipe.score}Pts.</div>
                    <div className={`${s.healthScore} ${s.score}`}>♡  {detailRecipe.healthScore}</div>
                    
                    <div className={s.dishTypeContainer}>
                    {detailRecipe.dishType?.map((dish,i)=>{
                        return(
                            <div key={i} className={s.dishType}>{dish.toUpperCase()}</div>
                        )
                    })}
                    </div>

                </div>

                <div className={s.groupTwo}>
                    
                    <div  className={s.titleInfo}>TYPE OF DIETS</div>
                    <div className={s.dietsContainer}>
                        {detailRecipe.diets?.map((diet,i)=>{
                        return (<div key={i} className={s.diets}>{diet.toUpperCase()}</div>)
                         })}
                    </div>
                    <hr/>
                    
                    <div  className={s.titleInfo}>SUMMARY</div>
                    <div className={s.textAreas}>{detailRecipe.summary}</div>

                </div> 

                </div>

                <div className={s.groupThird}>
                    <div  className={s.titleSteps}>STEPS</div>
                    <div className={s.textSteps}>{detailRecipe.steps}</div>
                </div>
                </div>
            ) : (<div>recipe not found</div>)
        }
        </>
    )
}