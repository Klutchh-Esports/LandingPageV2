import {html, render} from '../getLitHTML.js'
import {testimonials as data} from '../data.js'

const containerElement =()=>
html`
<h1>We Heard It From Our <span class='text-klutchh-purple'>Agents<span></h1>
<div class='testimonials-container'>
${data.map(
        (item)=>html`
    <div class='testimonials-element'>
        <div class='flex flex-col'>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        </div>
    </div>`
    )}
</div>`
render(containerElement(), document.querySelector('#testimonials'));