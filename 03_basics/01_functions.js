function addtwonumber(number1,number2){
      return number1+number2
}
console.log(addtwonumber(2,3))
function loginUserMessage(username){
    if(username==undefined){
        console.log("Please enter Username")
        return
    }
    return `$(username) just logged in`
}
console.log(loginUserMessage())
//for giving default value you can write like this
function loginUserMessage1(username="Akshat"){
    return `${username} just logged in`
}
console.log(loginUserMessage1())
//Rest operator  in function: It will take more input in a function. See example below. It will return u an array.
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000))
//to pass object in the function.
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}
const user={
    username:"Akshat",
    price: 199
}

handleObject(user) 
//or you can directly pass object like this
// handleObject({
//     username:"sam",
//     price:399
// })
//To pass an array in function
function returnSecondValue(getArray){
    return getArray[1];
}
const myNewArray=[200,400,100]
console.log(returnSecondValue(myNewArray))


