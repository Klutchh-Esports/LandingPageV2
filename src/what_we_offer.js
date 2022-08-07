import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div>
        <h1> What we offer </h1>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#what_we_offer'));