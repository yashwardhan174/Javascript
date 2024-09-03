const marvelHeroes = ["Thor" , "Ironman" , "Spiderman"]
const DCHeroes = ["Superman" , "Batman" , "Flash"]

// marvelHeroes.push(DCHeroes)
// console.log(marvelHeroes);

// const allHeros = marvelHeroes.concat(DCHeroes) //This is concat operator
// console.log(allHeros);

const all_new_heros = [...marvelHeroes , ...DCHeroes] //This is spread Operator
console.log(all_new_heros);

