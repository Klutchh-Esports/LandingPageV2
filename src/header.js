import {html,render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='navbar flex'>
        <img src='../images/klutchh2.png' alt='klutchh logo' />
        <ul class='nav-items'>
        <li><a href="#" >HOME</a></li>
        <li><a href="#about_us" >ABOUT</a></li>
        <li><a href="https://klutchh.notion.site/FAQs-e321c5092f8047ff82c8d61299613259" target="_blank" rel="noopener noreferrer">FAQs</a></li>
        <li class='blog'>BLOG</li>
        </ul>
        <button>GET STARTED</button>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#header'));

document.querySelector('.blog').onclick = function(){
    window.location.href = "./blog/blog.html";
}