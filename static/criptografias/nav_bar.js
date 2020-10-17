
let botao_nav_clicado

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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#botao-utilitarios').addEventListener('click', () => {
        if (botao_nav_clicado !== 'utilitarios') {  // Não mostrar o sub-menu caso o usuário clique duas vezes no botão utilitarios.
            esconder_sub_menu('utilitarios')
            reiniciar_animacao()
            document.querySelector('#triang-utilitarios').style.display = 'block';
            document.querySelector('.sub-barra-navegacao').style.display = 'block';
        }
        else {  // Caso o usuário clique duas vezes consecutivas no botão "cifras", a segunda deve esconder o sub-menu.
            esconder_sub_menu('utilitarios2')
        }
    })

    document.querySelector('#botao-cifras').addEventListener('click', () => {
        // A mesmo padrão de esconder e mostrar o sub-menu que ocorre nas "utilitarios", ocorre aqui também !
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
    document.querySelector('#botao-home').addEventListener('click', () => {
        carregar_home_page()
    })

    document.querySelector('.container-sub-barra-nav').addEventListener('animationend', () => {
        if (botao_nav_clicado === 'cifras') {
            colocar_botoes_no_sub_menu(lista_botoes_cifra)
        }
        else {
            colocar_botoes_no_sub_menu(lista_botoes_utilitarios)
        }
    })
})


function esconder_sub_menu(botao) {
    document.querySelector('#triang-utilitarios').style.display = 'none';
    document.querySelector('.text-container-sub-barra-nav').innerHTML = '';
    document.querySelector('#triang-cifras').style.display = 'none';
    document.querySelector('.sub-barra-navegacao').style.display = 'none';
    botao_nav_clicado = botao
}

function reiniciar_animacao() {
    let sub_menu_container = document.querySelector('.container-sub-barra-nav');
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
