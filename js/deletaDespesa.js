

function deletaElemento(tag, id){
	tag.remove();

	despesas.splice(despesas.findIndex(elemento => elemento.id === id), 1);

	localStorage.setItem("despesas", JSON.stringify(despesas));
}