let cantidad = document. getElementById ('cantidad');
let boton = document.getElementById ('generar');
let contrasena = document.getElementById ('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#%_-.+?¡¿()/!{}*';

function generar (){

    let numeroDigitado = parseInt (cantidad.value);

    if (numeroDigitado < 8){
        alert ("La cantidad de caracteres tiene que ser mayor que 8");
    }

    
    let password = '';

    for (let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor (Math.random () * cadenaCaracteres.length)];
        console.log (caracterAleatorio); 
        password += caracterAleatorio;   

    }
    

    contrasena.value = password;
    

}



function validarContraseña (contrasena) {

    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(contrasena.value.match(decimal)) {

        alert("La contraseña es seguro !"); 

    } else {

        alert("La contraseña debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 8 carácteres como mínimo.")

    }

}

function limpiarContrasena () {
    document.getElementById ('contrasena').value = "";
    document.getElementById ('cantidad').value = "";
}


