import {html,render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='navbar flex'>
        <img src='../images/klutchh2.png' alt='klutchh logo' class="header-logo"/>
        <ul class='nav-items'>
        <li><a href="../index.html" >HOME</a></li>
        <li><a href="../index.html#about_us" >ABOUT</a></li>
        <li><a href="./faqs/faq.html" target="_blank" rel="noopener noreferrer">FAQs</a></li>
        <li class='blog'>BLOGS</li>
        </ul>
        <button id="get-started">GET STARTED</button>
        <div class='hidden absolute' id='ham-burg' width='1.2em' height='1.2em'><img src="https://img.icons8.com/ios-filled/20/ffffff/menu--v1.png"/></div>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#header'));

document.querySelector('.header-logo').onclick = function(){
    if(window.location.pathname === '/index.html' ||  window.location.pathname === '/' || window.location.pathname === ''){
        window.location.href = "./index.html";
    }
    else{
        window.location.href = "../index.html";
    }
}

document.querySelector('.blog').onclick = function(){
    customAlert('Launching Kluchh Blogs...');
    setTimeout( ()=>{
        if(window.location.pathname === '/index.html' ||  window.location.pathname === '/' || window.location.pathname === ''){
            window.location.href = "./blog/blog.html";
        }
        else{
            window.location.href = "../blog/blog.html";
        }
    },500)
}

document.querySelector('#get-started').onclick = function(){
    customAlert('Launching Kluchh WebApp...');
    setTimeout(()=>{
        window.open(
            'https://app.klutchh.in/',
            '_blank' // <- This is what makes it open in a new window.
          );
    },1000);
}
const nav = document.querySelector('.nav-items');
const navbar = document.querySelector('.navbar');
const ham = document.getElementById("ham-burg");
ham.style.marginLeft='15px';
if(window.matchMedia( "(max-width:1000px)").matches){
    nav.classList.add('hidden');
    ham.classList.remove('hidden');
}
ham.addEventListener('click',()=>{
    if(nav.classList.contains("hidden")) {
        nav.classList.remove('hidden');
        ham.style.marginLeft='30px';
        ham.innerHTML = '<img src="../images/back.png"/>'
        navbar.classList.add("no-touch");
    }
    else{
        nav.classList.add('hidden');
        ham.style.marginLeft='15px';
        ham.innerHTML = '<img src="../images/menu--v1.png"/>'
        navbar.classList.remove("no-touch");
    }
})