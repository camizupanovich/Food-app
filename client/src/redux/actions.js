import axios from 'axios';
export const actions = {
    GET_RECIPES:'GET_RECIPES',
    GET_TYPES: 'GET_TYPES',
    BY_TYPE: 'BY_TYPE',
    BY_SORT: 'BY_SORT',
    SEARCH_TITLE: 'SEARCH_TITLE',
    GET_DETAIL: 'GET_DETAIL',
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    POST_RECIPE: 'POST_RECIPE',
    MY_RECIPES: 'MY_RECIPES',
    UPDATE_RECIPE: 'UPDATE_RECIPE',
    DELETE_RECIPE:'DELETE_RECIPE'
}
/* 
export function getRecipes(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/recipes',{});
        return dispatch({
            type: actions.GET_RECIPES,
            payload: json.data
        });
    }
}; */
export function getRecipes(){
    return async function(dispatch){
        try{
            var json = await axios.get('http://localhost:3001/recipes',{});
            return dispatch({
                type: actions.GET_RECIPES,
                payload: json.data
            })
        }catch(error){
            alert(json.data.message) 
        }
    }
}
export function getTypes(){
    return async function (dispatch){
        var diets = await axios.get('http://localhost:3001/types',{});
        return dispatch({
            type: actions.GET_TYPES,
            payload: diets.data
        });
    }
}

export function filterByType(payload){
    return({
        type: actions.BY_TYPE,
        payload,
    })
}
export function bySort(payload){
    return ({
        type: actions.BY_SORT,
        payload,
    });
}
/* 
export function getTitle(payload){
    return({
        type: actions.SEARCH_TITLE,
        payload,
    });
} */
export function getTitle(title){
    return async(dispatch)=>{
        try{
            var titleMatched = await axios.get(`http://localhost:3001/recipes?title=${title}`,{});
            return dispatch({
                type: actions.SEARCH_TITLE,
                payload: titleMatched.data
            })
        }catch(error){
            alert('RECIPE NOT FOUND')
        }
    }
}
export function getDetail(id){
    return async(dispatch)=>{
        let info = await axios.get(`http://localhost:3001/recipes/${id}`);
        return dispatch({
            type: actions.GET_DETAIL,
            payload: info.data
        })
    }
}
export function addFavoriteRecipe(payload){
    return({
        type:actions.ADD_FAVORITE,
        payload
    })
}
export function removeFavoriteRecipe(payload){
    return({
        type:actions.REMOVE_FAVORITE,
        payload
    })
}
export function postRecipe(input){
    return async(dispatch)=>{
        const responsePost = await axios.post('http://localhost:3001/recipe', input);
        input.id = responsePost.data.id;
        dispatch({
            type: actions.POST_RECIPE,
            payload: input
        })
        alert(responsePost.data.message)
    }
}
export function getMyRecipes(){
    return({
        type: actions.MY_RECIPES
    })
}
export function updateRecipe(id,updateInfo){
    return async(dispatch)=>{
        const responseUpdate = await axios.put(`http://localhost:3001/edit/${id}`,updateInfo);
        dispatch({
            type: actions.UPDATE_RECIPE,
        })
        alert(responseUpdate.data.message)
    }
}
export function deleteRecipe(id){
    return async(dispatch)=>{
        const responseDelete = await axios.delete(`http://localhost:3001/delete/${id}`);
        dispatch({
            type:actions.DELETE_RECIPE,
        })
        alert(responseDelete.data.message)
    }
}