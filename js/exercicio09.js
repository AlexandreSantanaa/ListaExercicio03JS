function executarExercicio09(){
    alert("9)Crie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC). ")

    let altura = parseFloat(prompt("Digite sua altura em metros"))
    let peso = parseFloat(prompt("Digite seu peso em KG"))

    let imc = peso/altura**2

    alert("Seu imc é:" + imc)
}