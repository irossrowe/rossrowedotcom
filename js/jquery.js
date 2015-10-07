$(document).ready(function() {
	$('.open').click(function() {
		if ($("#hidden-menu").is(":hidden")) {
			$(".open").hide().show();
			// $(".close").show();
			$("#hidden-menu").slideDown("slow");
		}else{
			$("#hidden-menu").slideUp("slow");
		}
	});
});



