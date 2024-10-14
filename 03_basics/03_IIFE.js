//Immediately invoked Function Expressions (IIFE)
//(function_defination (function_values)
(function chai(fullname){
    console.log(`DB connected by ${fullname}`);
})("Akshat"); //in this function will run immediately. Note semicolumn is important here.
((fullname)=>{
    console.log(`DBconnected two ${fullname}`)
})('Akshat')

