var create = function(key, value) {
  return window.localStorage.setItem(key, value);
}

var getItemCount = function() {
  return window.localStorage.length;
}

var clear = function() {
  return window.localStorage.clear();
}

$(document).ready(function(){

$('.submit').click(function(){
	var key = JSON.stringify(getItemCount());
	var value = JSON.stringify($('#memory').val())
	create(key, value)
	$('#memory').val("")
})

$('.clear').click(function(){
	clear()
})

	// variables
	var width = 1050;
	var timeFrame = 750;
	var pause = 3000;
	var currentSlide = 1;
	// cache dom
	var $slider = $('#slider');
	var $slideContainer = $('.slides', $slider);
	var $slides = $('.slide', $slider);
	var interval;

	// functions youtube...
	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-='+width}, timeFrame, function() {
				if (++currentSlide === $slides.length) {
					 currentSlide = 1;
					 $slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function pauseSlider() {
		clearInterval(interval);
	}

	// call functions
	$slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
  startSlider()
});




  //   "Keystone.jpeg",
  //   "Plane.jpeg",
  //   "Thailand.jpeg",
  //   "Traffic.jpeg",














