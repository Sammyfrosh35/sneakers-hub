let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}



let searchform= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}



let cartitem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}



window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbxx3AaMdHBzPaDzhimDVZkmaucc8gqNZddML4Ab4ckYy1szzgV9uATkOIDQ_U3frRk7XA/exec'
const form = document.forms['submit-to-google-sheet']
const msg =  document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.textContent = "Message sent successfully"
        setTimeout(function(){
            msg.textContent = ""
        },5000)
        form.reset()
    })

    .catch(error => console.error('Error!', error.message))
})





