$(function(){
	console.log('hello')

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
  $('.parallax').parallax();
  $('select').material_select();
  $('.carousel').carousel({
    shift: -50
  });
      $('.modal').modal();
      $('.collapsible').collapsible();
      $(".button-collapse").sideNav();

// ----****----SPA Nav Section

	$("#navAbout").click(function (event) {
    $("#aboutSection").show();
    $("#mainSection,#residentialSection, #commercialSection, #locationsSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});

	$("#sidenavAbout").click(function (event) {
    $("#aboutSection").show();
    $("#mainSection,#residentialSection, #commercialSection, #locationsSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});

	$("#navResidential").click(function (event) {
    $("#residentialSection").show();
    $("#mainSection, #aboutSection, #commercialSection, #locationsSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});	
	$("#sidenavResidential").click(function (event) {
    $("#residentialSection").show();
    $("#mainSection, #aboutSection, #commercialSection, #locationsSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});	

	$("#navCommercial").click(function (event) {
    $("#commercialSection").show();
    $("#mainSection, #aboutSection, #residentialSection, #locationsSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});
	$("#sidenavCommercial").click(function (event) {
    $("#commercialSection").show();
    $("#mainSection, #aboutSection, #residentialSection, #locationsSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});

	$("#navLocations").click(function (event) {
    $("#locationsSection").show();
    $("#mainSection,#aboutSection, #residentialSection, #commercialSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});	
	$("#sidenavLocations").click(function (event) {
    $("#locationsSection").show();
    $("#mainSection,#aboutSection, #residentialSection, #commercialSection, #ctlaundrySection, #spincycleSection, #faqSection ").hide();
});	

	$("#navFAQ").click(function (event) {
    $("#faqSection").show();
    $("#mainSection,#aboutSection, #residentialSection, #commercialSection, #locationsSection, #ctlaundrySection, #spincycleSection").hide();
});

	$("#sidenavFAQ").click(function (event) {
    $("#faqSection").show();
    $("#mainSection,#aboutSection, #residentialSection, #commercialSection, #locationsSection, #ctlaundrySection, #spincycleSection").hide();
});

// 	$('body').on('click', '#demoRequest', function(){
//     console.log($('#demoForm').serialize());
//     var formData = $('#demoForm').serialize();
//     $.ajax({
//       type: "POST",
//       url: "/demoRequest",
//       data: formData,
//       success: function (data) {
//         console.log(data, "Successs!!!");
//         $('#demoForm').hide();
//         $('.demoModal-content h4').hide();
//         $('.demoModal-content p').hide();
//         $('.demoModal-footer').hide();
//         $('.demoModal-content').append(`<h5 id="success">Thanks for requesting a demo! We've got your information and will follow up with you soon!</h5>`);
//         setTimeout(function(){
//           $('#demoModal').modal('close');
//         }, 2000);
//       },
//       error: function () {
//         console.log("Internal Server Error");
//       }
//     });
//   })
// });


	// function callPage(pageRefInput) {

	// 	$.ajax({
	// 		url: pageRefInput,
	// 		type: 'GET',
	// 		dataType: 'html',

	// 		success: function(res){
	// 			$('.content').html(res);
	// 			showDonor();
	// 			showCharity();
	// 		},
	// 		error: function(err) {
	// 			console.log('page not loaded: ', err)
	// 		},

	// 		complete: function( xhr, status) {
	// 		}


	// 	})
	// }
	// $('body').on('click', '#about', function(){
	// 	console.log('test')
	// })

	// $('body').on('click','#view',function(e){
	// callPage('search.html')
// });

})