import {html, render} from '../getLitHTML.js'
import {howToStart as data} from '../data.js'

const containerElement =()=>
html`<h1>How To <span class='text-klutchh-purple'>Start<span></h1>
<div class='start-container'>
${data.map(
        (item)=>html`
    <div class='start-element flex'>
        <img src=${item.image} alt='step 1 sign up' />
        <div class='flex flex-col'>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        </div>
    </div>`
    )}
</div>`
render(containerElement(), document.querySelector('#how_to_start'));