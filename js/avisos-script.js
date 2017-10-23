$(document).ready(function(){
	$('#btn-cargar-mas').click(function(e){
		e.preventDefault();
		$('.contenedor-oculto:hidden').slice(0, 3).slideDown().css('display', 'block');
		if($('.contenedor-oculto:hidden').length == 0){
			$('#btn-cargar-mas').fadeOut('fast');
		}
		$('html,body').animate({
            scrollTop: $(this).offset().top
        }, 'slow');
	});

});