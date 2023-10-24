function executarExercicio10(){
    alert("10)Faça um programa que receba a base e a altura de um triângulo e exiba a sua área. ")

    let altura = parseInt(prompt("Digite a altura do triangulo:"))
    let base = parseInt(prompt("Digite a base do triangulo:"))
    let area = (base*altura)/2
    alert("Area do triangulo " + area)
}