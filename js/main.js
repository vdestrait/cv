// Print current year in footer
const date = new Date();
const year = date.getFullYear();
const spanElement = document.getElementById("current-year");
spanElement.innerText = year;

// Menu Slides
$(document).ready(function() {
  $("header .material-icons").on("click", function() {
    if ($(this).hasClass("open-menu")) {
      $(this).removeClass("open-menu");
      $(this).text("subject");
      $(this)
        .next()
        .slideDown();
      $(this)
        .siblings("nav")
        .slideUp();
    } else {
      $(this)
        .next()
        .slideUp();
      $(this)
        .siblings("nav")
        .slideDown();
      $(this)
        .text("close")
        .addClass("open-menu");
    }
  });
});

// Dynamic margin for main tag
$(document).ready(function() {
  const headerHeight = $("header").height();
  $("main").css({ paddingTop: headerHeight });
});

// Roll the heads
$(document).ready(function() {
  window.onscroll = function() {
    animateHeads();
  };

  function animateHeads() {
    const heads = document.getElementsByClassName("head");
    for (let i = 0; i < heads.length; i++) {
      const bounding = heads[i].getBoundingClientRect();
      if (bounding.y < window.innerHeight * 0.75) {
        $(heads[i]).addClass("animated rollIn");
      }
    }
  }
});

// Mobile Slide-In #competences
$(document).ready(function() {
  if (window.innerWidth < 767) {
    $("#open-icon").on("click", function() {
      if ($(this).parent().hasClass("open")) {
        $(this).parent().removeClass("open");
        $(this).text("keyboard_arrow_right");  
        $('body').css({overflow:'scroll'});
      } else {
        $(this).parent().addClass("open");
        $('body').css({overflow:'hidden'});
        $(this).text("close");
        setTimeout(function() {
          $(".head").addClass("animated rollIn");
          $("h3").fadeIn("slow");
        }, 500);
      }
    });
  }
});

// Accordion for Mobile in #competences
$(document).ready(function() {
  if (window.innerWidth < 767) {
    $('.accordion').on('click', function(){
      if($(this).hasClass('active')){
        $(this).next().slideUp();
        $(this).toggleClass('active');
        $(this).find('.material-icons').text("keyboard_arrow_down"); 
         
      } else {
        $(this).next().slideDown();
        $(this).toggleClass('active');
        $(this).find('.material-icons').text("keyboard_arrow_up");   
      }
    })
  }
});

// Scroll TOP btn
$(document).ready(function() {
  $('.btn-top').on('click', function () {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});