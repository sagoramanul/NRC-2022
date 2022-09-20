/*==================
Latest-news Section
==================*/

$(document).ready(function() {
    $('#news-slider').owlCarousel({
		loop:true,
		autoPlay:true,
		autoplayTimeout:3000,
		margin:10,
	    nav:true,
		responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }  
    });
});


/*==================================
 Tab Section Functional Using JQury
 ==================================*/

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    }  
	});
})


/*=========
Cowntdown
 =========*/

  // Set the date we're counting down to
  var countDownDate = new Date("Oct 17, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
	document.getElementById("hours").innerHTML = "00";
	document.getElementById("minutes").innerHTML = "00";
	document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);


