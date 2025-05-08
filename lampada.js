var lamp = window.document.getElementById ('lampada')
function estaquebrada(){
    return lamp.src.indexOf('quebrada') >-1
}

function Ligar(){
   if(!estaquebrada()){
    lamp.src = 'ligada.svg'}
}

function desligar(){
    if(!estaquebrada()){
    lamp.src = 'desligada.svg'}
}
lamp.addEventListener('click',quebrar)

function quebrar(){
    lamp.src = 'quebrada.svg'
}