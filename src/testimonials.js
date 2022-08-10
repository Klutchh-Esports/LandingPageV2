import {html, render} from '../getLitHTML.js'
import {testimonials as data} from '../data.js'

const containerElement =()=>
html`
<h1>We Heard It From Our <span class='text-klutchh-purple'>Agents<span></h1>
<img src="../images/glow3.png" alt='' class="absolute right-0" />
<div class='testimonials-container'>
${data.map(
        (item)=>html`
    <div class='testimonials-element'>
        <img src=${item.image} alt='' />
    </div>`
    )}
</div>`
render(containerElement(), document.querySelector('#testimonials'));