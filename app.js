const input = document.querySelector('#input');
const outinput = document.querySelector('#out-input');

function criptografar() {
    let texto = input.value;
    let resuldCripto = texto.replace(/e/g, 'ente').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('out-input').innerHTML = '<section id="out-input">' + resuldCripto + '<button class="btn-copiar" onclick="copytext()">Copiar</button>' + '</section>';
    outinput.value = resuldCripto
}

function descriptografar() {
    let texto = input.value;
    let resulDescripto = texto.replace(/ente/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    
    document.getElementById('out-input').innerHTML = '<section id="out-input">' + resulDescripto + '<button class="btn-copiar" onclick="copytext()">Copiar</button>' + '</section>';

    outinput.value = resulDescripto
}


function copytext() {
    navigator.clipboard.writeText(outinput.value).then(() =>{
        alert('Texto copiado')
    })
}