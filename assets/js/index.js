
console.log('btn')
let btnM = document.getElementById('btnM');
let navLinks = document.querySelector('.nav-links');

btnM.onclick = () =>{
    btnM.classList.toggle('fa-times');
    navLinks.classList.toggle('active')
}