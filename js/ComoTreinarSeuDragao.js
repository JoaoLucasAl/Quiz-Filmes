function validaQuestao(entrada, resposta) {
    if (entrada === resposta) {
        alert('Resposta correta')
        return true;
    } else if (entrada != '1' && entrada != '2' && entrada != '3' && entrada != '4') {
        alert('Resposta invalida, tente novamente!')
        return 'erro'
    } else {
        alert('Resposta incorreta')
        return window.location.href = "../Como-treinar-seu-Dragao/derrota-como-treinar-seu-dragao.html"
    }
}

function botaoComecar(fase) {
    var resposta
    var saida
    if (fase === "fase1") {
        do {
            resposta = prompt(' 1 - Soluço\n 2 - Espirro\n 3 - Tosse\n 4 - Coceira')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Como-treinar-seu-Dragao/fase2-como-treinar-seu-dragao.html"
        }

    }
    if (fase === "fase2") {
        do {
            resposta = prompt(' 1 - Banguela\n 2 - Fred\n 3 - Thunder\n 4 - Rex')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Como-treinar-seu-Dragao/fase3-como-treinar-seu-dragao.html"
        }


    }
    if (fase === "fase3") {
        do {
            resposta = prompt(' 1 - Stoico\n 2 - Ivair\n 3 - Alexandre\n 4 - Magnus')
            saida = validaQuestao(resposta, '1')
        }
        while (saida === 'erro')
        if (saida === true) {
            return window.location.href = "../Como-treinar-seu-Dragao/vitoria-como-treinar-seu-dragao.html"
        }
    }
    if (fase === "vitoria") {
        return (window.location.href = "../../index.html");
    }
    if (fase === "derrota") {
        return window.location.href = "../Como-treinar-seu-Dragao/fase1-como-treinar-seu-dragao.html"
    }
}