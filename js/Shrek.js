function validaQuestao(entrada, resposta) {
    if (entrada === resposta) {
        alert('Resposta correta')
        return true;
    } else if (entrada != '1' && entrada != '2' && entrada != '3' && entrada != '4') {
        alert('Resposta invalida, tente novamente!')
        return 'erro'
    } else {
        alert('Resposta incorreta')
        return window.location.href = "../Shrek/derrota-shrek.html"
    }
}

function botaoComecar(fase) {
    var resposta
    var saida
    if (fase === "fase1") {
        do {
            resposta = prompt(' 1 - Farquaad\n 2 - Fernando\n 3 - Drummond\n 4 - Raphael')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Shrek/fase2-shrek.html"
        }

    }
    if (fase === "fase2") {
        do {
            resposta = prompt(' 1 - Dragão\n 2 - Hidra\n 3 - Minotauro\n 4 - Quimera')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Shrek/fase3-shrek.html"
        }


    }
    if (fase === "fase3") {
        do {
            resposta = prompt(' 1 - Fiona\n 2 - Raquel\n 3 - Ana\n 4 - Fernanda')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Shrek/vitoria-shrek.html"
        }
    }
    if (fase === "vitoria") {
        return (window.location.href = "../../index.html");
    }
    if (fase === "derrota") {
        return window.location.href = "../Shrek/fase1-shrek.html"
    }
}