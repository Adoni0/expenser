import axios from 'axios';

var apiKey = '01a5f6f74eeb4a099a4e1fb4bd39efcb';

export default {
    searchRecipe: (term) => {
        return axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=10&sort=popularity&apiKey=${apiKey}`)
    },
    searchIngredients: (id) => {
        return axios.get(`https://api.spoonacular.com/recipes/${id}/information&apiKey=${apiKey}`)
    },
    searchInstructions: (id) => {
        return axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions&apiKey=${apiKey}`)
    },
    randomRecipes: () => {
        return axios.get(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`)
    }
}
