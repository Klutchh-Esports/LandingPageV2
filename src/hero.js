import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    `<div class='hero_cont flex'>
        <img src='../images/logo_hero.png' alt='logo' />
        <div>
            <h1>Are You Ready</h1>
            <h1 class='text-klutchh-purple'>To Klutchh?</h1>
            <p>India’s Fastest Growing Esports Fantasy Platform.<br />
            For the gamers by the gamers.</p>
            <div class='flex hero-d'>
                <img class='hero-downloader'width='30%' src='../images/GetAppIcons/android.png' alt='android' />
                <img class='hero-web'width='30%' src='../images/GetAppIcons/webapp.png' alt='web' />
            <div>
        </div>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#hero'));
document.querySelector(".hero-downloader").onclick = function(){
    location.href = "https://cdn.klutchh.in/klutchh-v1.0.2.apk";
}
document.querySelector(".hero-web").onclick = function(){
    // location.href = "https://app.klutchh.in/";
    window.open(
        'https://app.klutchh.in/',
        '_blank' // <- This is what makes it open in a new window.
      );
}