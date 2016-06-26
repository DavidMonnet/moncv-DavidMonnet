$(document).ready(function(){
	/*SMOOTH-SCROLL-DOWN*/
	'use strict';
	$('a').smoothScroll();
	
	/*AFFICHAGE DU CHARTS SIMPLES*/ 
	//Doughnut chart
	var data = {
		labels: [
			'What I already know',
		],
		datasets: [
			{
				data: [80, 20],
				backgroundColor: [
					'#0258D1',  //#36A2EB (bleu plus clair)
					'#f4f4f4'
				],
				hoverBackgroundColor: [
					'#0258D1',
					'#f4f4f4'
				],
				hoverBorderColor: [
					'#f4f4f4',
					'#f4f4f4'
				],
				borderColor:[
					'#f4f4f4',
					'#f4f4f4'
				],
			}]
	};
	var cty = document.getElementById('myChartDoughnut');
	var myDoughnutChart = new Chart(cty, {
		type: 'doughnut',
		data: data,
		//options: options
	});
});
