$(document).ready(function(){

	$('#button').click(function(){
		event.preventDefault();
		$('#plateOutput').empty();

		var value = $('#plate').val();
		if(value.length === 0){
			$("label[for='plate']").append("<span class='errors'>Please Input a value</span>");
			return;
		}
		for (var i = 0; i < value.length; i++) {
			$('#plateOutput').append("<div class='platebox'>"+value[i].toUpperCase()+"</div>");
		};
		var price = 5;
		var totalPrice = value.length * price;
		$("#Total").text(totalPrice);
		$("#output").show();

	});

});