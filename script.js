const arrow1 = document.getElementById("arrow")
const arrow2 = document.getElementById("arrow2")
const arrowdown = document.getElementById("arrowdown")
const arrowup = document.getElementById("arrowup")
const arrowdown2 = document.getElementById("arrowdown2")
const arrowup2 = document.getElementById("arrowup2")
const dropdown = document.getElementById("dropdown")
const dropdown2 = document.getElementById("dropdown2")
const body = document.body
const left = document.getElementById("left")


arrowdown.addEventListener("click", ()=>{
    dropdown.style.display = "block"
    arrowdown.style.display = "none"
    arrowup.style.display = "block"
    body.style.overflow = "scroll"
    left.style.marginTop = "0px"
})
arrowup.addEventListener("click", ()=>{
    dropdown.style.display = "none"
    arrowdown.style.display = "block"
    arrowup.style.display = "none"
    body.style.overflow = "hidden"
    left.style.marginTop = "70px"
})
arrowdown2.addEventListener("click", ()=>{
    dropdown2.style.display = "block"
    arrowdown2.style.display = "none"
    arrowup2.style.display = "block"
    body.style.overflow = "scroll"
    left.style.marginTop = "0px"
})
arrowup2.addEventListener("click", ()=>{
    dropdown2.style.display = "none"
    arrowdown2.style.display = "block"
    arrowup2.style.display = "none"
    body.style.overflow = "hidden"
    left.style.marginTop = "70px"
})
