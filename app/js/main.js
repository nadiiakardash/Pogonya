AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function opentab1(tabName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 1,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loop: true,
    loopedSlides: 5, 
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
   
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className){
        return '<span  class="' + className + '">' + (index + 1) + '</span>'     }
    },
    
  });

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("burg-icon").style.display = "none";
    document.getElementById("burg-close").style.display = "block";

  }
  function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
  }
  
  function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("burg-icon").style.display = "block";
    document.getElementById("burg-close").style.display = "none";
  }



//tabs navigation 1
$(function() {
  $(".tab1-btns-item").on("click", function(e) {
      $(this).addClass("active1").siblings().removeClass("active1");    
  });
});




$('.dropdown-list-item').click(function() {
  $('.crosspray').toggleClass('rotate');
});
$('.dropdown-list-item1').click(function() {
  $('.pluspray1').toggleClass('rotate');
});
$('.dropdown-list-item2').click(function() {
  $('.pluspray2').toggleClass('rotate');
});
$('.dropdown-list-item3').click(function() {
  $('.pluspray3').toggleClass('rotate');
});
$('.dropdown-list-item4').click(function() {
  $('.pluspray4').toggleClass('rotate');
});
$('.dropdown-list-item5').click(function() {
  $('.pluspray5').toggleClass('rotate');
});
$('.dropdown-list-item6').click(function() {
  $('.pluspray6').toggleClass('rotate');
});



//open dropdown content
$(document).ready(function(){
  $(".dropdown-list-item").click(function(){
    $(".dropdown-container").slideToggle("slow");   

  });
  $(".dropdown-list-item1").click(function(){
    $(".dropdown-container1").slideToggle("slow");    
  });
  $(".dropdown-list-item2").click(function(){
    $(".dropdown-container2").slideToggle("slow");    
  });
  $(".dropdown-list-item3").click(function(){
    $(".dropdown-container3").slideToggle("slow");    
  });
  $(".dropdown-list-item4").click(function(){
    $(".dropdown-container4").slideToggle("slow");    
  });
  $(".dropdown-list-item5").click(function(){
    $(".dropdown-container5").slideToggle("slow");    
  });
  $(".dropdown-list-item6").click(function(){
    $(".dropdown-container6").slideToggle("slow");    
  });
});




//tabs content 1
function opentab1(tabName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}

