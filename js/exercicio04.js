function executarExercicio04(){
    alert(")Faça um programa que receba três notas de um aluno e exiba a média aritmética.")

    let valor=[], media = 0

    for(let i = 0; i<=2; i++){
        valor[i]=parseFloat(prompt("Digite a nota " + (i+1)))
        media+=valor[i]
    }

    media = media/valor.length

    alert("A media é: " + media)
}