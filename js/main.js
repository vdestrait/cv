// Print current year in footer
const date = new Date();
const year = date.getFullYear();
const spanElement = document.getElementById("current-year");
spanElement.innerText = year;

// Roll the heads
console.log(window.innerWidth);
console.log("Height :" + window.innerHeight);
$(document).ready(function() {
  window.onscroll = function() {
    animateHeads();
  };

  function animateHeads() {
    const heads = document.getElementsByClassName("head");
    //console.log(heads);
    for (let i = 0; i < heads.length; i++) {
      const bounding = heads[i].getBoundingClientRect();
      console.log(bounding.y);
      if (bounding.y < window.innerHeight * 0.75) {
        console.log(bounding.y);
        console.log("Height :" + window.innerHeight * 0.5);
        $(heads[i]).addClass("animated rollIn");
      }
    }
  }
});
