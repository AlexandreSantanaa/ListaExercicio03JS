function executarExercicio23(){
    alert("23)Crie um programa que imprima a sequência de Fibonacci até o n-ésimo termo, sendo n informado pelo usuário. ")

    let termo01=1, termo02=1, termoN=0,
    numero = parseInt(prompt("Digite o termo de fibonacci desejado"))

    for(let i = 0; i<numero; i++){
        termoN=termo01
        console.log(termo01)

        termo01 = termo02
        termo02 = termo01 + termoN
    }
}