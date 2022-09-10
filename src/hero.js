import {html, render} from '../getLitHTML.js'
        // Define a template
const myTemplate = () => html
    ` 
<img src="../images/glow4.png" alt='' class="absolute -right-50 glow4" />
    <div class='hero_cont flex'>
        <img src='../images/logo_hero.png' alt='logo' class="heroAnimation" />
        <div class="heroAnimation">
            <h1 class="heroAnimation">Are You Ready</h1>
            <h1 class='text-klutchh-purple heroAnimation'>To Klutchh?</h1>
            <p class="heroAnimation">India’s Fastest Growing Esports Fantasy Platform.<br />
            For the gamers by the gamers.</p>
                <input type="text" id="enterNumber" placeholder="Enter Mobile Number" />
                <button id="getLink" class="btn" >Get Link</button>
            <div class='relative flex hero-d heroAnimation'>
                <img class='hero-downloader'width='30%' src='../images/GetAppIcons/android.png' alt='android' />
                <img class='hero-web'width='30%' src='../images/GetAppIcons/webapp.png' alt='web' />
            <div>
        </div>
    </div> `;
render(myTemplate(), document.querySelector('#hero'));
document.querySelector(".hero-downloader").onclick = function(){
    customAlert('Downloading Klutchh App...');
    setTimeout( ()=>{
        location.href = "https://cdn.klutchh.in/klutchh-v1.0.2.apk";
    },500)
}
document.querySelector(".hero-web").onclick = function(){
    customAlert('Launching Kluchh WebApp...');
        window.open(
            'https://app.klutchh.in/',
            '_blank'
          );
}

// GET APP LINK CODE 
const number = {
    num:0,
}
const validatePhoneNumber = (mobile) => {
    const re = /^\d{10}$/;
    const re2 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{10})$/;
    return re.test(String(mobile)) || re2.test(String(mobile));
  };
const sendAppLink = async () => {
    console.log("I'm Here")
    // const validatedMobile = validatePhoneNumber(number.num)
    const validatedMobile = number.num;
    if(validatedMobile){
        try{
            const response = await axios.get(`https://api.klutchh.in/v1/getapplink?contact=${number.num}`);
            console.log(response)
        }catch(error){
            console.log(error);
        }
    }
    else{
        console.log("Invalid Mobile");
    }
}
const getLinkButton = document.getElementById("getLink")
const inputNumber = document.getElementById("enterNumber")
inputNumber.addEventListener('keyup',(event)=>{
    number.num = event.target.value;
    console.log(number.num)
})
getLinkButton.addEventListener("click",sendAppLink)