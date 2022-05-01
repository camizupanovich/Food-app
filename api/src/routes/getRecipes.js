const { default: axios } = require('axios');
const express = require('express');
const route = express.Router();
require('dotenv').config();

const allRecipes = require('../controllers/BasicData');
const {API_KEY}= process.env;
const URL = 'https://api.spoonacular.com/recipes';
const {Recipe,Diet} = require('../db')

route.get('/', async(req,res)=>{
    try{
        const title = req.query.title;
        let recipes = await allRecipes();
        if(title){
            let recipeMatcher = await recipes.filter((e)=>
            e.title.toLowerCase().includes(title.toLowerCase()));
            if(recipeMatcher.length) return res.status(200).send(recipeMatcher);
            return res.status(404).send('Recipe Not Found')
        }else{
            res.status(200).send(recipes)
        }
    }catch(error){
        console.log('error in route get recipes or a title of recipe',error)
        return res.status(404).json(error)
    }
});

route.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        if(id.length>20){
            const dbInfo = await Recipe.findByPk(id,{
                include:{
                    model: Diet,
                    attributes:['name'],
                    through:{
                        attributes:[]
                    }
                }
            });
            return dbInfo? res.status(200).json(dbInfo) : res.status(400).send('recipe not found');
        }else{
            let apiInfo;
            try{
                const {data} = await axios.get(`${URL}/${id}/information?apiKey=${API_KEY}`);
                apiInfo ={
                    id:data.id,
                    title: data.title,
                    summary: data.summary,
                    score: data.spooonacularScore,
                    healthScore: data.healthScore,
                    diets: data.diets,
                    image:data.image,
                    steps: data.instructions,
                    time: data.readyInMinutes,
                    dishType:data.dishTypes
                }
            }catch(error){
                console.log('error in detailApi',error)
            }
            return apiInfo? res.status(200).json(apiInfo):res.status(400).send('recipe not found');
        }
    }
    catch(error){
        console.log('error in detail promise',error)
    }
})

module.exports= route;