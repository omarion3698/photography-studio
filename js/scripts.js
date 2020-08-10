let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
  for(let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener('click', function() {
  if(current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener('click', function() {
  if(current === sliderImages.length - 1) {
    current = -1
  }
  slideRight();
});

startSlide();

$(document).ready(function() {
  $("inform#contact").submit(function(event) {
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
      alert (name + ", we have received your message. Thank you for contacting us.");
    }
    else {
      alert ("Please enter your name and email!");
    }
    event.preventDefault(event);
  });
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})