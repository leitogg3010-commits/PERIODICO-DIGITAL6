/* ========================= */
/* MENU HAMBURGUESA */
/* ========================= */

function mostrarMenu(){

let menu = document.getElementById("menu");

if(menu.style.display === "flex"){

menu.style.display = "none";

}

else{

menu.style.display = "flex";

}

}

/* ========================= */
/* ACTIVIDAD */
/* ========================= */

function tema(opcion){

document.getElementById("respuesta").innerHTML =

"🔥 Tu tema favorito es " + opcion;

}

/* ========================= */
/* MUSICA */
/* ========================= */

const audio = document.getElementById("musica");

/* RECUPERAR TIEMPO */

window.addEventListener("load", () => {

const tiempoGuardado = localStorage.getItem("tiempo");

if(tiempoGuardado){

audio.currentTime = tiempoGuardado;

}

/* VOLUMEN */

audio.volume = 0.7;

/* REPRODUCIR AUTOMATICAMENTE */

const playPromise = audio.play();

if(playPromise !== undefined){

playPromise

.then(() => {

console.log("Música reproduciéndose");

})

.catch(() => {

console.log("El navegador bloqueó el autoplay");

});

}

});

/* GUARDAR EL TIEMPO */

audio.addEventListener("timeupdate", () => {

localStorage.setItem("tiempo", audio.currentTime);

});

/* ========================= */
/* GUARDAR SI ESTA SONANDO */
/* ========================= */

audio.addEventListener("play", () => {

localStorage.setItem("reproduciendo", "true");

});

/* ========================= */
/* SI ESTABA SONANDO */
/* ========================= */

window.addEventListener("DOMContentLoaded", () => {

const reproduciendo = localStorage.getItem("reproduciendo");

if(reproduciendo === "true"){

audio.play().catch(() => {

console.log("Autoplay bloqueado");

});

}

});

/* ========================= */
/* MENSAJE DE BIENVENIDA */
/* ========================= */

window.onload = function(){

console.log("🌎 Bienvenido a Trend World");

};

/* ========================= */
/* EFECTO BOTONES */
/* ========================= */

const botones = document.querySelectorAll("button");

botones.forEach((boton) => {

boton.addEventListener("mouseover", () => {

boton.style.transform = "scale(1.05)";

});

boton.addEventListener("mouseout", () => {

boton.style.transform = "scale(1)";

});

});

/* ========================= */
/* EFECTO TARJETAS */
/* ========================= */

const tarjetas = document.querySelectorAll("article");

tarjetas.forEach((tarjeta) => {

tarjeta.addEventListener("mouseover", () => {

tarjeta.style.transform = "translateY(-10px)";

tarjeta.style.transition = "0.3s";

});

tarjeta.addEventListener("mouseout", () => {

tarjeta.style.transform = "translateY(0px)";

});

});

/* ========================= */
/* MENSAJE AL CAMBIAR */
/* ========================= */

window.addEventListener("beforeunload", () => {

localStorage.setItem("tiempo", audio.currentTime);

});

/* ========================= */
/* SCROLL SUAVE */
/* ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});