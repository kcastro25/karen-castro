
function factorial() {
	var numero = parseInt(document.getElementById('numero').value);
	var factorial = 1;
	for (var i = 1; i <= numero; i++) {
   		factorial*=i
	}
	mensaje = document.getElementById('resultado').innerText = 'El resultado es ' + factorial

}