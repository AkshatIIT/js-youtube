const accountId= 123
let accountEmail="akshat@gmil.com"
var accountpassword= "123" // don't use var while defining the variable due to functional scope

accountCity="Jaipur"
// accountId=2
console.log(accountId)
accountEmail="akku"
accountpassword="2122"
accountCity="Bengaluru"
console.table([accountEmail,accountId,accountpassword,accountCity]) // it will print all the value of variable in table.
