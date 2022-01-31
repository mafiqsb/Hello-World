// var slideIndex = 0;
// showSlides();



// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", " "); //update dots from active kepada kelabu, update kat console jadi zero dari active
//   }
//   slides[slideIndex - 1].style.display = "block";
//   // dots[slideIndex - 1].className += " active";
//   dots[slideIndex - 1].className = dots[slideIndex - 1].className + " active"; //update dots yang baru jadi active kat console log secara tidak langsung update kat website
//   setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

var slideIndex = 0; 

showSlides();

function showSlides(){

  var i; //(1)
  var slides = document.getElementsByClassName("mySlides"); //(1)
  var dots = document.getElementsByClassName("dot"); // (1)

  for ( i = 0; i < slides.length; i++) {  //(2)
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", ""); //(2)
  }

  slideIndex++; //(3)

  if (slideIndex > slides.length) {
    slideIndex = 1;
  };


  slides[slideIndex - 1].style.display = "block"; // (4)
  dots[slideIndex - 1].className = dots[slideIndex -1 ].className + " active"; //(4)
  setTimeout(showSlides, 4000);
}