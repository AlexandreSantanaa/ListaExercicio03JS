function executarExercicio21(){
    alert("21)Faça um programa que receba três valores e verifique se eles podem formar um triângulo. Caso afirmativo, indique se é um triângulo equilátero, isósceles ou escaleno")

    let ladoTriangulo=[]

    for(let i=0; i<=2;i++){
        ladoTriangulo[i]= parseInt(prompt("Digite o lado " + (i+1) + " do triangulo"))
    }

    let resposta=(ladoTriangulo[0] + ladoTriangulo[1] > ladoTriangulo[2] &&
        ladoTriangulo[1] + ladoTriangulo[2] > ladoTriangulo[0] &&
        ladoTriangulo[2] + ladoTriangulo[0] > ladoTriangulo[1])?
        (ladoTriangulo[0] === ladoTriangulo[1] && ladoTriangulo[1] === ladoTriangulo[2])?alert("equilatero"):(ladoTriangulo[0] === ladoTriangulo[1] || ladoTriangulo[1] === ladoTriangulo[2] || ladoTriangulo[2] === ladoTriangulo[0])?alert("isoceles"):alert("escaleno"):alert("Não é um triangulo")

      
}