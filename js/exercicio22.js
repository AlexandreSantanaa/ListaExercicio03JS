function executarExercicio22(){
    alert("22)Escreva um programa que calcule o fatorial de um número inteiro informado pelo usuário. ")

    let fatorial = 1
    let numero = parseInt(prompt("Digite um numero"))
    let numero02 =numero

    for(let i = numero; i>0; i--){
        fatorial*=i
    }

    alert("O fatorial do " + numero +" = "+ fatorial)
}