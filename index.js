$(document).ready(function(){
	var scrollLink = $('.scroll');
	//smooth scrolling:
	scrollLink.click(function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop:$(this.hash).offset().top - 40 //how far away from the top is this section
		},2500);										//then bring the scroll bar to the current position
	});	
	//change color when item is clicked
	$('.navbar > .navbar-nav > li > .active').click(function(){
		$('.navbar > .navbar-nav > li > .active ').removeClass('current');
		$('.navbar > .navbar-nav > li > .active').addClass('current');
	});
		
});