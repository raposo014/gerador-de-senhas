const slider = document.querySelector('.slider');
const text = document.querySelector('.valor');
const button = document.querySelector('.g')
const result = document.querySelector('.password');
const copy = document.querySelector('.copy');
const random = ['0','a','1','a','2','b','3','c','4','d','5','e','6','f','7','g','8','h','9','i','0','j','1','k','2','l','3','m','4','n','5','o','6','p','7','q','8','r','9','s','0','t','1','u','2','v','3','w','4','x','5','y','6','z','7']
const valoresAleatorios = new Uint32Array(1);
const min = 1;
const max = 55;
var i;
let senha = ''

slider.addEventListener('input', function() {
    text.innerHTML = `tamanho: ${slider.value} caracteries`
})

button.addEventListener('click', senha = function gerar(){
 result.style.display = 'block'
 senha = ''

 for(i=0; i<slider.value; i++) {
 const n = Naleatorio() %random.length
 const num = random[n]
 senha += num;
 result.innerHTML = senha
 }

 console.log(senha);
 return senha;
}
)

function Naleatorio() {
    window.crypto.getRandomValues(valoresAleatorios);
    const numeroAleatorio = valoresAleatorios[0];
    const numeroNoIntervalo = min + (numeroAleatorio % (max - min + 1));
    return numeroNoIntervalo;
}

function copiar() {
copy.style.display = 'block'
}

function sumir() {
copy.style.display = 'none'
copy.innerHTML = 'clique aqui para copiar'
}

copy.addEventListener('click', function() {
navigator.clipboard.writeText(senha).then(() => {
    copy.innerHTML = 'texto copiado com sucesso'
    console.log('texto copiado')
}) 
})