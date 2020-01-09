$(document).ready(function(){
	var count = 0;
	$("#welcomeTxt1").toggleClass("animate").delay(200).promise().done(function() {
		console.log("done")
		$("#welcomeTxt2").toggleClass("animate").delay(200).promise().done(function(){
			console.log("done")
				$("#welcomeTxt3").toggleClass("animate");
		});
	});
	$("#downBtn").click(function(){
		$("#welcomeTxt1").fadeOut();
		$("#welcomeTxt2").fadeOut();
		$("#welcomeTxt3").fadeOut();
		$([document.documentElement, document.body]).animate({
				scrollTop: $(".mainDiv").offset().top
			}, 1000);
		$(this).fadeOut()
		$("#upBtn").fadeIn()
	})
	$("#upBtn").click(function(){

			$([document.documentElement, document.body]).animate({
				scrollTop: $(".mainDiv").offset().top
	}, 1000,function(){
		$("#welcomeTxt1").show()
		$("#welcomeTxt2").show()
		$("#welcomeTxt3").show()
	});
		$(this).fadeOut();
		$("#downBtn").fadeIn();
	})
});
var fixed = document.getElementById('canvas');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);
