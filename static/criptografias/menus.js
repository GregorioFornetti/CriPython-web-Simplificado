
let container_cifras

document.addEventListener('DOMContentLoaded', () => {
    container_cifras = document.querySelector('.container-cifras')
})

function criar_titulo(nome_titulo, traduc_encript=true) {
    // Criando container titulo
    let largura_tela_atual = window.innerWidth
    let container_titulo = document.createElement('div')
    container_titulo.className = 'box-titulo'
    // Criando texto titulo
    let titulo = document.createElement('h')
    titulo.className = 'titulo-cifra'
    titulo.innerText = nome_titulo
    container_titulo.append(titulo)

    if (traduc_encript) {  // Criar seleção de opções (radio: encriptação ou tradução)
        let container_radio = document.createElement('div')
        container_radio.className = 'box-radio-titulo'
        // Criar barra de separação do titulo das opções
        if (largura_tela_atual > 700) {
            let separador = document.createElement('h')
            separador.className = 'titulo-cifra'
            separador.style.marginLeft ='70px'
            separador.innerText = '|'
            container_titulo.append(separador)
        }
        let separador = document.createElement('h')
        separador.className = 'titulo-cifra'
        separador.style.marginLeft ='70px'
        separador.innerText = '|'
        // Criando texto(label) encriptação
        let texto_encript = document.createElement('h')
        texto_encript.className = 'texto-radio-titulo'
        texto_encript.innerText = 'encriptação'
        // Criando radio encriptação
        let radio_encript = document.createElement('input')
        radio_encript.className = 'radio-cifra'
        radio_encript.type = 'radio'
        radio_encript.name = 'modo'
        radio_encript.id = 'encript'
        radio_encript.checked = true;
        // Criando texto(label) tradução
        let texto_traduc = document.createElement('h')
        texto_traduc.className = 'texto-radio-titulo'
        texto_traduc.style.marginLeft = '40px'
        texto_traduc.innerText = 'tradução'
        // Criando radio tradução
        let radio_traduc = document.createElement('input')
        radio_traduc.className = 'radio-cifra'
        radio_traduc.type = 'radio'
        radio_traduc.name = 'modo'
        radio_traduc.id = 'traduc'
        // Adicionando todos os elementos no container do titulo
        container_radio.append(texto_encript)
        container_radio.append(radio_encript)
        container_radio.append(texto_traduc)
        container_radio.append(radio_traduc)
        container_titulo.append(container_radio)
    }
    container_cifras.append(container_titulo)
}

function retornar_container_IO() {
    // Retorna container padrão de inputs/outputs de formulários de cifras/utilitários.
    let container_input = document.createElement('div')
    container_input.className = 'container-input-cifra'
    return container_input
}

function retornar_titulo_IO(titulo) {
    // Retorna titulo padrão de inputs/outputs de formulários de cifras/utilitários.
    let titulo_input = document.createElement('h')
    titulo_input.innerHTML = titulo
    titulo_input.className = 'texto-cifra'
    return titulo_input
}

function criar_input_padrao_texto(titulo, id_input='chave') {
    let container_input = retornar_container_IO()
    let titulo_input = retornar_titulo_IO(titulo)

    let input_de_texto = document.createElement('input')
    input_de_texto.className = 'input-cifra'
    input_de_texto.type = 'text'
    input_de_texto.id = id_input
    // Adicionando os novos elementos aos seus containers (divs).
    container_input.append(titulo_input)
    container_input.append(input_de_texto)
    container_cifras.append(container_input)
}

function criar_input_padrao_radio_PC(lista_titulos, name) {
    let container_input = retornar_container_IO()
    for (let i = 0; i < lista_titulos.length; i++) {
        // Criar titulo do radio
        let titulo_radio = retornar_titulo_IO(lista_titulos[i])
        if (i > 0) // Caso seja um radio diferente do primeiro, dar um espaçamento 
            titulo_radio.style.marginLeft = '50px'
        // Criar opção de radio
        let radio_opcao = document.createElement('input')
        radio_opcao.type = 'radio'
        radio_opcao.className = 'radio-cifra'
        radio_opcao.name = name
        if (i == 0)  // Deixar a primeira opção marcada  
            radio_opcao.checked = true
        // Adicionar o radio atual ao container de input atual
        container_input.append(titulo_radio)
        container_input.append(radio_opcao)
        container_cifras.append(container_input)
    }
}

function criar_input_padrao_radio(lista_titulos, name) {
    let container_input = retornar_container_IO()
    for (let i = 0; i < lista_titulos.length; i++) {
        // Criar titulo do radio
        let titulo_radio = retornar_titulo_IO(lista_titulos[i])
        if (i > 0) // Caso seja um radio diferente do primeiro, dar um espaçamento 
            titulo_radio.style.marginLeft = '50px'
        // Criar opção de radio
        let radio_opcao = document.createElement('input')
        radio_opcao.type = 'radio'
        radio_opcao.className = 'radio-cifra'
        radio_opcao.name = name
        if (i == 0)  // Deixar a primeira opção marcada  
            radio_opcao.checked = true
        // Adicionar o radio atual ao container de input atual
        container_input.append(titulo_radio)
        container_input.append(radio_opcao)
    }
    container_cifras.append(container_input)
}

function criar_input_padrao_radio_CEL(lista_titulos, name) {
    for (let i = 0; i < lista_titulos.length; i++) {
        let container_input = retornar_container_IO()
        // Criar titulo do radio
        let titulo_radio = retornar_titulo_IO(lista_titulos[i])
        // Criar opção de radio
        let radio_opcao = document.createElement('input')
        radio_opcao.type = 'radio'
        radio_opcao.className = 'radio-cifra'
        radio_opcao.name = name
        if (i == 0)  // Deixar a primeira opção marcada  
            radio_opcao.checked = true
        // Adicionar o radio atual ao container de input atual
        container_input.append(titulo_radio)
        container_input.append(radio_opcao)
        container_cifras.append(container_input)
    }
}

function criar_radio_padrao_cifras_utilitarios() {
    // Criar radio padrao com opções de: apenas letras e vários caracteres
    if (window.innerWidth <= 700)
        criar_input_padrao_radio_CEL(['apenas letras', 'vários caracteres'], 'opcoes')
    else
        criar_input_padrao_radio(['apenas letras', 'vários caracteres'], 'opcoes')
}

function criar_textarea_input(titulo_textarea, titulo_botao, func_botao, id_textarea='mensagem') {
    let container_input = retornar_container_IO()
    let titulo_text = retornar_titulo_IO(titulo_textarea)

    let textarea_input = document.createElement('textarea')
    textarea_input.className = 'textarea_cifra'
    textarea_input.id = id_textarea

    let botao = document.createElement('input')
    botao.type = 'button'
    botao.id = titulo_botao
    botao.value = titulo_botao
    botao.addEventListener('click', func_botao)

    container_input.append(titulo_text)
    container_input.append(textarea_input)
    container_input.append(botao)
    container_cifras.append(container_input)
}

function criar_textarea_output(titulo, id_textarea='resultado') {
    // Criar textarea com titulo. Esse textarea será readonly
    let container_input = retornar_container_IO()
    let titulo_textarea = retornar_titulo_IO(titulo)

    let textarea_output = document.createElement('textarea')
    textarea_output.id = id_textarea
    textarea_output.className = 'textarea_cifra'
    textarea_output.style.borderRadius = '10px'
    textarea_output.style.height = '450px'
    textarea_output.readOnly = true

    container_input.append(titulo_textarea)
    container_input.append(textarea_output)
    container_cifras.append(container_input)
}

function criar_layout_padrao_cifras(titulo_cifra, func_cifra) {
    criar_titulo(titulo_cifra)
    criar_input_padrao_texto('chave')
    criar_radio_padrao_cifras_utilitarios()
    criar_textarea_input('mensagem', 'executar', func_cifra)
    criar_textarea_output('resultado')
}

function criar_menu_cifra_de_cesar() {
    criar_layout_padrao_cifras('Cifra de César', executar_menu_cifra_de_cesar)
}

function criar_menu_subst_simples() {
    criar_titulo('Substituição simples')
    criar_input_padrao_texto('letras mensagem comum')
    criar_input_padrao_texto('letras mensagem encriptada')
    criar_radio_padrao_cifras_utilitarios()
    criar_textarea_input('mensagem', 'executar', executar_menu_subst_simples)
    criar_textarea_output('resultado')
}

function criar_menu_cifra_de_vigenere() {
    criar_layout_padrao_cifras('Cifra de Vigenère', executar_menu_cifra_de_vigenere)
}

function criar_layout_padrao_utilitarios(titulo_utilitario, func_utilitario) {
    criar_titulo(titulo_utilitario, false)
    criar_radio_padrao_cifras_utilitarios()
    criar_textarea_input('mensagem', 'executar', func_utilitario)
    criar_textarea_output('resultado')
}

function criar_menu_forca_bruta_cesar() {
    criar_layout_padrao_utilitarios('Força bruta César', executar_menu_forca_bruta_cesar)
}

function criar_menu_adivinhador_cesar() {
    criar_layout_padrao_utilitarios('Adivinhador César', executar_menu_adivinhador_cesar)
}
