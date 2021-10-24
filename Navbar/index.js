const toggle = document.getElementsByClassName('toggle')[0];
const list = document.getElementsByClassName('items')[0];
toggle.addEventListener('click',()=>{
    list.classList.toggle('active');
})