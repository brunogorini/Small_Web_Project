/* Acessorios (QUESTÃO 2) */

//Vetores

var tabCar = new Array(3);

tabCar[0] = ["Powerbank Pineng 10000mah Pn&#x2011;951", "Car_PN951", 53];
tabCar[1] = ["Tp-Link 10400mah Tl&#x2011;Pb10400", "Car_TPLINK", 99];
tabCar[2] = ["Powerbank Pineng 10000mah Pn&#x2011;968", "Car_PN962", 53];

var tabMem = new Array(2);

tabMem[0] = ["Micro Sd 128gb Sandisk Extreme", "Mem_Sandisk_128", 599];
tabMem[1] = ["Micro Sd 64gb Samsung", "Mem_Samsung_64", 369];

//Funções de seleção de acessórios (carregadores e memórias)

function infoCar(sel) {
	var showcar = document.getElementById("descAcess");
	var ns = sel.selectedIndex;
	
	//Se nenhum item foi selecionado, célula fica vazia
	if ( ns == 0 ) {
	showcar.innerHTML = "";
	return;
	}
	
	//Mostrar descrição de item selecionado
	var selected = sel.options[ns].value;
	
	showcar.innerHTML = "<h4>" + tabCar[selected][0] + "</h4>" +	"<img class='imgAcess'src='imagens/" + tabCar[selected][1] + ".jpg' /><br/>" + "<span class='preco'>R$ " + tabCar[selected][2] + ",00 </span><br/>";
	
	//Retornar valor da outra lista para defaut
	document.getElementById("memorias").value = "defaultValue";
}

function infoMem(sel) {
	var showmem = document.getElementById("descAcess");
	var ns = sel.selectedIndex;
	
	//Se nenhum item foi selecionado, célula fica vazia
	if ( ns == 0 ) {
	showmem.innerHTML = "";
	return;
	}
	
	//Mostrar descrição de item selecionado
	var selected = sel.options[ns].value;
	
	showmem.innerHTML = "<h4>" + tabMem[selected][0] + "</h4>" +	"<img class='imgAcess'src='imagens/" + tabMem[selected][1] + ".jpg' /><br/>" + "<span class='preco'>R$ " + tabMem[selected][2] + ",00 </span><br/>";
	
	//Retornar valor da outra lista para defaut
	document.getElementById("carregadores").value = "defaultValue";
}
