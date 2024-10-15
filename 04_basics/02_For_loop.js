//new type of loop
//for(const iterator of array,string,object){....}
const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(arr[num]);
}
// Maps:
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('IND',"India")
map.set('FR',"France")
console.log(map)
for(const i of map){
    console.log(i[0])
}
for(const [key,value] of map){
    console.log(key,':-',value);
} ///Doesn't work if there is an object
let obj={'Name':"Akshat", "Class":"12", "Roll No":16152649}
for(const key in obj){
    console.log(key)
    console.log(obj[key])
}
//foreach function in arrray 
let coding=['java','cpp','ruby']
coding.forEach((element,index) => {
    console.log(element,index);
});
//foreach value don't return anything
//we have filter function that return the value.
const myNums=[1,2,3,4,5,6,7,8]
const newNums=myNums.filter((num)=> num>4)
console.log(newNums) //[5,6,7,8] //if you use {} then you have to write return in it to return the value
/// we have map function also 
const myNumbers=[1,2,3,4,5,6,78,9,0]

const newNum = myNumbers.map((num)=>num+10) //will add 10 to all the number
console.log(newNum)
//you can use chain of map and filter
const newNums2=myNumbers.map((num)=> num=10).map((num)=>{return num*10})
//reduce function: there is accu and currevaluw in this, what reduce function do that if you are adding acc and currval then it will return the sum of these too and save in acc and do it agsain and again and return the final value. intially you have to give the value to accumulator.
const myNumms=[1,2,3]
const myTotal=myNumms.reduce(function(acc,current){
    console.log(`acc is ${acc} and currentvalue is ${current}`)
    return acc+current
},0)
console.log(myTotal)

