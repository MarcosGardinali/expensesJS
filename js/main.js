const form = document.getElementById("form-despesas");
let total = document.getElementById("calc-total").textContent;
total = JSON.parse(localStorage.getItem("total"))|| 0;
const despesas = JSON.parse(localStorage.getItem("despesas"))||[];
const lista = document.getElementById("lista-de-despesas");
document.getElementById("calc-total").innerHTML = total;

console.log("...1")

//forEach que percorre os itens do array que está na localStorage e os passa para a função cria elemento, que os cria na página
despesas.forEach( (elemento) => {
	criaDespesa(elemento);
})

form.addEventListener("submit", function(evento){
	evento.preventDefault();
	const nome = evento.target.elements["input-despesa"].value;
	const valor = evento.target.elements["input-valor"].value;

	const existe = despesas.find( elemento => elemento.nome === nome.value);

	const despesa_Atual = {
		"nome": nome,
		"valor": valor,
	}

	if(existe){
		despesa_Atual.id = despesa.id
	}else{
		despesa_Atual.id = despesas.length
		//Passando o objeto despesa atual para a lista
		despesas.push(despesa_Atual);

		criaDespesa(despesa_Atual);
	}

	localStorage.setItem("despesas", JSON.stringify(despesas));

	form.reset();

	cria_total(valor);
});

lista.addEventListener("dblclick", function(evento, despesa){
	let alvo = event.target;

	alvo.deletaElemento(this.parentNode, despesa.id, despesa.valor);
	console.log(despesa.id);
});




function criaDespesa(despesa){
	//Criando uma LI
	const novaDespesa = document.createElement("li");
	novaDespesa.classList.add("item-despesa");

	//Criando o strong que vai na Li
	const valorDaDespesa = document.createElement("strong");
	valorDaDespesa.innerHTML = despesa.valor;
	valorDaDespesa.classList.add("valor-lista");
	valorDaDespesa.dataset.id = despesa.id;


	//Passando a strong para a li
	novaDespesa.appendChild(valorDaDespesa);
	novaDespesa.innerHTML += despesa.nome;

	//Colocando a Li na lista
	lista.appendChild(novaDespesa);	

}