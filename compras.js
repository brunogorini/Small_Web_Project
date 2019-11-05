/* Compras (QUESTÃO 4) */

//Vetores

var tabApar = new Array(6);

tabApar[0] = ["Moto G5 32GB", 969];
tabApar[1] = ["Moto Z2 64GB", 1999];
tabApar[2] = ["Zenphone 3 16GB", 797];
tabApar[3] = ["Galaxy J5 16GB ", 673];
tabApar[4] = ["Galaxy J7 32GB", 1140];
tabApar[5] = ["IPhone 7 32GB", 3499];

var tabAcess = new Array(2);

tabAcess[0] = ["Powerbank Pineng 10000mah Pn-951", 53];
tabAcess[1] = ["Tp-Link 10400mah Tl-Pb10400", 99];
tabAcess[2] = ["Powerbank Pineng 10000mah Pn-968", 53];
tabAcess[3] = ["Micro Sd 128gb Sandisk Extreme", 599];
tabAcess[4] = ["Micro Sd 64gb Samsung", 369];

//Funcões de seleção de produtos (aparelhos e acessórios)

function selApar(sel) {
	var showcar = document.getElementById("selecionados");
	var total = document.getElementById("valor");
	var ns = sel.selectedIndex;
	
	//Se nenhum item foi selecionado, textarea fica vazia
	if ( ns == 0 ) {
	showcar.innerHTML = "";
	return;
	}
	
	//Adicionar item selecionado em textarea
	var selected = sel.options[ns].value;
	
	showcar.value += tabApar[selected][0] + "\n";
	
	//Adicionar valor de item selecionado
	var x = +document.getElementById("valor").value;
    var y = +tabApar[selected][1];
    x = x + y;
	
	//Mostrar valor total de itens selecionados
	total.value = x;
	
	//Retornar campo ao valor defaut após seleção
	document.getElementById("aparelhos").value = "defaultValue";		
}

function selAcess(sel) {
	var showcar = document.getElementById("selecionados");
	var total = document.getElementById("valor");
	var ns = sel.selectedIndex;
	
	//Se nenhum item foi selecionado, textarea fica vazia
	if ( ns == 0 ) {
	showcar.innerHTML = "";
	return;
	}
	
	//Adicionar item selecionado em textarea
	var selected = sel.options[ns].value;
	
	showcar.value += tabAcess[selected][0] + "\n";
	
	//Adicionar valor de item selecionado
	var x = +document.getElementById("valor").value;
    var y = +tabAcess[selected][1];
    x = x + y;
	
	//Mostrar valor total de itens selecionados	
	total.value = x;	
	
	//Retornar campo ao valor defaut após seleção
	document.getElementById("acessorios").value = "defaultValue";		
}

//Função para limpar textarea e valor total
function remove() {
	var showcar = document.getElementById("selecionados");
	var total = document.getElementById("valor");
	showcar.value = "";
	total.value = "";
}