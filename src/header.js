import {html,render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='navbar flex'>
        <img src='../images/klutchh2.png' alt='klutchh logo' />
        <ul class='nav-items'>
        <li><a href="#" >HOME</a></li>
        <li><a href="#" >ABOUT</a></li>
        <li><a href="#" >FAQs</a></li>
        <li class='blog'>BLOG</li>
        </ul>
        <button>GET STARTED</button>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#header'));

document.querySelector('.blog').onclick = function(){
    window.location.href = "./blog/blog.html";
}