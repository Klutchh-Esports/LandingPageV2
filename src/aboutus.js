import {html, render} from '../getLitHTML.js';
        // Define a template
const myTemplate = () => html
    `<div class='about_section flex flex-col align-center'>
        <h1> About <span class='text-klutchh-purple'>Us</span></h1>
        <p>Create your own team, choose from the best players across the globe & win real-time money!<br />
        Become a part of the Klutchh community and stay updated about the biggest gaming events held globally.</p>
        <img src='../images/mockup2.avif' alt='klutchh app mockup' />
        <div class='met-parent'><div class='metrics flex' >
            <div class='flex'>
                <img src='../images/contests_met.png' alt='' />
                <div class='flex flex-col'> 
                    <h1>1500+</h1>
                    <p>Contests Hosted</p>
                </div>
            </div>
            <div class='flex'>
            <img src='../images/wining_met.png' alt='' />
            <div class='flex flex-col'> 
                <h1>5 Lakhs +</h1>
                <p>Winnings Distributed</p>
            </div>
            </div>
            <div class='flex'>
            <img src='../images/community_met.png' alt='' />
            <div class='flex flex-col'> 
                <h1>35,000+</h1>
                <p>Community Members</p>
            </div>
        </div> 
        </div> 
        </div>
    </div> `;
        // Render the template to the document
render(myTemplate(), document.querySelector('#about_us'));