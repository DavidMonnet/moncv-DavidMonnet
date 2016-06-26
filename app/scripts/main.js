$(document).ready(function(){
	/*SMOOTH-SCROLL-DOWN*/
	'use strict';
	$('a').smoothScroll();
	
	/*GENERATION DU CHART A PARTIR DE LA PROGRESS-BAR*/
	$('.progress-bar').each(function(){
		var val= $(this).attr('aria-valuenow');  //on stock la valeur de aria-valuenow --> le pourcentage rempli sur la progress bar
		var color= $(this).css('background-color'); //on récupère la couleur actuel de la progress bar parcouru
		var canvas = $('<canvas> </canvas>');  //création du canvas pour le donut
		$(this).parent().replaceWith(canvas);  //on était actuellement au niveau enfant, on doit mtn remonter pour accéder au niveau parent et remplacer tout ce bloc (<div class="progress">)
	
		var myOtherDoughnutChart = new Chart(canvas, {
			type: 'doughnut',
			data: {
				labels: [val + ' %'],  //? à tester
				datasets: [{
						data: [val, 100-val],
						backgroundColor: [
							color, //"#0258D1",  //#36A2EB (bleu plus clair)
							'#f4f4f4'
						],
						hoverBackgroundColor: [
							color, //"#0258D1",
							'#f4f4f4'
						],
						hoverBorderColor: [
							'#f4f4f4',
							'#f4f4f4'
						],
						borderColor:[
							'#f4f4f4',
							'#f4f4f4'
						]
				}]
			}
		});
	});

	/*RETURN ON TOP BUTTON*/
    $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');
    
    $('#returnOnTop').click( function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
});

/*RETURN ON TOP BUTTON*/
$(window).scroll(function() {
    // If on top fade the bouton out, else fade it in
    if ( $(window).scrollTop() == 0 )
        $('#returnOnTop').fadeOut();
    else
        $('#returnOnTop').fadeIn();
});