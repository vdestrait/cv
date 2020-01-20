// Print current year in footer
const date = new Date();
const year = date.getFullYear();
const spanElement = document.getElementById("current-year");
spanElement.innerText = year;

// Dynamic margin for main tag
$(document).ready(function() {
  const headerHeight = $('header').height();
  console.log(headerHeight);
  $('main').css({marginTop: headerHeight});
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
  if (window.innerWidth < 767){
    $('#competences').on('click', function(){
      if($(this).hasClass('open')){
        $(this).removeClass('open');
        $(this).find('#open-icon').text('keyboard_arrow_right');
      } else {
        $(this).addClass('open');
        $(this).find('#open-icon').text('close');
        setTimeout(function(){ 
          $('.head').addClass("animated rollIn");
        }, 500);
      }
    });
  }
});
