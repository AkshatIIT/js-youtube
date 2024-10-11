let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.getMonth()+1)// give months

let myCreatedDate=new Date(2023,0,23,5,3)
let myTimeStamp=Date.now()
console.log(myTimeStamp) //will return millisecond from 1 jan 1970
