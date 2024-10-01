const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr) 

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "python",
        price: 599
    },
    {
        itemName: "AIML",
        price: 2999
    },
    {
        itemName: "Full Stack",
        price: 2999
    },
    {
        itemName: "Java",
        price: 1299
    }
]

const priceTOpay = shoppingCart.reduce((acc , item) => acc+ item.price , 0)

console.log(priceTOpay);
