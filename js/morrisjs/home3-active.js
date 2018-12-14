(function ($) {
 "use strict";
 
	
Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Total',
            Sale: 90,
            Rent: 40
        }, {
            y: 'Supervisores',
            Sale: 50,
            Rent: 70
        }, {
            y: 'Coordenadores',
            Sale: 50,
            Rent: 10
        }, {
            y: 'Gerentes',
            Sale: 75,
            Rent: 25
        }],
        xkey: 'y',
        ykeys: ['Sale', 'Rent'],
        labels: ['Sim', 'Não'],
        barColors:['#006DF0', '#933EC5'],
        hideHover: 'auto',
         barSizeRatio:0.45,
        gridLineColor: '#eef0f2',
        resize: true
    });

	
	
})(jQuery); 