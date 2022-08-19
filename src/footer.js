import {html, render} from '../getLitHTML.js';
        // Define a template
const Footer = () => html
 `<div class='flex flex-col' />

    <div class='flex relative'>
      <div class='flex flex-col' >
        <img class='footer-logo' alt='logo' src='../images/klutchh.png'/>
        <ul class='footer-list'>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../index.html#about_us">About</a></li>
            <li><a href="../faqs/faq.html" target="_blank" rel="noopener noreferrer">FAQs</a></li>
            <li class='blog-footer'>Blogs</li>
            <li class='terms'>Terms</li>
            <li class="privacy" >Privacy Policy</li>
        </ul>
        </div>
        <div class='flex flex-col'>
            <div class='flex social-icons'>
                <img class='facebook' src='../images/social_media/Facebook.png' alt='facebook' />
                <img class='instagram' src='../images/social_media/Instagram.png' alt='instagram' />
                <img class='twitter' src='../images/social_media/Twitter.png' alt='twitter' /> </a>
                <img class='linkedin' src='../images/social_media/Linkedin.png' alt='linkedin' /> </a>
                <img class='discord' src='../images/social_media/Discord.png' alt='discord' /> </a>
            </div>
        <div class='flex download footer-downloader'>
            <img class="app-down" width='30%' src='../images/GetAppIcons/android.png' alt='android' />
            <img class="web-open" width='30%' src='../images/GetAppIcons/webapp.png' alt='web' />
        </div>
        </div>
    </div>

    <div class='flex flex-col'>
        <p class='one'>© Copyright Klutchh Gaming Private Limited 2022 | All Rights Reserved</p>
        <p class='two'>This game involves an element of financial risk and may be addictive. Please Play responsibly and at your own risk.</p>
    </div>
</div>
 `;
render(Footer(), document.querySelector('#footer'));

document.querySelector('.footer-logo').onclick = function(){
    if(window.location.pathname === '/index.html' ||  window.location.pathname === '/' || window.location.pathname === ''){
        window.location.href = "./index.html";
    }
    else{
        window.location.href = "../index.html";
    }
}

document.querySelector('.blog-footer').onclick = function(){
    if(window.location.pathname === '/index.html' ||  window.location.pathname === '/' || window.location.pathname === ''){
        window.location.href = "./blog/blog.html";
    }
    else{
        window.location.href = "../blog/blog.html";
    }
}
document.querySelector('.privacy').onclick = function(){
    if(window.location.pathname === '/index.html' ||  window.location.pathname === '/' || window.location.pathname === ''){
        window.location.href = "./privacy/privacy.html";
    }
    else{
        window.location.href = "../privacy/privacy.html";
    }
}
document.querySelector('.terms').onclick = function(){
    if(window.location.pathname === '/index.html' ||  window.location.pathname === '/' || window.location.pathname === ''){
        window.location.href = "./terms/terms.html";
    }
    else{
        window.location.href = "../terms/terms.html";
    }
}
document.querySelector(".app-down").onclick = function(){
    customAlert('Downloading Klutchh App...');
        location.href = "https://cdn.klutchh.in/klutchh-v1.0.2.apk";
}
document.querySelector(".web-open").onclick = function(){
    customAlert('Launching Kluchh WebApp...');
        window.open(
            'https://app.klutchh.in/',
            '_blank'
          );
}
document.querySelector(".facebook").onclick = function(){
    window.location.href = "https://www.facebook.com/klutchh.in";
}
document.querySelector(".instagram").onclick = function(){
    window.location.href = "https://www.instagram.com/klutchh.in/";
}
document.querySelector(".twitter").onclick = function(){
    window.location.href = "https://twitter.com/klutchhesports";
}
document.querySelector(".discord").onclick = function(){
    window.location.href = "https://discord.com/invite/kESvewdGmZ";
}
document.querySelector(".linkedin").onclick = function(){
    window.location.href = "https://www.linkedin.com/company/klutchh/?originalSubdomain=in";
}