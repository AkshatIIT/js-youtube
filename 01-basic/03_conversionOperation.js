let score= "33abc"
let score_01=true 
console.log(typeof score)
let valueIn=Number(score)
console.log(typeof valueIn)
console.log(valueIn)// NaN is coming because we have score "33abc" which is converted in number but NaN.
// conversion
// ... to number
// "33"=> 33
// "33abc"=> NaN
// true=> 1; false=>0
// .. to boolean
// 1=> true, 0=> false
//""=> "hitesh"=> true
/////*******Operation*********** */
let value=3;
let negvalue=-value
console.log(negvalue)
console.log("1"-2)
console.log(null>0)// false
console.log(null==0) //false
console.log(null>=0)// true
// this happen because equality and comparisons operator works differently. Comparison convert null into number, treating it as 0.
console.log('2'===2) // this is strict check that mean it will also check the data type of it. 




