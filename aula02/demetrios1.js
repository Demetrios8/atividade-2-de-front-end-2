
let naulas = parseFloat(prompt("Digite o número de aulas que você tem no semestre: "));
let faulas = parseFloat(prompt("Digite o número de faltas do aluno: "));
let frequencia = ((naulas - faulas) / naulas) * 100;
let p1 = parseFloat(prompt("Informe a nota da primeira prova: "));
let p2 = parseFloat(prompt("Informe a nota da segunda prova: "));
 
let media = (p1 + p2) / 2
let reposicao = null;
let situacao = "";
let fmedia = media; 
 
if (frequencia < 75) {
    situacao = "Reprovado por falta";
} else {
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
        
        reposicao = parseFloat(prompt("Digite a nota da reposição: "));
        
        fmedia = (media + reposicao) / 2;
        if (fmedia >= 5) {
            situacao = "Aprovado em recuperação";
        } else {
            situacao = "Reprovado após recuperação";
        }
    } else {
        situacao = "Reprovado por nota";
    }
}
 
console.log("O número de aulas no semestre é:", naulas);
console.log("O número de faltas do aluno neste semestre é:", faulas);
console.log("A frequência do aluno é:", frequencia, "%");
 
console.log("A primeira nota do aluno é:", p1);
console.log("A segunda nota do aluno é:", p2);
 

if (reposicao !== null) {
    console.log("A nota de reposição do aluno é:", reposicao);
}
 
console.log("A média final do aluno é:", fmedia);
console.log("A situação do aluno é:", situacao);