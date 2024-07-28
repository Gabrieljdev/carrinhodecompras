let totalGeral = 0;
//o elemento esta cim o valor 0;
// função para limpar o carrinho quando clicae o botão reiniciar
limpar();

function adicionar () {
 //clicla no botão para recepuperar valores, produto e quantidade
 let Produto = document.getElementById('produto').value;
 //recurso split (separa recursos de arrays)
 let nomeProduto = Produto.split('-')[0];
 let valorUnitario = Produto.split('$')[1];
 let quantidade = document.getElementById('quantidade').value;
 //calcular o preço
 let preco = quantidade * valorUnitario;
 let carrinho = document.getElementById('lista-produtos');
 //adicionar ocarrinho
 //concatenação
 carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
 <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">${preco}</span>
</section>`;
 //atualizar o valor total 
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `${totalGeral}`;
//PARA ZERAR A QUANTIDADE 
document.getElementById('quantidade').value = 0;
}

function limpar() {
 totalGeral = 0;
//o elemento esta cim o valor 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$0';

}