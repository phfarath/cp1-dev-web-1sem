alert("Vamos Conhecer Mais Sobre Vinho")
let acertos=0
let erros=0
let q1=prompt("Qual o vinho mais velho do mundo?")
if(q1=="vinho speyer"){
    acertos+=1
}else{
    erros+=1
}
let q2=prompt("Qual o vinho eleito melhor do mundo?")
if(q2=="dominus estate 2018"){
    acertos+=1
}else{
    erros+=1
}
let q3=prompt("Qual o barril mais usado pra envelhecer vinho?")
if(q3=="carvalho frances"){
    acertos+=1
}else{
    erros+=1
}
let q4=prompt("O que muda no vinho o barril usado para envelher?")
if(q4=="notas de baunilha"){
    acertos+=1
}else{
    erros+=1
}
let q5=prompt("Qual o vinho mais caro do mundo?")
if(q5=="romanee-conti"){
    acertos+=1
}else{
    erros+=1
}
let q6=prompt("O que se analisa quando degusta um vinho? ")
if(q6=="visual,olfato,paladar"){
    acertos+=1
}else{
    erros+=1
}
let q7=prompt("Como escolher um vinho?")
if(q7=="sabor e aroma equilibrado"){
    acertos+=1
}else{
    erros+=1
}
let q8=prompt("Como se guarda o vinho?")
if(q8=="ambiente parcialmente escuro"){
    acertos+=1
}else{
    erros+=1
}
let q9=prompt("A idade do vinho o melhora? (1)Sim (2)Nao")
if(q9=="1"){
    acertos+=1
}else{
    erros+=1
}
let q10=prompt("Qual a diferença entre o vinho branco e o tinto?")
if(q10=="a uva"){
    acertos+=1
}else{
    erros+=1
}
document.write("Voce acertou:", acertos);
document.write("<br>")
document.write("Voce errou:", erros);
