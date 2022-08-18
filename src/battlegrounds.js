import {html, render} from '../getLitHTML.js';
        // Define a template
const myTemplate = () => html
    `<div>
        <h1><span class='text-klutchh-purple'>Battlegrounds</span> You Can Enter</h1>
        <div class='row1 flex '>
            <img class="reveal" width='360px' height='407px' src='../images/games/valorant_card.png' alt='valorant' />
            <img class="reveal" width='360px' height='407px' src='../images/games/pubg_card.png' alt='pung' />
            <img class="reveal" width='401px' height='407px' src='../images/games/cod.png' alt='cod' />
        </div>
        <div class='row1 flex '>
            <img class="reveal"  width='360px' height='407px' src='../images/games/free_fire.png' alt='free fire' />
            <img class="reveal" width='360px' height='407px'' src='../images/games/cs_go.png' alt='cs go' />
        </div>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#battlegrounds'));