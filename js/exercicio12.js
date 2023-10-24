function executarExercicio12(){
    alert("12)Crie um programa que leia o nome e a idade de três pessoas e exiba a média das idades.")

    let nome = [], idade = [], media=0

    for(let i=0; i<=2; i++){
        nome[i]=prompt("Digite seu nome")
        idade[i]=parseInt(prompt("Digite sua idade " + nome[i]))
        media+=idade[i]

    }

    media = media/idade.length

    alert("A media das idade é:" +media)

}