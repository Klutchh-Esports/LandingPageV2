import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='flex flex-col'>
    <h1>Your Greatest Weapon Is You</h1>
    <h1 class='text-klutchh-purple'> Make the move </h1>
    <button class='get-started'>Get Started</button>
    <h1>Scan To
    <span class='text-klutchh-purple'>Download The App</span></h1>
    <img src='../images/QR.png' alt='qr code'/>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#make_the_move'));
document.querySelector('.get-started').onclick = function(){
        window.location.href = "https://app.klutchh.in/";
    }