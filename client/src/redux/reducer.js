import {actions} from './actions'
const initialState = {
    types:[],
    myRecipes:[],
    allRecipes:[],
    recipes:[],
    detailRecipe:[],
}
export default function rootReducer( state=initialState,action){
    switch(action.type){
        case actions.GET_RECIPES:
            return{
                ...state,
                allRecipes:action.payload,
                recipes:action.payload
            };
        case actions.GET_TYPES:
            return{
                ...state,
                types: action.payload
            };
        case actions.BY_TYPE:
            let filtereds = [];
            if(action.payload === 'all'){
                return{
                    ...state,
                    recipes:state.allRecipes
                }
            }
            state.recipes.forEach(t=>{
                if(t.diets.includes(action.payload)){
                    filtereds.push(t)
                }
            })
            return{
                ...state,
                recipes: filtereds
            }
        default:
            return state;
    }
}