
const addloading = () => {  
    botao.innerHTML = '<img src="../paginas/imagens/loading.png" class="loading"></img>';
}

const removeloading = () => {  
    botao.innerHTML = 'Enviar';
}


const envioSubmit = (event) => {
    event.preventDefault();
    addloading();

    const nome = document.querySelector('input[nome=nome]').value;
    const email = document.querySelector('input[nome=email]').value;
    const mensagem = document.querySelector('input[nome=mensagem]').value;

    fetch('https://api.sheetmonkey.io/form/3Fc3Fv5eT8H5hhsKujKRmK', {

    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, mensagem }),
    }).then(() => removeloading())
}

document.querySelector('#formulario').addEventListener('submit', envioSubmit)