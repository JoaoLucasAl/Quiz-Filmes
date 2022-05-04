function validaQuestao(entrada, resposta) {
    if (entrada === resposta) {
        alert('Resposta correta')
        return true;
    } else if (entrada != '1' && entrada != '2' && entrada != '3' && entrada != '4') {
        alert('Resposta invalida, tente novamente!')
        return 'erro'
    } else {
        alert('Resposta incorreta')
        return window.location.href = "../Origem-Dos-Guardioes/derrota-origem-dos-guardioes.html"
    }
}

function botaoComecar(fase) {
    var resposta
    var saida
    if (fase === 'fase1') {
        do {
            resposta = prompt(' 1 - Jack\n 2 - Jhon\n 3 - Breu \n 4 - Peter')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Origem-Dos-Guardioes/fase2-origem-dos-guardioes.html"
        }

    }
    if (fase === 'fase2') {
        do {
            resposta = prompt(' 1 - Gelo\n 2 - Água\n 3 - Terra\n 4 - Raio')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Origem-Dos-Guardioes/fase3-origem-dos-guardioes.html"
        }

    }
    if (fase === 'fase3') {
        do {
            resposta = prompt(' 1 - Sandman\n 2 - Breu\n 3 - Coelho\n 4 - Jack')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Origem-Dos-Guardioes/vitoria-origem-dos-guardioes.html"
        }

    }

    if (fase === 'vitoria') {
        return window.location.href = "../../index.html"
    }
    if (fase === "derrota") {
        return window.location.href = "../Origem-Dos-Guardioes/fase1-origem-dos-guardioes.html"
    }
}