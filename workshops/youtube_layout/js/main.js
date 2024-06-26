const contenedor = document.querySelector('#contenedor')

// activar o desactivar menu lateral
document.querySelector('#boton-menu').addEventListener('click', ()=>{
    contenedor.classList.toggle('active')
})

// verificar que el tamaño sea menor a 768 y desactivar menu lateral por defecto
const comprobarAncho = () => {
	if(window.innerWidth <= 768){
		contenedor.classList.remove('active');
	} else {
		contenedor.classList.add('active');
	}
}

comprobarAncho(); // cuando carga la pagina tambien comprueba el ancho

window.addEventListener('resize', () => {
	comprobarAncho();
});