const clickBlock = document.querySelector(".voprosBLOK1")
const hideBlock = document.querySelector(".otvetblock")


clickBlock.addEventListener("click",()=>{
    console.log(clickBlock)
    hideBlock.classList.toggle('hidede')
    clickBlock.classList.toggle('microanim')
    
    setTimeout(()=>{
        hideBlock.classList.toggle('hide')
    },500)
})

