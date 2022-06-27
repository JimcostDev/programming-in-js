$(document).ready(function(){

// Parent - Accedemos al elemento padre desde un elemento hijo
	$('#tercera').parent().css({
		background: '#1b3d82'
	});

// Parents - Accedemos a todos los elementos padre desde un elemento hijo
	$('#tercera').parents();

// Children - Acceder a todos los elementos hihos de un contenedor padre
	// $('#padre').children().fadeOut(5000); // todos
	$('#padre').children('#tercera').fadeOut(1000); // uno

// Find - Encontrar dentro de un contenedor un elemento
	$('#contenedor').find('div.caja').css({
		background: '#000',
		color: '#fff'
	});

// Siblings - Seleccionar todos los elementos que sean hermanos
	$('#tercera').siblings()

// Next - Prev - Seleccionar a un elemento posterior o anterior 
	$('#tercera').prevAll().css({
		background: '#f2f2f2',
		color: '#000'
	});

});