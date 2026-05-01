let switchFrm = document.querySelector('#switch-frm');
let switchF1 = document.querySelector('#switch-f1');
let switchF2 = document.querySelector('#switch-f2');
let switchCircle = document.querySelectorAll('.switch-circle');
let switchBtn = document.querySelectorAll('.switch-btn');
let regFrm = document.querySelector('#register-container');
let logFrm = document.querySelector('#login-container');
let allButtons = document.querySelectorAll('.submit');

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
    // Añade la animación de estiramiento
    switchFrm.classList.add('is-gx');
    setTimeout(function (){
        switchFrm.classList.remove('is-gx');
    }, 1250);

    // Alterna las posiciones
    switchFrm.classList.toggle('is-txr');
    switchCircle[0].classList.toggle('is-txr');
    switchCircle[1].classList.toggle('is-txr');

    // Alterna la visibilidad de los textos del switch
    switchF1.classList.toggle('is-hidden');
    switchF2.classList.toggle('is-hidden');

    // Mueve los formularios por debajo
    regFrm.classList.toggle('is-txl');
    logFrm.classList.toggle('is-txl');
    logFrm.classList.toggle('is-z200');
}

let mainF = (e) => {
    // Evita que los botones recarguen la página
    for(var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', getButtons);
    }
    // Asigna la función de cambio a los botones del switch
    for(var i = 0; i < switchBtn.length; i++) {
        switchBtn[i].addEventListener('click', changeForm);
    }
}

window.addEventListener('load', mainF);