$(function(){
	$(".scroll-icon").click(function(){
		$("html,body").animate({
			scrollTop:$("#section-01").offset().top
		},"500");
		return false;
	});

	// var placeHolder = $("#placeholder-0" + 2);
	// var input = $("#input-0" + 2);

	// placeHolder.click(function(){
	// 	input.focus();
	// 	placeHolder.animate({
	// 		top: '42px', // -20
	// 		fontSize: '0.8em'
	// 	}, "500");
	// });

	// input.focus(function(){
	// 	placeHolder.animate({
	// 		top: '42px', // -20
	// 		fontSize: '0.8em'
	// 	}, "500");
	// });

	// input.focusout(function(){
	// 	field = input.val();
	// 	if(field.length < 1){
	// 		placeHolder.animate({
	// 				top: '67px', // 5
	// 			fontSize: '1em'
	// 		}, "500");
	// 	}
	// });

for(var i = 1; i < 7; i++){
	(function (e) {
        var placeHolder = $("#placeholder-0" + e);
		var input = $("#input-0" + e);

		placeHolder.click(function(){
			input.focus();
			if(e%2 == 0){
				placeHolder.animate({
					top: '42px',	
					fontSize: '0.8em'
				}, "500");
			} else {
				placeHolder.animate({
					top: '-20px',	
					fontSize: '0.8em'
				}, "500");
			}
		});

		input.focus(function(){
			if(e%2 == 0){
				placeHolder.animate({
					top: '42px',	
					fontSize: '0.8em'
				}, "500");
			} else {
				placeHolder.animate({
					top: '-20px',	
					fontSize: '0.8em'
				}, "500");
			}
		});

		input.focusout(function(){
			field = input.val();
				if(field.length < 1){
					if(e%2 == 0){
					placeHolder.animate({
						top: '67px',	
						fontSize: '1em'
					}, "500");
				} else {
					placeHolder.animate({
						top: '5px',	
						fontSize: '1em'
					}, "500");
				}
			}
		});
    })(i);


	// var placeHolder = $("#placeholder-0" + e);
	// var input = $("#input-0" + e);

	// placeHolder.click(function(){
	// 	input.focus();
	// 	placeHolder.animate({
	// 		top: '-20px',
	// 		fontSize: '0.8em'
	// 	}, "500");
	// });

	// var field;

	// input.focus(function(){
	// 	placeHolder.animate({
	// 		top: '-20px',
	// 		fontSize: '0.8em'
	// 	}, "500");
	// });

	// input.focusout(function(){
	// 	field = input.val();
	// 	if(field.length < 1){
	// 		placeHolder.animate({
	// 			top: '5px',
	// 			fontSize: '1em'
	// 		}, "500");
	// 	}
	// });
}
});