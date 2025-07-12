const clickblock = document.querySelector(".voprosBLOK1")
const hideblock = document.querySelector(".otvetblock")


clickblock.addEventListener("click", ()=>{
    console.log(clickblock)
    hideblock.classList.toggle('hidede')
    
    setTimeout(()=>{
        hideblock.classList.toggle('hide')
    }, 500)

    clickblock.classList.toggle('microanim')
})