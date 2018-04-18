$(function(){
	console.log('hello')

	$("#navAbout").click(function (event) {
    $("#about").show();
    $("#residential, #commercial").hide();
});
$("#navMenu").click(function (event) {
    $("#menu").show();
    $("#about, #home").hide();
});
$("#navAbout").click(function (event) {
    $("#about").show();
    $("#home, #menu").hide();
});

	function callPage(pageRefInput) {

		$.ajax({
			url: pageRefInput,
			type: 'GET',
			dataType: 'html',

			success: function(res){
				$('.content').html(res);
				showDonor();
				showCharity();
			},
			error: function(err) {
				console.log('page not loaded: ', err)
			},

			complete: function( xhr, status) {
			}


		})
	}
	$('body').on('click', '#about', function(){
		console.log('test')
	})

	$('body').on('click','#view',function(e){
	callPage('search.html')
});

})