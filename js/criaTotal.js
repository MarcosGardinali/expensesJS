function cria_total(valor){

	total = parseFloat(total) + parseFloat(valor);
	document.getElementById("calc-total").innerHTML = total.toFixed(2);
	localStorage.setItem("total", JSON.stringify(total.toFixed(2)));
}