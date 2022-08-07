import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div>
        <h1> Testimonials </h1>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#testimonials'));