function validarContraseña(){
    let contra = document.getElementById("contra");
    let contra2 = document.getElementById("contra2");

    if(contra.value != "" && contra2.value != ""){      
        if(contra.value == contra2.value){
            alert("registro exitoso")
            return true;
        } else {
            alert("las contraseñas no coinciden");
        }
    } else {
        alert("los campos de contraseñas estan vacios");
        return false;
    }
}