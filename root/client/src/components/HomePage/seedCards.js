import { ingredientList } from './sideBarFilterData';

const randomEleGen = (array) => {
    const randIndex = Math.floor(Math.random()*array.length);
    return array[randIndex];
}

export const cardInfo = [
    {
        _id:"123456",
        name: "Creation1",
        ingredients: [randomEleGen(ingredientList[0].base), randomEleGen(ingredientList[1].toppings)],
        likes: Math.floor(Math.random()*1000),
        creator: "Riz",
    },
    {
        _id:"1256",
        name: "Creation2",
        ingredients: [randomEleGen(ingredientList[0].base), randomEleGen(ingredientList[1].toppings), randomEleGen(ingredientList[2].flavourings)],
        likes: Math.floor(Math.random()*1000),
        creator: "DN",
    },
    {
        _id:"1456",
        name: "Creation3",
        ingredients: [randomEleGen(ingredientList[0].base), randomEleGen(ingredientList[1].toppings), randomEleGen(ingredientList[2].flavourings)],
        likes: Math.floor(Math.random()*1000),
        creator: "GC",
    },
    {
        _id:"12356",
        name: "Creation4",
        ingredients: [randomEleGen(ingredientList[0].base), randomEleGen(ingredientList[1].toppings), randomEleGen(ingredientList[2].flavourings)],
        likes: Math.floor(Math.random()*1000),
        creator: "GA",
    },
]