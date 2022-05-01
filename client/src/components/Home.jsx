import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getRecipes, getTypes } from "../redux/actions";
import CardsContainer from "./CardsContainer";
import FiltersContainer from "./FiltersContainer";
import SecondNav from "./SecondNav";
import s from './styles/Home.module.css'

export default function Home(){
    
    const [orden, setOrden] = useState('');
    const types = useSelector((state)=>state.types);
    const recipes = useSelector((state)=>state.recipes);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRecipes());
        dispatch(getTypes());
    },[dispatch]);
    return(
        <>
        <SecondNav/>
        <div className={s.body}>
         <FiltersContainer />
        <CardsContainer recipes={recipes}/>
        </div>
        </>
    )
}