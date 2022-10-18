var pais = document.getElementById('pais');
var telf = document.getElementById('telf');


pais.onchange = function(e) {
	telf.value = this.value;
	if((this.value).trim() != '') {
		telf.disabled = false;
	} else {
		telf.disabled = true
	}
}
 
telf.onkeyup = function(e) {
	var nums_v = this.value.match(/\d+/g);
	if (nums_v != null) {
		this.value = '+'+((nums_v).toString().replace(/\,/, ''));
	} else {
		this.value = pais.value;
	}
}

//Enviar formulario

console.log("funcionando")
const formulario = document.getElementById("formulario");       //formulario
const userName = document.getElementById("formExample1");       //nombre y apellido
const userEmail = document.getElementById("form4Example2");     //email
const userTelf = document.getElementById("telf");               //telefono

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const mostrarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
    alertSuccess.style.background = "Green";
    alertSuccess.style.color = "White";
};
const mostrarMensajeSoloLetras = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "El nombre solo puede tener letras";
    alertSuccess.style.background = "Red";
    alertSuccess.style.color = "White";
};





formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    

    if (!regUserName.test(userName.value)) {
        console.log("Solo letras");
        return mostrarMensajeSoloLetras();
    }

    
    
    mostrarMensajeExito()
    console.log("Formulario enviado con éxito");
    console.log("Formulario enviado");

});



  