/* Aparelhos (QUESTÃO 1)*/

//Vetores
var tabFabricantes = new Array(4);

tabFabricantes[0] = ["Motorola", 500, 500, "MotoG5" ];
tabFabricantes[1] = ["Asus", 500, 470, "AsusZen3" ];
tabFabricantes[2] = ["Samsung", 500, 500, "SamsungJ7" ];
tabFabricantes[3] = ["Apple", 500, 470, "Iphone7" ];

var tabProdutos = new Array(4);

tabProdutos[0] = [ ["Moto G5 32GB", 969], ["Moto Z2 64GB", 1999] ];
tabProdutos[1] = [ ["Zenphone 3 16GB", 797] ];
tabProdutos[2] = [ ["Galaxy J5 16GB ", 673], ["Galaxy J7 32GB", 1140] ];
tabProdutos[3] = [ ["IPhone 7 32GB", 3499] ];

//Função para mostrar aparelhos em popup
function MostraProdutos(fabricante) {
	var jan = window.open("", tabFabricantes[fabricante][0], "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" + tabFabricantes[fabricante][1] + ",height=" + tabFabricantes[fabricante][2] + "");
	with (jan.document) {
		write ("<html><head><title>O Cel é o limite</title>");
		write("<link rel='stylesheet' type='text/css'");
		write(" href='aparelhos_popup.css'>");
		write("</head><body>");
		write("<h2>", tabFabricantes[fabricante][0], "</h2>");
		write("<div class='aparelho'>");
		write("<img src='imagens/", tabFabricantes[fabricante][3], ".jpg' />");
		write("</div><ul>");
		for (i = 0; i < tabProdutos[fabricante].length; i++)
		write("<li>", tabProdutos[fabricante][i][0], " - R$ ", tabProdutos[fabricante][i][1], ",00</li>");
		write("</ul>");
		write("<form><input type='button' value='Fechar' ");
		write("onClick='window.close();'/>");
		write("</form></body></html>");
		close();
	}
}