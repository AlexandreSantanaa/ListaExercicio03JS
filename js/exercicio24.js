function executarExercicio24(){
    alert("24)Faça um programa que receba o salário de um funcionário e calcule o novo salário com um aumento de 10%. ")

    let salario = parseFloat(prompt("Digite um salario"))
    let aumento = salario + salario*0.01

    alert("Salario com aumento = " + aumento)
}