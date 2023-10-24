function executarExercicio07(){
    alert("7)Faça um programa que leia o nome e a idade de duas pessoas e exiba uma mensagem indicando quem é a pessoa mais velha. ")

    let nome = [], idade = []

    for(let i=0; i<2; i++){
        nome[i]=prompt("Digite seu nome")
        idade[i]=parseInt(prompt("Digite sua idade " + nome[i]))
    }

    let resposta = (idade[0]>idade[1])?alert(nome[0]+" é mais velha(o)"):(idade[0]<idade[1])?alert(nome[1]+" é mais velha(o)"):alert(nome[0]+" tem idade igual a da(o) " + nome[1])
}