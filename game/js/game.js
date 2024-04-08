let altura = 0
let largura = 0
let vidas = 1
let tempo = 20
let criaMosquitoTempo = 1500
let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if (nivel === "dificil"){
    criaMosquitoTempo = 1000
}else if (nivel === "extremo"){
    criaMosquitoTempo = 750
}

function valordimensao(){
         altura = innerHeight
         largura = innerWidth
         console.log(largura, altura)
}

valordimensao()

var cronometro = setInterval(() => {
    tempo -= 1
    

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000);

function posicao(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
          window.location.href = 'fimDeJogo.html'
        }else{
            document.getElementById('v' + vidas).src= 'imagens/coracao_vazio.png'
            vidas++
        }     
    }
let posicaoX = Math.floor( Math.random()*largura ) - 90
let posicaoY = Math.floor(Math.random()*altura ) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)



let mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanho() + ' ' + lado()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}



document.body.appendChild(mosquito)
}

function tamanho(){
    let classe = Math.floor(Math.random()* 3)
    console.log(classe)

    switch(classe){
        case 0:
            return 'mosquito'
        case 1:
            return 'mosquito1'
        case 2: 
            return 'mosquito2'        
    }
}


function lado(){
    let lado = Math.floor(Math.random()* 2)
    console.log(lado)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'       
    }
}

let criaMosquito = setInterval(function(){
  posicao()
}, criaMosquitoTempo)
