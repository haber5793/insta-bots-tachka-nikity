const input1 = document.getElementById('num1')
const button = document.getElementById('but')
const input2 = document.getElementById('num2')

button.addEventListener("click",()=>{
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    let c = Math.sqrt(num1*num1+num2*num2)
    console.log(c)
})