$(document).ready(function(){
	$("#generate").click(function(){
		// console.log("clicked it.");
		$.ajax({
		  url: "/pages/bs"
		}).done(function(response) {
		  console.log(response);
		  $("#bs").text(response);
		  $(".hid").show();
		});
	})
});