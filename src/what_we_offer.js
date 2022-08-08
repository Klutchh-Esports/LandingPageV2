import {html, render} from '../getLitHTML.js'
import {whatWeOffer as data} from '../data.js'

const containerElement =()=>
html`
<h1>What We <span class='text-klutchh-purple'>Offer<span></h1>
<div class='offer-container'>
${data.map(
        (item)=>html`
    <div class='offer-element relative' id=${item.title==='Free Entry'?'first':'nope'}>
        <div class='flex flex-col'>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        </div>
        <img class='absolute' src=${item.image} alt='' />
    </div>`
    )}
</div>`
render(containerElement(), document.querySelector('#what_we_offer'));