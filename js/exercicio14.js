function executarExercicio14(){
    alert("14)Escreva um programa que leia a base e a altura de um triângulo e exiba o valor da hipotenusa.")

    let altura = parseInt(prompt("Digite a altura do triangulo:"))
    let base = parseInt(prompt("Digite a base do triangulo:"))
    let hipotenusa =Math.sqrt((base/2)**2+altura**2)
    
    alert("Hipotenusa é:"+hipotenusa)
}