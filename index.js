function myFunction() {
  document.querySelector(".navRight form").classList.add('d-flex')
    document.querySelector('.searchButton').classList.add('d-none')
};

var toggler = document.querySelector('#menuToggler');
var banText = document.querySelector('.banner');
var toggledBanner = `<h1 class="menu">MENU</h1>`;


const untoggledBanner = document.querySelector('.banner').innerHTML;

toggler.addEventListener('click', function(){
    this.classList.toggle('clicked')
    document.querySelector('.heroSection').classList.toggle('togglerClicked');
    document.querySelector('.searchButton').classList.toggle('disappear');
    document.querySelector('.navRight').classList.toggle('noMargin')
    banText.classList.toggle('bToggled');

    if (banText.className == ("banner bToggled")) {
      banText.innerHTML = toggledBanner;
    }
    else {
        banText.innerHTML = untoggledBanner;
    }
})

// var unToggledBanner = `<div class="headingText">
//                 <h3>We find you jobs <br>
//                     <span>at great companies</span>
//                 </h3>
//             </div>
//             <div class="quoteBtn">
//                 <a href="">
//                     <button class="btn1">
//                         <img src="images/mailImg.png" alt="">
//                         <p>Get a quote</p>
//                     </button>
//                 </a>
//             </div>`