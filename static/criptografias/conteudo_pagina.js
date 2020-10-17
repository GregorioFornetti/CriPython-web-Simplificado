let texto_paginas

document.addEventListener('DOMContentLoaded', () => {
    texto_paginas = document.querySelector('#textos-pagina')
})

function carregar_home_page() {
    limpar_containers()
    carregar_textos_pagina({
        'Introdução': `
        Cripythongraphy-web é a versão web de um projeto sobre criptografia que tem o intuito de traduzir ou encriptar mensagens.
        O usuário que estiver usando o programa tem liberdade para escolher uma das cifras disponíveis e utiliza-la
        para encriptar/traduzir um texto, podendo ver na prática como que funcionam algumas cifras. Além disso,
        nesse programa existem os utilitários, que são implementações que tentam desvendar uma mensagem encriptada
        sem a sua chave de tradução. E para finalizar, outro objetivo desse projeto é explicar um pouco sobre o assunto
        cifras de criptografia.`,
    
        'Adicionais da versão web':`
        Na versão web, diferente da versão desktop, é possível cadastrar uma conta para poder gravar alguns dados, como por exemplo
        chaves padrões (que podem ser utilizadas para encriptar ou traduzir mensagens sem precisar escrever novamente a chave), temas
        e idiomas. Ao acessar novamente sua conta, ou acessar em um computador diferente, seus dados continuarão salvos !`,
    
        'Outras informações': `
        Caso tenha interesse em conhecer a versão aplicativo desktop do Cripythongraphy, <a href='https://github.com/GregorioFornetti/Cripythongrafia'>
        Clique aqui</a> para acessar o repositório do github desse arquivo`
        })
}

function carregar_textos_pagina(textos_json) {
    for (chave in textos_json) {
        let container_textos = document.createElement('div');
        container_textos.className = 'container-textos-pagina';

        let titulo = document.createElement('h1');
        titulo.innerHTML = chave;
        titulo.className = 'titulos-pagina';
        container_textos.append(titulo);

        let texto = document.createElement('h');
        texto.innerHTML = textos_json[chave];
        texto.className = 'textos-pagina';
        container_textos.append(texto);

        texto_paginas.append(container_textos);
    }
}

function limpar_containers() {
    document.querySelector('.container-cifras').innerHTML = ''
    texto_paginas.innerHTML = ''
}