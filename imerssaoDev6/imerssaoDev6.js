var corinthians = {
    nome: "Corinthians",
    vitorias: 4,
    empates: 2,
    derrotas: 1,
    pontos: 14
}
var sto = {
    nome: "Santo André",
    vitorias: 1,
    empates: 3,
    derrotas: 1,
    pontos: 6
}
var botafogo = {
    nome: "Botafogo-SP",
    vitorias: 1,
    empates: 2,
    derrotas: 3,
    pontos: 5
}
var inter = {
    nome: "Inter de Limeira",
    vitorias: 1,
    empates: 0,
    derrotas: 4,
    pontos: 3
}

corinthians.pontos = calculaPontos(corinthians)
sto.pontos = calculaPontos(sto)
botafogo.pontos = calculaPontos(botafogo)
inter.pontos = calculaPontos(inter)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [corinthians, sto, botafogo, inter]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}