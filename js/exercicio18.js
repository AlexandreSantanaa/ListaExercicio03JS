function executarExercicio18(){
    alert("18)Crie um programa que calcule a média de três notas inseridas pelo usuário e exiba o resultado.")

    let valor=[], media = 0

    for(let i = 0; i<=2; i++){
        valor[i]=parseFloat(prompt("Digite a nota " + (i+1)))
        media+=valor[i]
    }

    media = media/valor.length

    alert("A media é: " + media)
}