$(document).ready(function(){

// first() - Regresa el primer elemento de varios seleccionados
	$('.caja').first().css({
		background: '#000'
	});

// last() - Regresa el ultimo de varios seleccionados
	$('.caja').last().css({
		background: '#f9a03f'
	});


// eq() - Regresa un elemento en base a un index.
	$('.caja').eq(2).css({
		background: '#f31818'
	});

// filter() - Nos permite filtrar entre los elementos mediante un criterio.
/* Ejemplo:
		Selecciona todas las cajas, despues de esa seleccion solo selecciona la #segunda.
*/

	$('.caja').filter('#segunda').css({
		background: '#29f318'
	});

// not() - Nos regresa los elementos que no concuerdan con el criterio.
	// $('.caja').not('#segunda').css({
	// 	background: '#f9a03f'
	// });

	

	
});