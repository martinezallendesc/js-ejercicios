console.log("Estoy funcionando gracias a dios")

function calcular() {
//Seleccionar el input y su valor
    const sticker1elemento = document.getElementById('sticker-1');
    const sticker1valor = Number(sticker1elemento.value);
    
    const sticker2elemento = document.getElementById('sticker-2');
    const sticker2valor = Number(sticker2elemento.value);
    
    const sticker3elemento = document.getElementById('sticker-3');
    const sticker3valor = Number(sticker3elemento.value);
    
//Sumo el valor de los inputs
    
    const totalstickers = sticker1valor + sticker2valor + sticker3valor;
    const parrafo = document.getElementById("resultado");


//Ejecuto la función condicional

    if (totalstickers <= 10)  {
    parrafo.textContent = `Llevas ${totalstickers} stickers`; 
    } else {
        parrafo.textContent = `Llevas demasiados stickers`;   
    }
    
    
    }