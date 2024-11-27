const imagen1 = document.getElementById('imagen-1');
const btnSolicitar = document.getElementById('btn-solicitar');
const inputNum1 = document.getElementById('input-num-1');
const inputNum2 = document.getElementById('input-num-2');
const inputNum3 = document.getElementById('input-num-3');
const textoSticker = document.getElementById('texto-sticker');
const btnIngresar = document.getElementById('btn-ingresar');
const selector1 = document.getElementById('selector-1');
const selector2 = document.getElementById('selector-2');
const selector3 = document.getElementById('selector-3');
const textoPassword = document.getElementById('texto-password');

/*Logica Desafio 1*/
imagen1.addEventListener('click', function(){
    this.classList.toggle('borde-rojo');
});

/*Logica Desafio 2*/
btnSolicitar.addEventListener('click', function(){
    textoSticker.classList.remove('mensaje-error');
    let cantidad = Number(inputNum1.value) + Number(inputNum2.value) + Number(inputNum3.value);
    if(cantidad < 11){
        textoSticker.innerHTML = "Has seleccionado: "+ cantidad + " Stickers";
    }else{
        textoSticker.innerHTML = "Has seleccionado muchos Stickers";
        textoSticker.classList.add('mensaje-error');
    }
});

textoSticker.addEventListener('click', function(){
    this.innerHTML = "";
});

/*Logica Desafio 3*/
btnIngresar.addEventListener('click', function(){
    textoPassword.classList.remove('mensaje-error');
    if(selector1.value == '9' & selector2.value == '1' & selector3.value == '1'){
        textoPassword.innerHTML= "Password 1 correcto";
    }else if(selector1.value == '7' & selector2.value == '1' & selector3.value == '4'){
        textoPassword.innerHTML= "Password 2 correcto";
    }else{
        textoPassword.innerHTML= "Password incorrecto";
        textoPassword.classList.add('mensaje-error');
    }
});

textoPassword.addEventListener('click', function(){
    this.innerHTML = "";
});