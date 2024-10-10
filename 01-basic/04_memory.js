let user2={
    mail:"akuu.com"
}
let user3= user2
console.log(user3)
user3.mail="pp.com"
console.log(user2) // in this object out is pp.com. it goes via reference not value.
//string,number are store in stack and function, array are stored as heap
let user4=["akshat"]
console.log(user4)
let user5=user4
console.log(user5)
user5=["akku"]
console.log(user5)
console.log(user4) 
