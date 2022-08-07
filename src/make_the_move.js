import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div>
        <h1> Make the move </h1>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#make_the_move'));