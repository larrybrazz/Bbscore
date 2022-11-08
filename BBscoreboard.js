let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let btnFive = document.getElementById("btnFive");
let btnSix = document.getElementById("btnSix");
let home = document.querySelector("#homeNumber")
let guest = document.querySelector("#guestNumber");

 btnOne.addEventListener("click", ()=>{
    home.innerHTML = parseInt(home.innerHTML) + 1
 })
 btnTwo.addEventListener("click", ()=>{
    home.innerHTML = parseInt(home.innerHTML) + 2
 })
 btnThree.addEventListener("click", ()=>{
    home.innerHTML = parseInt(home.innerHTML) + 3
 })


 btnFour.addEventListener("click", ()=>{
    guest.innerHTML = parseInt(guest.innerHTML) + 1
 })
 btnFive.addEventListener("click", ()=>{
    guest.innerHTML = parseInt(guest.innerHTML) + 2
 })
 btnSix.addEventListener("click", ()=>{
    guest.innerHTML = parseInt(guest.innerHTML) + 3
 })