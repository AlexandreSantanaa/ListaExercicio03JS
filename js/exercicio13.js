function executarExercicio13(){
    alert("13)Faça um programa que solicite ao usuário um valor em metros e exiba o mesmo valor em centímetros e milímetros.")

    let metros = parseFloat(prompt("Digite um valor em metros:"))
    let centimetros = metros*100
    let milimetros = metros * 1000

    alert("centimetros="+centimetros+"\nmilimetros:"+milimetros)
}