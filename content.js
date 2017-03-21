var elements = document.getElementsByClassName('move');

if (elements.length > 0){
	var partida = "";
	var nro_mov = 1;

	for (var i = 0; i < elements.length; i++) {
		if (i % 2 == 0){
			partida += nro_mov + ". "+(elements[i].innerHTML.trim())+" ";
			nro_mov++;
		} else {
			partida += (elements[i].innerHTML.trim())+" ";
		}

	}
	alert(partida);
	console.log(partida);
} else {
	alert("Juego no encontrado. chess24.com?");
}



