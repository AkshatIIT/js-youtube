let name2 ="Akshat likes to play table tennis"
let repocount =3
console.log(`Hello my name is ${name2} and my repo count is ${repocount} `) //better way to write string
const gameName="Akshat"
console.log(gameName[1])
console.log(gameName.length)
console.log(gameName.charAt(2))
let newstring= name2.substring(-2)
console.log(newstring)
console.log(name2)
const new2string=gameName.slice(1)
console.log(new2string)
// Akshat
// to remove the space from from and end of string we use trim.

const newStringOne="       Akshat   "
console.log(newStringOne.trim()) //Akshat
//Replace: you can replace any of the character of a string with any new charater.
const url="http://hitesh.com/hitesh%20ch"
console.log(url)
console.log(url.replace("%20","Akku"))
// includes: will find the string in a string.
console.log(url.includes("hitesh"))
//split: that mean we can split the string and it is store in the array.
let sub=name2.split(" ")
console.log(sub)
  