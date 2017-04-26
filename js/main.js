function translate(){

    var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
    var remember = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];

    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder = "Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión";

}
translate();

function imprimirPantalla(){

    var mail=document.getElementById("inputEmail").value;
    var correoMostrar=document.getElementById("correo");
    correoMostrar.innerHTML="<h3>Datos de formulario</h3>" + "El correo ingresado es: </br>"+ mail;

    var contras=document.getElementById("inputPassword").value;
    var passMostrar=document.getElementById("contrasenia");
    passMostrar.innerHTML="La contraseña ingresada es: </br>" + contras;

}
