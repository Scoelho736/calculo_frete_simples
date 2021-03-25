document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log(
        'Running cordova-' + cordova.platformId + '@' + cordova.version
    );
    document.getElementById('deviceready').classList.add('ready');
}

function calcularton() {
    let peso = parseFloat(document.getElementById('peso').value);
    let valorton = parseFloat(document.getElementById('valorton').value);

    let valor = peso * valorton;

    let div = document.getElementById('resultado');
    div.innerHTML = 'Valor do frete: R$ ' + valor.toFixed(2).replace('.', ',');
}

function calcularcubico() {
    let altura = parseFloat(document.getElementById('altura').value);
    let largura = parseFloat(document.getElementById('largura').value);
    let profundidade = parseFloat(
        document.getElementById('profundidade').value
    );
    let quantidade = parseFloat(document.getElementById('quantidade').value);

    let valor = altura * largura * profundidade * quantidade;

    let div = document.getElementById('resultado');
    div.innerHTML = ' : ' + valor.toFixed(2).replace('.', ',');
}

function calcularfretecubico() {
    let cubicos = parseFloat(document.getElementById('cubicos').value);
    let valorfrete = parseFloat(document.getElementById('valorfrete').value);

    let valor = cubicos * valorfrete;

    let div = document.getElementById('resultados');
    div.innerHTML = ' Valor do frete: R$ ' + valor.toFixed(2).replace('.', ',');
}

function calcularfretekm() {
    let km = parseFloat(document.getElementById('km').value);
    let fretekm = parseFloat(document.getElementById('fretekm').value);

    let valor = km * fretekm;

    let div = document.getElementById('resultadoskm');
    div.innerHTML = ' Valor do frete: R$ ' + valor.toFixed(2).replace('.', ',');
}
