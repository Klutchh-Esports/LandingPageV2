import {html, render} from '../getLitHTML.js';
        // Define a template
const myTemplate = () => html
    `<div>
        <h1><span class='text-klutchh-purple'>Battlegrounds</span> You Can Enter</h1>
        <div class='row1 flex'>
            <img width='250px' src='../images/valorant_card.avif' alt='valorant' />
            <img width='250px' src='../images/valorant_card.avif' alt='valorant' />
            <img width='250px' src='../images/valorant_card.avif' alt='valorant' />
        </div>
        <div class='row1 flex'>
            <img width='250px' src='../images/valorant_card.avif' alt='valorant' />
            <img width='250px' src='../images/valorant_card.avif' alt='valorant' />
        </div>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#battlegrounds'));