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
});

var cylceCarousel = [$(".footerUpperCarousel"), $(".videoCarousel")];

$(document).ready(function () {
  cylceCarousel.forEach((cycle) => {
    cycle.carousel({
      interval: 3000,
    });

    cycle.carousel("cycle");
  });
});

var tabs = [$('.tabImg')];

tabs.forEach((tab)=>{
  $(tab).click(function(){
    if ($(this).hasClass("active")) {
      return;
    } else {
        for (i = 0; i <= tab.length; i++) {
          tab.removeClass('active');
          $(this).addClass('active');
        }
    }    
  })
})