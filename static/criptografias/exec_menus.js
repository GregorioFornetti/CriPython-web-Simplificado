
function criar_binario_opcao(lista_names) {
    /* Aqui será criado uma string representando todas as escolhas radio feita pelo usuário.
    EX: Se o usuário escolher o primeiro radio de 2 radios, será 10 (primeiro ativo segundo inativo).
    Isso será feito para cada radio passado na lista de parametros (será procurado por "name"), e o retorno será a concatenação
    de todos os resultados coletados. */
    let string_bin_final = ''

    for (let i = 0; i < lista_names.length; i++) {
        let lista_radios_atual = document.getElementsByName(lista_names[i])
        let string_bin_atual = ''

        for (let j = 0; j < lista_radios_atual.length; j++) {
            if (lista_radios_atual[j].checked)
                string_bin_atual += '1'
            else
                string_bin_atual += '0'
        }

        if (i !== lista_names.length - 1)
            string_bin_final += string_bin_atual + '-'  // Adicionar "-" para separar os resultados e facilitar leitura.
        else
            string_bin_final += string_bin_atual
    }
    return string_bin_final
}

function executar_cifra_menu_padrao_atual(lista_names, JSON_funcoes) {
    /* Essa função pegará o codigo binario das opcoes radio passada na lista names e executará
    a função dentro de JSON_funcoes que tiver a chave igual ao codigo binário atual */
    let lista_chaves = document.querySelectorAll('#chave')
    let mensagem = document.querySelector('#mensagem').value
    let codigo_bin_radio = criar_binario_opcao(lista_names)
    let quant_chaves = lista_chaves.length
    console.log(codigo_bin_radio)
    
    if (quant_chaves > 1) {  // Cifra/utilitário atual possui mais de 1 chave. Criar lista com essas chaves.
        let lista_valores_chave = []
        for (let i = 0; i < quant_chaves; i++) {
            lista_valores_chave.push(lista_chaves[i].value)
        }
        var mensagem_resultado = JSON_funcoes[codigo_bin_radio](lista_valores_chave, mensagem)
    } 
    else if (quant_chaves === 1) {  // Cifra/utilitário atual possui apenas 1 chave.
        console.log(lista_chaves[0].value)
        var mensagem_resultado = JSON_funcoes[codigo_bin_radio](lista_chaves[0].value, mensagem)
    } else {  // Cifra/utilitario atual possui nenhuma chave. Mandar apenas a mensagem como parametro
        var mensagem_resultado = JSON_funcoes[codigo_bin_radio](mensagem)
    }
    document.querySelector('#resultado').value = mensagem_resultado
}

/* Logo abaixo estão as funções para executar cada cifra. Para cada cifra, é passado os radios que serão procurados
e as funções que serão executadas dependendo do código radio.
EX de cód radio 10-10: 1° radio possui o primeiro radio ativo (encriptar) e 2° radio possui o primeiro radio ativo (encriptação)*/
function executar_menu_cifra_de_cesar() {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'10-10': encriptar_cesar_apenas_letras,
                                      '10-01': encriptar_cesar_varios_caracteres,
                                      '01-10': traduzir_cesar_apenas_letras,
                                      '01-01': traduzir_cesar_varios_caracteres})
}

function executar_menu_subst_simples() {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'10-10': encriptar_subst_simples_apenas_letras,
                                      '10-01': encriptar_subst_simples_varios_caracteres,
                                      '01-10': traduzir_subst_simples_apenas_letras,
                                      '01-01': traduzir_subst_simples_varios_caracteres})
}

function executar_menu_cifra_de_vigenere() {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'10-10': encriptar_vigenere_apenas_letras,
                                      '10-01': encriptar_vigenere_varios_caracteres,
                                      '01-10': traduzir_vigenere_apenas_letras,
                                      '01-01': traduzir_vigenere_varios_caracteres})
}

function executar_menu_forca_bruta_cesar() {
    executar_cifra_menu_padrao_atual(['opcoes'],
                                     {'10': forca_bruta_cesar_apenas_letras,
                                      '01': forca_bruta_cesar_varios_caracteres})
}

function executar_menu_adivinhador_cesar() {
    executar_cifra_menu_padrao_atual(['opcoes'],
                                     {'10': adivinha_cesar_apenas_letras,
                                      '01': adivinha_cesar_varios_caracteres})
}