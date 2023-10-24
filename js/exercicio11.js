function executarExercicio11(){
    alert("11)Escreva um programa que leia o nome de um produto e o seu preço, e exiba uma mensagem informando o nome do produto e o preço com 10% de desconto.")

    let nome = prompt("Digite o nome do produto")
    let valor = prompt("Digite o valor do produto " + nome)
    let desconto = valor - valor*0.01

    alert("Porduto com 10% de desconto:"+desconto)
}