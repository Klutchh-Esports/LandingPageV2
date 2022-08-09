import {html, render} from '../getLitHTML.js';
        // Define a template
const Footer = () => html
 `<div class='flex flex-col' />

    <div class='flex relative'>
      <div class='flex flex-col' >
        <img class='footer-logo' alt='logo' src='../images/klutchh.png'/>
        <ul class='footer-list'>
            <li><a href="#header">Home</a></li>
            <li><a href="#about_us">About</a></li>
            <li><a href="https://klutchh.notion.site/FAQs-e321c5092f8047ff82c8d61299613259" target="_blank" rel="noopener noreferrer">FAQs</a></li>
            <li class='blog-footer'>Blogs</li>
            <li><a href="https://www.notion.so/Terms-Of-Use-19e681a6a540439e9acf944a7a3c7172" target="_blank" rel="noopener noreferrer">Terms</a></li>
            <li><a href="https://www.notion.so/Privacy-Policies-3d57b50903874918a63089fdb796ac89" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
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
            <img width='30%' src='../images/GetAppIcons/app_store.png' alt='ios' />
            <img width='30%' src='../images/GetAppIcons/android.png' alt='android' />
            <img width='30%' src='../images/GetAppIcons/webapp.png' alt='web' />
        </div>
        </div>
    </div>

    <div class='flex flex-col'>
        <p class='one'>© Copyright Klutchh Gaming Private Limited 2022 | All Rights Reserved</p>
        <p class='two'>This game involves an element of financial risk and may be addictive. Please Play responsibly and at your own risk.</p>
    </div>
</div>
 `;
        // Render the template to the document
render(Footer(), document.querySelector('#footer'));
document.querySelector('.blog-footer').onclick = function(){
    window.location.href = "./blog/blog.html";
}
document.querySelector(".footer-downloader").onclick = function(){
    location.href = "#make_the_move";
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