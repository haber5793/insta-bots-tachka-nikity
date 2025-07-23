const scrollBlock = document.querySelector(".progressbar")
const body = document.body;
const html = document.documentElement
const pageheight = Math.max(
    body.scrollheight,
    body.Offsetheight,
    html.clientheight,
    html.scrollheight,
    html.Offsetheight
);

document.addEventListener('scroll', function(){
//console.log(window.pageYOffset)
//console.log(window.innerHeight)
console.log(textblock.OffsetTop)
if (textblock,Offsetheight < window.pageYOffset < textblock.OffsetTop){
    console.log('блок видно')
    textblock.classlist.add('visible')
}
})

document.addEventListener('scroll',{info}=> {
    //console.log(window.pageYOffset)
    scrollBlock.style.width = ${pageYOffset}px
    let windowHeight = window.innerHeight
    let sitescroll
    let blockwidth
    console.log(blockwidth)
    scrollBlock.style.width = ${blockwidth*100}Vw
})