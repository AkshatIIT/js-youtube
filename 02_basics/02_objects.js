//object literals
const JsUser={name:"Hitesh",age:"23", isloggedIn: false, "123": "Akshat"} //object is defined.
JsUser["My name"]="Prashant"
console.log(JsUser["My name"])
console.log(JsUser["123"])
// symbol is defined as follows inside an object.
const mySym=Symbol("key1")
const JsUser2={
    [mySym]:"mykey1"
}
console.log(typeof mySym)
//To freeze Object: then object will not change even you want change their value
// Object.freeze(JsUser);
JsUser["age"]=13
console.log(JsUser)
//You can define the function inside the object.
JsUser.greeting=function(){
    console.log(`Hello Akshat this is my name ${this.name}`) //this refers to this function.
}
console.log(JsUser.greeting());
//to concat two objects
let obj1=new Object({name2:"Akku"})
const obj3={...obj1,...JsUser}
console.log(obj3)
//to print all the keys of the objects
console.log(Object.keys(JsUser))
//to print all the values of the objects
console.log(Object.values(JsUser))
// to check where you have this key in object or not.
console.log(JsUser.hasOwnProperty('My name'))
//you can access the values of keys of the object as follow.it is called destructuring
const course={
    coursemame:"JavaS"
    ,price:99
    ,coursereader: "Akshat"
}

const {coursereader}=course// do this
console.log(coursereader) 