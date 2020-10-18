
let botao_nav_clicado
let modo_PC = false

// Criando os links/botoes do sub-menu cifras, que serão colocados quando o botão "cifras" for apertado.
let botao_cesar = document.createElement('a');
botao_cesar.innerHTML = 'Cifra de César';
botao_cesar.className = 'texto-sub-menu';
botao_cesar.addEventListener('click', () => {
    limpar_containers()
    criar_menu_cifra_de_cesar()
    esconder_sub_menu('')
})

let botao_subst_simples = document.createElement('a');
botao_subst_simples.innerHTML = 'Substituição simples';
botao_subst_simples.className = 'texto-sub-menu';
botao_subst_simples.addEventListener('click', () => {
    limpar_containers()
    criar_menu_subst_simples()
    esconder_sub_menu('')
})

let botao_vigenere = document.createElement('a');
botao_vigenere.innerHTML = 'Cifra de Vigenère';
botao_vigenere.className = 'texto-sub-menu';
botao_vigenere.addEventListener('click', () => {
    limpar_containers()
    criar_menu_cifra_de_vigenere()
    esconder_sub_menu('')
})

const lista_botoes_cifra = [botao_cesar, botao_subst_simples, botao_vigenere];

// Criando os links/botoes do sub-menu utilitários, que serão colocados quando o botão "utilitarios" for apertado.
let botao_forca_bruta_cesar = document.createElement('a');
botao_forca_bruta_cesar.innerHTML = 'Força bruta César';
botao_forca_bruta_cesar.className = 'texto-sub-menu';
botao_forca_bruta_cesar.addEventListener('click', () => {
    limpar_containers()
    criar_menu_forca_bruta_cesar()
    esconder_sub_menu('')
})

let botao_adivinhador_cesar = document.createElement('a');
botao_adivinhador_cesar.innerHTML = 'Adivinhador César';
botao_adivinhador_cesar.className = 'texto-sub-menu';
botao_adivinhador_cesar.addEventListener('click', () => {
    limpar_containers()
    criar_menu_adivinhador_cesar()
    esconder_sub_menu('')
})

const lista_botoes_utilitarios = [botao_forca_bruta_cesar, botao_adivinhador_cesar];

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
            colocar_botoes_no_sub_menu(lista_botoes_cifra)
        else
            colocar_botoes_no_sub_menu(lista_botoes_utilitarios)
    })
    // Adicionando a sub barra
    sub_barra.append(text_container)
    document.querySelector('.conteudo-pagina').insertBefore(sub_barra, document.querySelector('#container-popup'))
}

function limpar_elementos_PC() {
    document.querySelector('.container-botoes-nav').innerHTML = ''
    document.querySelector('.conteudo-pagina').removeChild(document.querySelector('.sub-barra-navegacao'))
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 700) {
        criar_elementos_modo_PC()
        modo_PC = true
    }

    document.querySelector('#botao-home').addEventListener('click', () => {
        carregar_home_page()
    })
})

window.addEventListener('resize', () => {
    if (innerWidth > 700 && !modo_PC) {
        // PLACEHOLDER - LIMPAR MODO CEL
        criar_elementos_modo_PC()
        modo_PC = true
    } 
    else if (innerWidth < 700 && modo_PC) {
        limpar_elementos_PC()
        // PLACEHOLDER - CRIAR ELEMENTOS CEL
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

function colocar_botoes_no_sub_menu(lista_botoes) {
    lista_botoes.forEach((botao) => {
        const text_container = document.querySelector('.text-container-sub-barra-nav');
        text_container.append(botao);
        text_container.append(document.createElement('br'));
        text_container.append(document.createElement('br'));
    })
}
