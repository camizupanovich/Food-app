import React from "react";
import s from './styles/Pagination.module.css';

export default function Pagination({recipes,recipesPerPage,handlePaginate}){
    const totalPages =[];
    for(let i = 1; i<=Math.ceil(recipes/recipesPerPage);i++){
        totalPages.push(i);
    }
    return(
        <div className={s.lastContainer}>
            <div className={s.container}>
            {
                totalPages?.map(index =>(
                    <button 
                    className={s.btn}
                    key= {index} 
                    onClick={()=> handlePaginate(index)}
                    >{index}</button>
                ))
            }
            </div>
            <div className={s.publish}>》 》 YOU CAN VISIT 
            <a className={s.link} href="https://www.linkedin.com/in/camila-antonela-florencia-zupanovich/">THIS LINK</a>
             FOR MORE RECIPES 《 《</div>
        </div>
    )
}