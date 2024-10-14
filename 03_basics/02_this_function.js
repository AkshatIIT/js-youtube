const user={
    username:"Akshat",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`) //to access the user name, we write this function
    }
}
user.welcomemessage();
//This function is used inside an object works but in function it doessn't works:
// Example: function chai(){
//let username="hitesh";console.log(this.username); //this will not work}  
//Defining function using arrow 
const chai=(num1,num2) =>{
    return num1+num2;
}
console.log(chai(3,4))

//If you have one line return then you can define a function as follow: this is called implicit function 
const addTwo=(num1,num2)=> (num1+num2)
console.log(addTwo(5,6))