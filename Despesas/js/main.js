const form = document.getElementById("form-despesas");
let total = document.getElementById("calc-total").textContent;
total = JSON.parse(localStorage.getItem("total"))|| 0;
const despesas = JSON.parse(localStorage.getItem("despesas"))||[];
const lista = document.getElementById("lista-de-despesas");
document.getElementById("calc-total").innerHTML = total;


//forEach que percorre os itens do array que está na localStorage e os passa para a função cria elemento, que os cria na página
despesas.forEach( (elemento) => {
	criaDespesa(elemento);
})

form.addEventListener("submit", function(evento){
	evento.preventDefault();
	const nome = evento.target.elements["input-despesa"].value;
	const valor = evento.target.elements["input-valor"].value;


	const despesa_Atual = {
		"nome": nome,
		"valor": valor,
	}

	//Passando o objeto despesa atual para a lista
	despesas.push(despesa_Atual);

	criaDespesa(despesa_Atual);

	localStorage.setItem("despesas", JSON.stringify(despesas));

	form.reset();

	cria_total(valor);
});




function criaDespesa(despesa){
	//Criando uma LI
	const novaDespesa = document.createElement("li");
	novaDespesa.classList.add("item-despesa");

	//Criando o strong que vai na Li
	const valorDaDespesa = document.createElement("strong");
	valorDaDespesa.innerHTML = despesa.valor;
	valorDaDespesa.classList.add("valor-lista");

	//Passando a strong para a li
	novaDespesa.appendChild(valorDaDespesa);
	novaDespesa.innerHTML += despesa.nome;

	//Colocando a Li na lista
	lista.appendChild(novaDespesa);	

}