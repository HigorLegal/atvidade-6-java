function calValor(){
let preco = document.getElementById("preco").value;
let quant = document.getElementById("quant").value;

let total = preco * quant;

let valorT =document.getElementById("total");
valorT.textContent="preço final : R$"+total; 
}
function limpar(){
    let preco = document.getElementById("preco");
    let quant = document.getElementById("quant");
    let valorT =document.getElementById("total");
    
    valorT.textContent="preço final : "; 
    quant.value= null ;
    preco.value= null ;
   
    preco.Select();
}