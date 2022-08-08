import {html, render} from '../getLitHTML.js';
        // Define a template
const Footer = () => html
 `<div class='flex flex-col' />

    <div class='flex relative'>
      <div class='flex flex-col' >
        <img class='footer-logo' alt='logo' src='../images/klutchh.png'/>
        <ul class='footer-list'>
            <li>Home</li>
            <li>About</li>
            <li>FAQs</li>
            <li class='blog'>Blogs</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div class='flex flex-col'>
            <div class='flex social-icons'>
                <img src='../images/social_media/Facebook.png' alt='facebook' />
                <img src='../images/social_media/Instagram.png' alt='instagram' />
                <img src='../images/social_media/Twitter.png' alt='twitter' />
                <img src='../images/social_media/Linkedin.png' alt='linkedin' />
                <img src='../images/social_media/Discord.png' alt='discord' />
            </div>
        <div class='flex download'> 
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
