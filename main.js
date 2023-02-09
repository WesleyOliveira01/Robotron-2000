const controleEstatistica = document.querySelectorAll("[data-estatistica]")



const controle = document.querySelectorAll("[data-controler]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click',(evento)=>{
        manipuladados(evento.target.dataset.controler,evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)      
        
    })
});



function manipuladados(operacao,component){
    const peca =  component.querySelector("[data-contador]");
    if(operacao === "-"){
        peca.value = Number(peca.value) - 1;
    }else{
        peca.value = Number(peca.value) + 1;
    }
}

function atualizaEstatistica(peca){
    controleEstatistica.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}