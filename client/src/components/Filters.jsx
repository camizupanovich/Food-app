import React from "react";
import {useDispatch} from 'react-redux';
import {filterByType} from '../redux/actions';
import s from './styles/Filters.module.css';

export default function Filters({id,name}){
    const dispatch = useDispatch();
    return(
        <>
         <button 
         className={s.btn} 
         name={name}
         onClick= {(e)=>dispatch(filterByType(e.target.name))}
         >{name.toUpperCase()}
         </button>
        </>
    )
}