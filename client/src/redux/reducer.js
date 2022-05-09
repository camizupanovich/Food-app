import {actions} from './actions'
const initialState = {
    types:[],
    myRecipes:[],
    allRecipes:[],
    recipes:[], 
    detailRecipe:{},
    favRecipes:[],
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
            case actions.BY_SORT:
                let info = state.recipes;
                let sortedRecipe =
                  action.payload === "az"?
                   info.sort(function (a, b) {
                        if (a.title > b.title) {
                          return 1;
                        }
                        if (b.title > a.title) {
                          return -1;
                        }
                        return 0;
                      })
                    : 
                    action.payload === "za"?
                     info.sort(function (a, b) {
                        if (a.title > b.title) {
                          return -1;
                        }
                        if (b.title > a.title) {
                          return 1;
                        }
                        return 0;
                      })
                    : 
                    action.payload === "best_score"?
                     info.sort(function (a, b) {
                        if (a.score> b.score) {
                          return -1;
                        }
                        if (b.score> a.score) {
                          return 1;
                        }
                        return 0;
                      })
                    : 
                    info.sort(function (a, b) {
                        if (a.score> b.score) {
                          return 1;
                        }
                        if (b.score> a.score) {
                          return -1;
                        }
                        return 0;
                      });
                return {
                  recipes: sortedRecipe,
                  allRecipes: sortedRecipe,
                  ...state
                };/* 
          case actions.SEARCH_TITLE:
            let filteredByTitle = [];
            state.allRecipes.forEach(t=>{
              if(t.title.toLowerCase().includes(action.payload)){
                  filteredByTitle.push(t)
              }
            });
            return{
              ...state,
              recipes: filteredByTitle
            } */
          case actions.SEARCH_TITLE:{
            return{
              ...state,
              recipes: action.payload
            }
          }
          case actions.GET_DETAIL:
            return{
              ...state,
              detailRecipe:action.payload
            }
          case actions.ADD_FAVORITE:
            var prevFavs = state.favRecipes;
            var filterToAdd = state.allRecipes.find(
               (r)=> r.id === action.payload
             );
             prevFavs.push(filterToAdd);
             const deleteRepeat = new Set(prevFavs);
             var result = [...deleteRepeat];
            return{
              ...state,
              favRecipes: result
            }
          case actions.REMOVE_FAVORITE:
            let updateFav = state.favRecipes.filter(
              (e)=>e.id !== action.payload);
              return{
                ...state,
                favRecipes: updateFav
              }
          case actions.POST_RECIPE:
            return{
              ...state,
            }
          case actions.MY_RECIPES:{
            return{
              ...state,
              myRecipes: state.allRecipes.filter((recipe)=>{
                return recipe.createInDb === true
              })
            }
          }
         /*  case actions.UPDATE_RECIPE:{
            let remaining = state.allRecipes.filter((e)=>e.id!== action.payload[0]);
            remaining.push(action.payload[1]);
            return{
              ...state,
              allRecipes: remaining,
              recipes: remaining
            }
          } */
          case actions.DELETE_RECIPE:
            return{
              ...state
            }
          case actions.UPDATE_RECIPE:
            return{
              ...state,
            }
        default:
            return state;
    }
}