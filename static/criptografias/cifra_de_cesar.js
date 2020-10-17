
function chave_contem_apenas_numeros(chave) {
    for (indice_caractere in chave) {
        if (!eh_digito(chave[indice_caractere]))
            return false;
    }
    if (!chave)
        return false;
    return true;
}

function mensagem_cesar(chave, mensagem, tamanho_max_chave, traducao, funcao_encriptTraduc) {
    if (!mensagem) {
        return ERRO_MENSAGEM;
    }
    if (chave_contem_apenas_numeros(chave)) {
        chave = parseInt(chave) % tamanho_max_chave;
        if (traducao) // Criar chave de traduc... É o quanto falta para completar uma volta (para que a mensagem dê uma volta e volte ao normal).
            chave = tamanho_max_chave - chave;
        return funcao_encriptTraduc(chave, mensagem);
    }
    return ERRO_CHAVE;
}


function encriptar_cesar_apenas_letras(chave, mensagem) {
    return mensagem_cesar(chave, mensagem, TAMANHO_ALFABETO, false, criar_mensagem_cesar_apenas_letras);
}

function traduzir_cesar_apenas_letras(chave, mensagem) {
    return mensagem_cesar(chave, mensagem, TAMANHO_ALFABETO, true, criar_mensagem_cesar_apenas_letras);
}


function criar_mensagem_cesar_apenas_letras(chave, mensagem) {
    let mensagem_nova = '';
    for (indice_caractere in mensagem) {
        const valor_unicode_atual = mensagem.charCodeAt(indice_caractere);
        let valor_unicode_somado = valor_unicode_atual + chave;
        if (valor_unicode_atual >= COMECO_UNICODE_MAIUSC && valor_unicode_atual <= FIM_UNICODE_MAIUSC) {
            if (valor_unicode_somado > FIM_UNICODE_MAIUSC) {  // Novo valor passou de "Z". Hora de voltar para o começo.
                valor_unicode_somado -= TAMANHO_ALFABETO;
            }
            mensagem_nova += String.fromCharCode(valor_unicode_somado);
        } else if (valor_unicode_atual >= COMECO_UNICODE_MINUSC && valor_unicode_atual <= FIM_UNICODE_MINUSC) {
            if (valor_unicode_somado > FIM_UNICODE_MINUSC) {  // Novo valor passou de "z". Hora de voltar para o começo.
                valor_unicode_somado -= TAMANHO_ALFABETO;
            }
            mensagem_nova += String.fromCharCode(valor_unicode_somado);
        } else {
            mensagem_nova += mensagem[indice_caractere];
        }
    }
    return mensagem_nova
}


function encriptar_cesar_varios_caracteres(chave, mensagem) {
    return mensagem_cesar(chave, mensagem, tamanho_unicode_limitado, false, criar_mensagem_cesar_varios_caracteres);
}

function traduzir_cesar_varios_caracteres(chave, mensagem) {
    return mensagem_cesar(chave, mensagem, tamanho_unicode_limitado, true, criar_mensagem_cesar_varios_caracteres);
}


function criar_mensagem_cesar_varios_caracteres(chave, mensagem) {
    let mensagem_nova = '';
    for (indice_caractere in mensagem) {
        let valor_unicode_atual = mensagem.charCodeAt(indice_caractere);
        if (valor_unicode_atual <= LIMITE_UNICODE) {
            let valor_unicode_somado = JSON_unicode_limitado[mensagem[indice_caractere]] + chave;
            if (valor_unicode_somado >= tamanho_unicode_limitado) {
                valor_unicode_somado -= tamanho_unicode_limitado;
            }
            mensagem_nova += vetor_unicode_limitado[valor_unicode_somado];
        } else {
            mensagem_nova += mensagem[indice_caractere];
        }
    }
    return mensagem_nova;
}
