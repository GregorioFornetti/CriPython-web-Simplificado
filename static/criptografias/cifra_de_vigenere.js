
function verificar_chave_vigenere_apenas_letras(chave) {
    // Se tiver caractere inválido - Retorna False. Caso contrario retorna a nova chave (convertida para lower e com espaços retirados).
    let nova_chave = '';
    for (indice in chave) {
        let caractere_atual = chave[indice].toLowerCase();
        if (caractere_atual === ' ') {
            continue;
        }
        if (caractere_atual.charCodeAt(0) < COMECO_UNICODE_MINUSC || caractere_atual.charCodeAt(0) > FIM_UNICODE_MINUSC) {
            return false;
        }
        nova_chave += caractere_atual;
    }
    return nova_chave;
}

function retornar_JSON_vigenere_apenas_letras() {
    let JSON_vigenere = {};
    for (let i = COMECO_UNICODE_MINUSC; i <= FIM_UNICODE_MINUSC; i++) {
        JSON_vigenere[String.fromCharCode(i)] = i - COMECO_UNICODE_MINUSC;
        JSON_vigenere[i - COMECO_UNICODE_MINUSC] = String.fromCharCode(i);
    }
    return JSON_vigenere;
}

function verificar_chave_vigenere_varios_caracteres(chave) {
    if (!chave) {
        return false;
    }
    for (indice in chave) {
        let UNICODE_caractere_atual = chave.charCodeAt(indice);
        if (UNICODE_caractere_atual > LIMITE_UNICODE) {
            return false;
        }
    }
    return true;
}

function adaptar_chave_vigenere_apenas_letras_traduc(chave) {
    let chave_verificada = verificar_chave_vigenere_apenas_letras(chave);
    let chave_adaptada = '';
    if (chave_verificada) {
        for (indice in chave_verificada) {
            let novo_UNICODE = COMECO_UNICODE_MINUSC + (COMECO_UNICODE_MINUSC - chave_verificada.charCodeAt(indice) + TAMANHO_ALFABETO) % TAMANHO_ALFABETO;
            chave_adaptada += String.fromCharCode(novo_UNICODE);
        }
    } else {
        return false;
    }
    return chave_adaptada
}

function adaptar_chave_vigenere_varios_caracteres_traduc(chave) {
    let chave_adaptada = '';
    if (verificar_chave_vigenere_varios_caracteres(chave)) {
        for (indice in chave) {
            let novo_UNICODE = (tamanho_unicode_limitado - JSON_unicode_limitado[chave[indice]]) % tamanho_unicode_limitado;
            chave_adaptada += vetor_unicode_limitado[novo_UNICODE];
        }
    } else {
        return false;
    }
    return chave_adaptada;
}

function encriptar_vigenere_apenas_letras(chave, mensagem) {
    if (!mensagem) {
        return ERRO_MENSAGEM
    }
    let chave_verificada = verificar_chave_vigenere_apenas_letras(chave);
    if (chave_verificada) {
        return trocar_caracteres_vigenere_apenas_letras(chave_verificada, mensagem);
    } else {
        return ERRO_CHAVE;
    }
}

function traduzir_vigenere_apenas_letras(chave, mensagem) {
    if (!mensagem) {
        return ERRO_MENSAGEM;
    }
    let chave_adaptada = adaptar_chave_vigenere_apenas_letras_traduc(chave);
    if (chave_adaptada) {
        return trocar_caracteres_vigenere_apenas_letras(chave_adaptada, mensagem);
    } else {
        return ERRO_CHAVE;
    }
}

function encriptar_vigenere_varios_caracteres(chave, mensagem) {
    if (!mensagem) {
        return ERRO_MENSAGEM;
    }
    if (verificar_chave_vigenere_varios_caracteres(chave)) {
        return trocar_caracteres_vigenere_varios_caracteres(chave, mensagem);
    } else {
        return ERRO_CHAVE
    }
}

function traduzir_vigenere_varios_caracteres(chave, mensagem) {
    if (!mensagem) {
        return ERRO_MENSAGEM;
    }
    let chave_adaptada = adaptar_chave_vigenere_varios_caracteres_traduc(chave);
    if (chave_adaptada) {
        return trocar_caracteres_vigenere_varios_caracteres(chave_adaptada, mensagem);
    } else {
        return ERRO_CHAVE
    }
}

function trocar_caracteres_vigenere_apenas_letras(chave, mensagem) {
    let nova_mensagem = '';
    let indice_chave = 0;
    const tamanho_chave = chave.length;
    const JSON_convercoes = retornar_JSON_vigenere_apenas_letras();
    for (indice in mensagem) {
        let indice_JSON = (JSON_convercoes[mensagem[indice].toLowerCase()] + JSON_convercoes[chave[indice_chave]]) % TAMANHO_ALFABETO;
        if (!isNaN(indice_JSON)) {
            indice_chave = (indice_chave + 1) % tamanho_chave;
            if (mensagem.charCodeAt(indice) >= COMECO_UNICODE_MAIUSC && mensagem.charCodeAt(indice) <= FIM_UNICODE_MAIUSC) {
                nova_mensagem += JSON_convercoes[indice_JSON].toUpperCase();
            } else {
                nova_mensagem += JSON_convercoes[indice_JSON];
            }
        } else {
            nova_mensagem += mensagem[indice];
        }
    }
    return nova_mensagem;
}

function trocar_caracteres_vigenere_varios_caracteres(chave, mensagem) {
    let nova_mensagem = '';
    let indice_chave = 0;
    const tamanho_chave = chave.length;
    for (indice in mensagem) {
        let indice_JSON = (JSON_unicode_limitado[mensagem[indice]] + JSON_unicode_limitado[chave[indice_chave]]) % tamanho_unicode_limitado;
        if (!isNaN(indice_JSON)) {
            indice_chave = (indice_chave + 1) % tamanho_chave;
            nova_mensagem += vetor_unicode_limitado[indice_JSON];
        } else {
            nova_mensagem += mensagem[indice];
        }
    }
    return nova_mensagem;
}
