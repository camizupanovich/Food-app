import axios from 'axios';
export const actions = {
    GET_RECIPES:'GET_RECIPES',
    GET_TYPES: 'GET_TYPES',
    BY_TYPE: 'BY_TYPE'
}

export function getRecipes(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/recipes',{});
        return dispatch({
            type: actions.GET_RECIPES,
            payload: json.data
        });
    }
};

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