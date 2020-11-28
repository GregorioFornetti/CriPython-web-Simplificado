
function criar_string_opcoes_radio(lista_names) {
    /* Aqui será criado uma string representando todas as escolhas radio feita pelo usuário.
    EX: usuário escolheu encriptar no modo apenas letras, essa função retornará: "encriptação-apenas letras"
    O nome retornado depende do data-nome_opcao.*/
    let string_info_final = ''

    for (let i = 0; i < lista_names.length; i++) {
        let lista_radios_atual = document.getElementsByName(lista_names[i])
        let string_info_atual = ''

        for (let j = 0; j < lista_radios_atual.length; j++) {
            if (lista_radios_atual[j].checked) {
                string_info_atual += lista_radios_atual[j].dataset.nome_opcao
                break
            }
        }

        if (i !== lista_names.length - 1)
            string_info_final += string_info_atual + '-'  // Adicionar "-" para separar os resultados e facilitar leitura.
        else
            string_info_final += string_info_atual
    }
    return string_info_final
}


function executar_cifra_menu_padrao_atual(lista_names, JSON_funcoes) {
    /* Essa função pegará o codigo binario das opcoes radio passada na lista names e executará
    a função dentro de JSON_funcoes que tiver a chave igual ao codigo binário atual */
    let lista_chaves = document.querySelectorAll('#chave')
    let mensagem = document.querySelector('#mensagem').value
    let codigo_string_radio = criar_string_opcoes_radio(lista_names)
    let quant_chaves = lista_chaves.length

    console.log(codigo_string_radio)

    if (quant_chaves > 1) {  // Cifra/utilitário atual possui mais de 1 chave. Criar lista com essas chaves.
        let lista_valores_chave = []
        for (let i = 0; i < quant_chaves; i++) {
            lista_valores_chave.push(lista_chaves[i].value)
        }
        var mensagem_resultado = JSON_funcoes[codigo_string_radio](lista_valores_chave, mensagem)
    } 
    else if (quant_chaves === 1) {  // Cifra/utilitário atual possui apenas 1 chave.
        var mensagem_resultado = JSON_funcoes[codigo_string_radio](lista_chaves[0].value, mensagem)
    } else {  // Cifra/utilitario atual possui nenhuma chave. Mandar apenas a mensagem como parametro
        var mensagem_resultado = JSON_funcoes[codigo_string_radio](mensagem)
    }
    document.querySelector('#resultado').value = mensagem_resultado
}

/* Logo abaixo estão as funções para executar cada cifra. Para cada cifra, é passado os radios que serão procurados
e as funções que serão executadas dependendo do código radio retornado pela função . */
function executar_menu_cifra_de_cesar(JSON_chaves) {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'encriptação-apenas letras': encriptar_cesar_apenas_letras,
                                      'encriptação-vários caracteres': encriptar_cesar_varios_caracteres,
                                      'tradução-apenas letras': traduzir_cesar_apenas_letras,
                                      'tradução-vários caracteres': traduzir_cesar_varios_caracteres},
                                      JSON_chaves)
}

function executar_menu_subst_simples(JSON_chaves) {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'encriptação-apenas letras': encriptar_subst_simples_apenas_letras,
                                      'encriptação-vários caracteres': encriptar_subst_simples_varios_caracteres,
                                      'tradução-apenas letras': traduzir_subst_simples_apenas_letras,
                                      'tradução-vários caracteres': traduzir_subst_simples_varios_caracteres},
                                      JSON_chaves)
}

function executar_menu_cifra_de_vigenere(JSON_chaves) {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'encriptação-apenas letras': encriptar_vigenere_apenas_letras,
                                      'encriptação-vários caracteres': encriptar_vigenere_varios_caracteres,
                                      'tradução-apenas letras': traduzir_vigenere_apenas_letras,
                                      'tradução-vários caracteres': traduzir_vigenere_varios_caracteres},
                                      JSON_chaves)
}

function executar_menu_forca_bruta_cesar() {
    executar_cifra_menu_padrao_atual(['opcoes'],
                                     {'apenas letras': forca_bruta_cesar_apenas_letras,
                                      'vários caracteres': forca_bruta_cesar_varios_caracteres})
}

function executar_menu_adivinhador_cesar() {
    executar_cifra_menu_padrao_atual(['opcoes'],
                                     {'apenas letras': adivinha_cesar_apenas_letras,
                                      'vários caracteres': adivinha_cesar_varios_caracteres})
}