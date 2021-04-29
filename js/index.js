$(function() {

	$(".pannel2 .part3 .two-links a").hover(function(){
		$(this).addClass('tada animated infinite');
	},function(){
		$(this).removeClass('tada animated infinite');
	});

});

function scroll_to(classname) {

	s_t = $(document).scrollTop();
	n_t = $("." + classname).offset().top

	if (s_t > n_t) {
		var src_f = setInterval(function() {

			$(document).scrollTop(s_t);
			if (s_t < n_t) {
				s_t -= 100;
				$(document).scrollTop(s_t);
				clearInterval(src_f);
			}
			s_t -= 20;
			// console.log(s_t)
		}, 1)
	} else {
		var src_f = setInterval(function() {

			$(document).scrollTop(s_t);
			if (s_t > n_t) {
				s_t -= 100;
				$(document).scrollTop(s_t);
				clearInterval(src_f);
			}
			s_t += 20;
			// console.log(s_t)
		}, 1)
	}
};
