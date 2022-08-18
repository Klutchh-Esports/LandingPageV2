import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='flex flex-col fade'>
    <h1>Your Greatest Weapon Is You.</h1>
    <h1 class='bigger text-klutchh-purple'> Make The Move.</h1>
    <button class='get-started'>GET STARTED</button>
    <h1 class="scan"> <span class="text-klutchh-purple">Scan To Download</span><br /> Our Android App</h1>
    <img class='qr fade' src="../images/QR.png" alt="qr code" />
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#make_the_move'));
document.querySelector('.get-started').onclick = function(){
        window.location.href = "https://app.klutchh.in/";
}