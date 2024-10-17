const button=document.querySelectorAll('.button')
// console.log(button)
for (let index = 0; index < button.length; index++) {
    const button1=button[index]
    // console.log(button1.id)
    button1.addEventListener('click',function(e){
        document.querySelector('body').style.backgroundColor=button1.id
    })
}