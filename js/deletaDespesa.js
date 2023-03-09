

function deletaElemento(tag, id, valorRetirado){
	tag.remove();

	despesas.splice(despesas.findIndex(elemento => elemento.id === id), 1);

	total = parseFloat(total) - parseFloat(valorRetirado);
	document.getElementById("calc-total").innerHTML = total.toFixed(2);
	localStorage.setItem("total", JSON.stringify(total.toFixed(2)));
}