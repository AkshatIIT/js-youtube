const balance=new Number(100) // this will defined the balance as a number.
//toStringConverting the number to String.
const score=400.486
console.log(score.toString().length)
 //Tofixed: to put number in  fixed decimel.
 console.log(score.toFixed(2));
 //toprecision: After decimal and before decimal the total length of the number is what you fixed.
 console.log(score.toPrecision(4))
//toLocaleString: to put commas in the number
let hundered=1000000
console.log(hundered.toLocaleString()) //1,000,000
console.log(hundered.toLocaleString('en-IN')) //10,00,000
//++++++++++++++++++Maths +++++++++++++++++++++++
console.log(Math.ceil(score))
console.log(Math.floor(score)) 
console.log(Math.max(score,400));
console.log(Math.round(score));
console.log(Math.random()) //it's value is from 0-1
//Let say you wants to have a number b/w min and max value.
let min=10, max=20
console.log(Math.floor(Math.random()* (max-min+1))+min)
