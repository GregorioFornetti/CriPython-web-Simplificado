
let botao_nav_clicado
let modo_PC = false

function criar_elementos_modo_PC() {
    // Criar os elementos para resoluções maiores (monitores de computador).
    // Criar Botão "utilitarios" com triangulo invisivel em baixo (para a animação de clique)
    let div_utilitarios = document.createElement('div')
    div_utilitarios.style = 'width: 150px; float: right'

    let botao_utilitarios = document.createElement('a')
    botao_utilitarios.className = 'link-barra-navegacao'
    botao_utilitarios.innerText = 'utilitários'
    botao_utilitarios.addEventListener('click', () => {
        if (botao_nav_clicado !== 'utilitarios') {  // Não mostrar o sub-menu caso o usuário clique duas vezes no botão utilitarios.
            esconder_sub_menu('utilitarios')
            reiniciar_animacao()
            document.querySelector('#triang-utilitarios').style.display = 'block';
            document.querySelector('.sub-barra-navegacao').style.display = 'block';
        }
        else  // Caso o usuário clique duas vezes consecutivas no botão "cifras", a segunda deve esconder o sub-menu.
            esconder_sub_menu('utilitarios2')
    })

    let triang_utilit = document.createElement('div')
    triang_utilit.className = 'triangulo'
    triang_utilit.style = 'margin-top: 48px; margin-left: 60px;'
    triang_utilit.id = 'triang-utilitarios'
    // Criar Botão "cifras" com triangulo invisivel em baixo (para a animação de clique)
    let div_cifras = document.createElement('div')
    div_cifras.style = 'width: 100px; float: right;'

    let botao_cifras = document.createElement('a')
    botao_cifras.className = 'link-barra-navegacao'
    botao_cifras.innerText = 'cifras'
    botao_cifras.addEventListener('click', () => {
        // O mesmo padrão de esconder e mostrar o sub-menu que ocorre nos "utilitarios", ocorre aqui também !
        if (botao_nav_clicado !== 'cifras') {
            esconder_sub_menu('cifras')
            reiniciar_animacao()
            document.querySelector('#triang-cifras').style.display = 'block';
            document.querySelector('.sub-barra-navegacao').style.display = 'block';
        }
        else {
            esconder_sub_menu('cifras2')
        }
    })

    let triang_cifras = document.createElement('div')
    triang_cifras.className = 'triangulo'
    triang_cifras.style = 'margin-top: 48px; margin-left: 34px;'
    triang_cifras.id = 'triang-cifras'
    // Adicionando os elementos na "Nav-bar"
    div_utilitarios.append(botao_utilitarios)
    div_utilitarios.append(triang_utilit)
    div_cifras.append(botao_cifras)
    div_cifras.append(triang_cifras)
    let nav_bar = document.querySelector('.container-botoes-nav')
    nav_bar.append(div_utilitarios)
    nav_bar.append(div_cifras)
    // Adicionando os divs da sub barra de navegação
    let sub_barra = document.createElement('div')
    sub_barra.className = 'sub-barra-navegacao'

    let text_container = document.createElement('div')
    text_container.className = 'text-container-sub-barra-nav'
    text_container.addEventListener('animationend', () => {
        // Adicionar os botões para as cifras/utilitários quando a animação de descida da barra acabar.
        if (botao_nav_clicado === 'cifras')
            colocar_botoes_no_sub_menu_PC(retorna_lista_botoes_cifras_PC())
        else
            colocar_botoes_no_sub_menu_PC(retorna_lista_botoes_utilitarios_PC())
    })
    // Adicionando a sub barra
    sub_barra.append(text_container)
    document.querySelector('.conteudo-pagina').insertAdjacentElement('afterbegin', sub_barra)
}


function criar_elementos_modo_CEL() {
    // Criando a "tri-barra" (três barras que abrirão o menu de opções)
    let tri_barra = document.createElement('a')
    tri_barra.id = 'botao-tri'
    tri_barra.className = 'link-barra-navegacao'

    let img_tribarra = document.createElement('img')
    img_tribarra.src = 'static/BarraTri.png'
    tri_barra.append(img_tribarra)

    tri_barra.addEventListener('click', () => {
        let div_opcoes = document.querySelector('.sub-barra-cel')
        if (!div_opcoes) {  // Usuário clicou quando a barra ainda não estava aberta.
            // Criando a sub-barra de navegação...
            let sub_barra = document.createElement('div')
            sub_barra.className = 'sub-barra-cel'
            // Criando botão "Cifras"
            let botao_cifras = document.createElement('div')
            botao_cifras.className = 'container-botao-sub-barra-cel'
            
            let titulo_botao_cifras = document.createElement('span')
            titulo_botao_cifras.className = 'texto-titulos-sub-barra-cel'
            titulo_botao_cifras.innerText = 'Cifras'

            botao_cifras.addEventListener('click', () => {
                let div_cifras = document.querySelector('#div-cifras')
                if (!div_cifras) {  // Colocar as opções de cifras logo abaixo do botão cifras.
                    div_cifras = document.createElement('div')
                    div_cifras.id = 'div-cifras'
                    div_cifras.className = 'sub-sub-barra-cel'
                    colocar_botoes_no_sub_menu_CEL(retorna_lista_botoes_cifras_CEL(), div_cifras)
                    botao_cifras.insertAdjacentElement('afterend', div_cifras)
                }
                else
                    document.querySelector('.sub-barra-cel').removeChild(div_cifras)
            })
            botao_cifras.append(titulo_botao_cifras)
            // Criando barra separadora
            let div_separador = document.createElement('div')
            div_separador.style = 'background-color: white; width: 100%; height: 1px;'
            // Criando botão "Utilitários"
            let botao_utilitarios = document.createElement('div')
            botao_utilitarios.className = 'container-botao-sub-barra-cel'

            let titulo_botao_utilitarios = document.createElement('span')
            titulo_botao_utilitarios.className = 'texto-titulos-sub-barra-cel'
            titulo_botao_utilitarios.innerText = 'Utilitários'

            botao_utilitarios.addEventListener('click', () => {
                let div_utilitarios = document.querySelector('#div-utilitarios')
                if (!div_utilitarios) {  // Colocar as opções de utilitarios logo abaixo do botão utilitarios.
                    div_utilitarios = document.createElement('div')
                    div_utilitarios.id = 'div-utilitarios'
                    div_utilitarios.className = 'sub-sub-barra-cel'
                    colocar_botoes_no_sub_menu_CEL(retorna_lista_botoes_utilitarios_CEL(), div_utilitarios)
                    botao_utilitarios.insertAdjacentElement('afterend', div_utilitarios)
                }
                else
                    document.querySelector('.sub-barra-cel').removeChild(div_utilitarios)
            })
            botao_utilitarios.append(titulo_botao_utilitarios)
            // Adicionando os botões na div principal da sub-nav
            sub_barra.append(botao_cifras)
            sub_barra.append(div_separador)
            sub_barra.append(botao_utilitarios)
            document.querySelector('body').insertBefore(sub_barra, document.querySelector('.conteudo-pagina'))
        }
        else {  // Usuário clicou quando a barra já estava aberta (hora de fechar)
            document.querySelector('body').removeChild(div_opcoes)
        }
    })
    document.querySelector('.barra-navegacao').append(tri_barra)
}

function limpar_elementos_PC() {
    document.querySelector('.container-botoes-nav').innerHTML = ''
    document.querySelector('.conteudo-pagina').removeChild(document.querySelector('.sub-barra-navegacao'))
}

function limpar_elementos_CEL() {
    document.querySelector('.barra-navegacao').removeChild(document.querySelector('#botao-tri'))
    limpar_sub_barra_CEL()
}

function limpar_sub_barra_CEL() {
    let div_sub_barra = document.querySelector('.sub-barra-cel')
    if (div_sub_barra)
        document.querySelector('body').removeChild(div_sub_barra)
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > TAMANHO_MAX_CEL) {
        criar_elementos_modo_PC()
        modo_PC = true
    } else 
        criar_elementos_modo_CEL()

    document.querySelector('#botao-home').addEventListener('click', carregar_home_page)
    carregar_home_page()
})

window.addEventListener('resize', () => {
    if (innerWidth > TAMANHO_MAX_CEL && !modo_PC) {
        limpar_elementos_CEL()
        criar_elementos_modo_PC()
        atualizar_menu_cifras_utilits_para_modo_PC()
        modo_PC = true
    } 
    else if (innerWidth <= TAMANHO_MAX_CEL && modo_PC) {
        limpar_elementos_PC()
        criar_elementos_modo_CEL()
        atualizar_menu_cifras_utilits_para_modo_CEL()
        modo_PC = false
    }
})

function esconder_sub_menu(botao) {
    document.querySelector('#triang-utilitarios').style.display = 'none';
    document.querySelector('.text-container-sub-barra-nav').innerHTML = '';
    document.querySelector('#triang-cifras').style.display = 'none';
    document.querySelector('.sub-barra-navegacao').style.display = 'none';
    botao_nav_clicado = botao
}

function reiniciar_animacao() {
    let sub_menu_container = document.querySelector('.text-container-sub-barra-nav');
    sub_menu_container.style.animation = 'none';
    sub_menu_container.offsetHeight;  // Reflow (recarregar o elemento para reiniciar a animação).
    sub_menu_container.style.animation = null;
}

function colocar_botoes_no_sub_menu_PC(lista_botoes) {
    const text_container = document.querySelector('.text-container-sub-barra-nav');
    lista_botoes.forEach((botao) => {
        text_container.append(botao);
    })
}

function colocar_botoes_no_sub_menu_CEL(lista_botoes, div_botoes) {
    lista_botoes.forEach((botao) => {
        div_botoes.append(botao)
    })
}

function retorna_lista_botoes_cifras_PC() {
    return retorna_lista_botoes_cifras(criar_botao_modo_PC)
}

function retorna_lista_botoes_utilitarios_PC() {
    return retorna_lista_botoes_utilitarios(criar_botao_modo_PC)
}

function retorna_lista_botoes_cifras_CEL() {
    return retorna_lista_botoes_cifras(criar_botao_modo_CEL)
}

function retorna_lista_botoes_utilitarios_CEL() {
    return retorna_lista_botoes_utilitarios(criar_botao_modo_CEL)
}

function retorna_lista_botoes_cifras(criar_botao) {
    let botao_cesar = criar_botao('Cifra de César', criar_menu_cifra_de_cesar)
    let botao_subst_simples = criar_botao('Substituição simples', criar_menu_subst_simples)
    let botao_vigenere = criar_botao('Cifra de Vigenère', criar_menu_cifra_de_vigenere)

    return [botao_cesar, botao_subst_simples, botao_vigenere];
}

function retorna_lista_botoes_utilitarios(criar_botao) {
    let botao_forca_bruta_cesar = criar_botao('Força bruta César', criar_menu_forca_bruta_cesar)
    let botao_adivinhador_cesar = criar_botao('Adivinhador César', criar_menu_adivinhador_cesar)

    return [botao_forca_bruta_cesar, botao_adivinhador_cesar];
}

function criar_botao_modo_PC(titulo_botao, funcao_botao) {
    let botao = document.createElement('p');
    botao.innerHTML = titulo_botao;
    botao.className = 'texto-sub-menu';
    botao.addEventListener('click', () => {
        limpar_containers()
        funcao_botao()
        esconder_sub_menu('')
    })

    return botao
}

function criar_botao_modo_CEL(titulo_botao, funcao_botao) {
    let elemento_titulo_botao = document.createElement('span')
    elemento_titulo_botao.className = 'texto-sub-menu'
    elemento_titulo_botao.innerText = titulo_botao

    let botao = document.createElement('div');
    botao.className = 'container-botao-sub-sub-barra-cel';
    botao.addEventListener('click', () => {
        limpar_containers()
        funcao_botao()
        let div_sub_barra = document.querySelector('.sub-barra-cel')
        if (div_sub_barra)
            document.querySelector('body').removeChild(div_sub_barra)
    })
    botao.append(elemento_titulo_botao)

    return botao
}