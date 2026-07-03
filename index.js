const senha=document.getElementById("senha");
const tamanho=document.getElementById("tamanho");
const valor=document.getElementById("valor");

const mai=document.getElementById("maiusculas");
const min=document.getElementById("minusculas");
const num=document.getElementById("numeros");
const simb=document.getElementById("simbolos");

const gerar=document.getElementById("gerar");
const copiar=document.getElementById("copiar");

const nivel=document.getElementById("nivel");
const texto=document.getElementById("textoForca");

valor.textContent=tamanho.value;

tamanho.oninput=()=>{
    valor.textContent=tamanho.value;
}

function gerarSenha(){

let caracteres="";

if(mai.checked) caracteres+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(min.checked) caracteres+="abcdefghijklmnopqrstuvwxyz";
if(num.checked) caracteres+="0123456789";
if(simb.checked) caracteres+="!@#$%&*()_-+=?><{}[]";

if(caracteres===""){
    alert("Selecione pelo menos uma opção.");
    return;
}

let pass="";

for(let i=0;i<tamanho.value;i++){
    pass+=caracteres.charAt(Math.floor(Math.random()*caracteres.length));
}

senha.value=pass;

avaliar(pass);

}

function avaliar(pass){

let pontos=0;

if(pass.length>=8)pontos++;
if(pass.length>=12)pontos++;
if(/[A-Z]/.test(pass))pontos++;
if(/[a-z]/.test(pass))pontos++;
if(/[0-9]/.test(pass))pontos++;
if(/[^A-Za-z0-9]/.test(pass))pontos++;

if(pontos<=2){
    nivel.style.width="30%";
    nivel.style.background="red";
    texto.textContent="Fraca";
}
else if(pontos<=4){
    nivel.style.width="65%";
    nivel.style.background="orange";
    texto.textContent="Média";
}
else{
    nivel.style.width="100%";
    nivel.style.background="#00ff99";
    texto.textContent="Muito Forte";
}

}

gerar.onclick=gerarSenha;

copiar.onclick=()=>{

    if(!senha.value) return;

    navigator.clipboard.writeText(senha.value);

    copiar.textContent="Copiado!";

    setTimeout(()=>{
        copiar.textContent="Copiar";
    },1500);

}

gerarSenha();
