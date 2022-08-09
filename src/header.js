import {html,render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='navbar flex'>
        <img src='../images/klutchh2.png' alt='klutchh logo'/>
        <ul class='nav-items'>
        <li><a href="#" >HOME</a></li>
        <li><a href="#about_us" >ABOUT</a></li>
        <li><a href="https://klutchh.notion.site/FAQs-e321c5092f8047ff82c8d61299613259" target="_blank" rel="noopener noreferrer">FAQs</a></li>
        <li class='blog'>BLOGS</li>
        </ul>
        <button id="get-started">GET STARTED</button>
        <div class='hidden absolute' id='ham-burg' width='1.2em' height='1.2em'><img src="https://img.icons8.com/ios-filled/20/ffffff/menu--v1.png"/></div>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#header'));

document.querySelector('.blog').onclick = function(){
    window.location.href = "./blog/blog.html";
}
document.querySelector('#get-started').onclick = function(){
    window.location.href = "https://app.klutchh.in/";
}
const nav = document.querySelector('.nav-items');
const ham = document.getElementById("ham-burg");
if(window.matchMedia( "(max-width:1000px)").matches){
    nav.classList.add('hidden');
    ham.classList.remove('hidden');
}
ham.addEventListener('click',()=>{
    if(nav.classList.contains("hidden")) {
        nav.classList.remove('hidden');
        ham.innerHTML = '<img src="https://img.icons8.com/ios-filled/20/ffffff/back.png"/>'
    }
    else{
        nav.classList.add('hidden');
        ham.innerHTML = '<img src="https://img.icons8.com/ios-filled/20/ffffff/menu--v1.png"/>'
    }
})