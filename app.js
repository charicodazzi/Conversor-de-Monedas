const inputCantidad= document.getElementById("cantidad");
const tipoDeCambio= document.getElementById("tipodecambio");
const resultado=document.getElementById("resultado");



// Si lo hicieramos con condicionales, sin switch:
/*
const calculoDeMoneda = () =>{
    if(tipoDeCambio.value === 'usd'){
        resultado.textContent = inputCantidad.value * 0.011;
    }else if(tipoDeCambio.value === 'mxn'){
        resultado.textContent = inputCantidad.value * 0.21;
    }else if(tipoDeCambio.value === 'col'){
        resultado.textContent = inputCantidad.value * 39.78;
    }else if(tipoDeCambio.value === 'pen'){
        resultado.textContent = inputCantidad.value * 0.040;
    }else{
        resultado = "";
    }
    };
    
    tipoDeCambio.addEventListener('input', calculoDeMoneda);
    inputCantidad.addEventListener('input', calculoDeMoneda);
    */

    const calculoDeMoneda = () =>{
        switch (tipoDeCambio.value){
        case 'usd':
            resultado.textContent = inputCantidad.value * 0.011;
            break;
        case 'mxn':
            resultado.textContent = inputCantidad.value * 0.21;
            break;
        case 'col':
            resultado.textContent = inputCantidad.value * 39.78;
            break;
        case 'pen':
            resultado.textContent = inputCantidad.value * 0.040;
            break;
        default:
            resultado = "";
        }
        }
        
    tipoDeCambio.addEventListener('input', calculoDeMoneda);
    inputCantidad.addEventListener('input', calculoDeMoneda);
    
    inputCantidad.addEventListener('input', () =>{
        inputCantidad.style.backgroundColor = "lighlightblue";
        tipoDeCambio.style.backgroundColor = "lightblue";
        resultado.style.backgroundColor = "lightblue";
    });
    
    