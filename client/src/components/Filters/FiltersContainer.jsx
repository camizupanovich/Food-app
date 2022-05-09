import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {filterByType} from '../../redux/actions';
import Filters from "./Filters";
import s from '../styles/FiltersContainer.module.css';

export default function FiltersContainer(){
    const types = useSelector((state)=> state.types)
    const dispatch = useDispatch();
    return(
        <>
        <div className={s.container}>
         <button 
         className={s.btn} 
         name='all'
         onClick= {(e)=>dispatch(filterByType(e.target.name))}
         >REMOVE FILTERS
         </button>
            {types?.map((el)=>{
                return( 
                <Filters
                 key={el.id} 
                 name={el.name} 
                 id={el.id}/>)
            })}
        </div>
        </>
    )
}