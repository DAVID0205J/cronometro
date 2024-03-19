let div_cronometro = document.querySelector(".cronometro");

// Definir la función extraerTexto en el ámbito global
function extraerTexto() {
    let textoIngresado = document.querySelector(".entrada_texto").value;
    console.log( textoIngresado);
    div_cronometro.textContent=textoIngresado
}
function extraerTexto2() {
    let textoIngresado2 = document.querySelector(".entrada_texto2").value;
    console.log(textoIngresado2);
}


function iniciar_cronometro(minutos, segundos) {
    
    div_cronometro.innerHTML = `${minutos}:${segundos}`;

    function actualizar() {
        if (segundos == 1 & minutos == 1) {
            clearInterval(tiempo);
        }

        segundos--;

        if (segundos == 0) {
            if (minutos >= 0) {
                segundos = 59;
                minutos--;
            }
        }

        div_cronometro.innerHTML="";
        
        if(minutos<10){
            div_cronometro.innerHTML=`0${minutos}:0${segundos}`;
        }else{
            div_cronometro.innerHTML=`0${minutos}:${segundos}`;
        }

        if (segundos<10){
            div_cronometro.innerHTML=`${minutos}:0${segundos}`;
        }else{
            div_cronometro.innerHTML=`${minutos}:${segundos}`;
            
        }
    }
    
    let tiempo = setInterval(actualizar, 1000);
    
    let btn_formulario = document.querySelector(".div_entrada_text");
    
    btn_formulario.innerHTML = `
    <button class="btn" onclick="extraerTexto()">minutos</button>
    <input type="number" class="entrada_texto" name="texto" placeholder="Texto deseado">
    
    <button class="btn" onclick="extraerTexto2()">segundos</button>
    <input type="number" class="entrada_texto2" name="texto" placeholder="Texto deseado">
    `;
    
    
    
}

iniciar_cronometro(10, 5);
