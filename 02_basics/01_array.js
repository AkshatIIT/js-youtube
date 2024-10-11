//array in Java is resizable

const myArr=[0,2,3,4,5]
console.log(myArr[1]);
//Array methods. 
//To add new number to array at the end.
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.unshift(0)  // it will add the number in the front.
console.log(myArr.includes(9)) // search 9 in the array
console.log(myArr.indexOf(3)) // will give u the index

//Array to string
const newArr=myArr.join()
console.log(newArr) //will convert the array to string in comma seperated
//slice and splice
//in slice it will print the slice that you want but nothing is done with original array but in splice it will cut that part and original array also get changed.
console.log(myArr.slice(1,3))
console.log(myArr.splice(1,3))
console.log(myArr) //array changed due to splice

//concat: you can merge two array. It return new array
let cartoons=['Doraemon', 'Chota Bheem']
let newArr2=myArr.concat(cartoons)
console.log(newArr2)
const newArr3=[...cartoons,...myArr] //do same as concatenate.
console.log(newArr3)
//flat: if you have array inside array and you want all the value to be in a single array then you use flat. See below example.
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array) // output is [1,2,3,4,5,6,7,6,7,4,5]
//to convert the anything to array you use this:
console.log(Array.isArray("Hitesh")) // check whether "Hitesh is array or not"
console.log(Array.from("Hitesh")) //convert "Hitesh" to array.
console.log(Array.from({name:"hitesh"})) //interesting it will return empty array because it don't know whether to make aaray with key aor value.

