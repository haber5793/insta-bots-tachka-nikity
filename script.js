const clickBlock = document.querySelector(".voprosBLOK1")
const hideBlock = document.querySelector(".otvetblock")
let state = true


clickBlock.addEventListener("click",()=>{
    if (state == true){
        console.log('понос бобра')
        setTimeout(() => {
            hideBlock.classList.add('hidede')
        }, 200);
        state = false

    }else{
        hideBlock.classList.remove('hide')
        console.log('еще понос бобра')
        state =true
        hideBlock.classList.remove('hidede')
        setTimeout( () => {
            hideBlock.classList.remove('hideanim')
        }, 200
    );
    }
})