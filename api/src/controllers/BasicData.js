const axios = require('axios');
const {Recipe,Diet}=require('../db')
const {API_KEY}= process.env;
const URL = 'https://api.spoonacular.com/recipes';

//llamado a la api para buscar todas las recetas

const apiRecipes = async()=>{
    try{
        const apiInfo = await axios.get(`${URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        const response = await apiInfo.data.results.map((e)=>{
            return{
                id: e.id,
                title: e.title,
                score: e.spoonacularScore,
                diets: e.diets,
                image: e.image,
            }
        });
        return response;
    }
    catch(error){
        console.log('error in controllers/apiRecipes',error);
    }
}
//busco todas las recetas en la base de datos
const dbRecipes = async()=>{
    let dbInfo = await Recipe.findAll({
        attributes:['id','title','summary','score','healthScore','steps','image','createInDb'],
        include:{
            model: Diet,
            attributes:['name'],
            throught:{
                attributes:[]
            }
        }
    });
    return dbInfo;
}
//concateno todas las recetas
const allRecipes = async()=>{
    const resApi = await apiRecipes();
    const resDb = await dbRecipes();
    const resAllRecipes = resApi.concat(resDb);
    return resAllRecipes;
}

module.exports= allRecipes