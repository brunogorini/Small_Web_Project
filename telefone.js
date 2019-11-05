/* Telefone: crítica de campo (QUESTÃO 3) */

function criticaTel(campo) {
	// String com o telefone
	var telefone = campo.value;
	// 8 Caracteres
	var numCar = telefone.length;
	// Se o usuário não digitou 8 caracteres
	if ( telefone.length != 8 ) {
		alert("Telefone tem de ter 8 dígitos!");
		return false;
	}
	// Se são caracteres entre 0 e 9
	var i, car;
	for ( i = 0; i < 8; i++ ) {
		car = telefone.charAt(i);
		if ( (car < '0') || (car > '9')) {
			alert("Telefone só pode ter dígitos, caracter " +
			car + " inválido!");
			return false;
		}
	}
	return true;
}