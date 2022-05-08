import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getRecipes, getTypes,bySort,getTitle} from "../redux/actions";
import CardsContainer from "./CardsContainer";
import FiltersContainer from "./FiltersContainer";
import SecondNav from "./SecondNav";
import Pagination from './Pagination';
import s from './styles/Home.module.css';

export default function Home(){
    
    const [orden, setOrden] = useState('sort');
    const types = useSelector((state)=>state.types);
    const recipes = useSelector((state)=>state.recipes);
    const [title,setTitle] = useState('');
    const dispatch = useDispatch();

    //paginado
    const [page,setPage] = useState(1);
    let recipesPerPage = 9 ;
    const LastRecipe = page * recipesPerPage; //position[9] on current page
    const FirstRecipe = LastRecipe - recipesPerPage; //position[1] on current page
    const currentPage = recipes.slice(FirstRecipe,LastRecipe); //array of 9 recipes  */
    
    const handlePaginate = (pageNumber) => {
       setPage(pageNumber);
    };

    const handleSearch = (e)=>{
        setTitle(e.target.value)
    }
    const searchTitle = (e)=>{
        e.preventDefault();
        e.target[0].value='';
        return dispatch(getTitle(title))
    }

    useEffect(()=>{
        dispatch(getRecipes());
        dispatch(getTypes());
    },[dispatch]);

    const handleSort = (e)=>{
       dispatch(bySort(e));
       setOrden(e);
   }
    return(
        <> 
        <SecondNav 
        handleSort={handleSort} 
        searchTitle={searchTitle} 
        handleSearch={handleSearch}/>
        <div className={s.body}>
         <FiltersContainer />
        <CardsContainer recipes={currentPage}/>
        </div>
        <Pagination 
        recipes={recipes.length} 
        recipesPerPage={recipesPerPage} 
        handlePaginate={handlePaginate}/>
        </>
    )
}