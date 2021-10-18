
$( document ).ready(function() {

    $('.main__select-all').click(function(){
		$('.main__select-choise').slideToggle(300);
		 $('.main__select-all').toggleClass("active");
			return false;
	});

})
