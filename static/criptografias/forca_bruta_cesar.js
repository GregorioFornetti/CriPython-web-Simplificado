
function forca_bruta_cesar_apenas_letras(mensagem, modo_teste=false) {
    /* Se for modo teste, retornará o resultado de todas as possíveis traduções do modo apenas letras
    em uma lista, caso não seja o modo teste, retornará uma string com esses testes */
    if (!mensagem)
        return false

    if (modo_teste) { 
        let lista_mensagens = []
        for (let chave = 1; chave <= TAMANHO_ALFABETO; chave++)
            lista_mensagens.push(traduzir_cesar_apenas_letras(chave, mensagem));
        return lista_mensagens
    }
    else {
        let string_mensagem = ''
        for (let chave = 1; chave <= TAMANHO_ALFABETO; chave++)
            string_mensagem += `Testando chave ${chave}:  ${traduzir_cesar_apenas_letras(chave, mensagem)}\n\n\n`
        return string_mensagem
    }
}

function forca_bruta_cesar_varios_caracteres(mensagem, modo_teste=false) {
    // Igual à função de cima, só que será testado todas as traduções possíveis do modo vários caracteres
    if (!mensagem)
        return false

    if(modo_teste) {
        let lista_mensagens = [];
        for (let chave = 1; chave <= tamanho_unicode_limitado; chave++)
            lista_mensagens.push(traduzir_cesar_varios_caracteres(chave, mensagem));
        return lista_mensagens;
    }
    else {
        let string_mensagem = ''
        for (let chave = 1; chave <= tamanho_unicode_limitado; chave++)
            string_mensagem += `Testando chave ${chave}:  ${traduzir_cesar_varios_caracteres(chave, mensagem)}\n\n\n`
        return string_mensagem
    }
}
