import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='hero_cont flex'>
        <img src='../images/logo_hero.avif' alt='logo' />
        <div>
            <h1>Are You Ready</h1>
            <h1 class='text-klutchh-purple'>To Klutchh?</h1>
            <p>India’s Fastest Growing Esports Fantasy Platform.<br />
            For the gamers by the gamers.</p>
            <div class='flex'>
                <img width='30%' src='../images/GetAppIcons/app_store.png' alt='ios' />
                <img width='30%' src='../images/GetAppIcons/android.png' alt='android' />
                <img width='30%' src='../images/GetAppIcons/webapp.png' alt='web' />
            <div>
        </div>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#hero'));