// Datos que obtengo del formulario de log in
export function datosLogIn(){
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;
    console.log(`Hola ${usuario}, tu contraseña es ${contrasenia}`);
}

