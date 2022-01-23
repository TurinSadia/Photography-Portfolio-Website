

// for active menu

$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 200, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  // if (scrollDistance >= 20) {
  // 		$('.navbar').fadeIn("fast");
  // } else {
  // 		$('.navbar').fadeOut("fast");
  // }

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.menu a.active').removeClass('active');
          $('.menu a').eq(i).addClass('active');
      }
  });
}).scroll();






//MENU BAR

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {

        MenuItems.style.maxHeight = "600px";
    } else {

        MenuItems.style.maxHeight = "0px";
    }

}


//scroll-top
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 60){
      $('#topBtn').fadeIn();
    }
     else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});



// WATER RIPPLE EFFECT

$(document).ready(function () {

  "use strict"
  $('.hero').ripples({
    dropRadius: 17,
    perturbance:.006,


  });



  // TYPING EFFECT

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  $(".text").typed({

    strings: ["Photography is a way ", "of feeling, of touching, of loving."],

    typeSpeed:0,
    loop: true

  });

});






// magnific pop-up

$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});
