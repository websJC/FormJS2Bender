function avisoReset(){

swal({
  title: "Está seguro?",
  text: "Si borra los datos tendrá que volver a escribirlos",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((resul) => {
  if (resul) {
    swal("Los datos han sido borrados!", {
      icon: "success",      
    });
    location.reload(true);
 	return true;
  } else {
    swal("Los datos siguen a salvo. Opcion cancelada!");
    return false;
  }
});
};


function valida_envia(){
	var acepto		=v_checked();
	var usuario		=user();
	var telefono	=tel();
	var edadC	    =edad();
	var correu		=mail();
	var dni 		=c_dni();

	if(!acepto||!usuario||!telefono||!edadC||!correu||!dni){
		swalErrorEnvio();
		return false;
	}else{
		swalOkEnvio();
		return true;
		
		
	}
};

function v_checked() {
var acepto=document.contacto.acepto.checked;
if(!acepto){
	swalAceptarCondiciones();
	return false;
	}else{
	return true;
	}
};

function user(){
var usuario=document.contacto.usuario.value;
var pnombre=/^[A-ZÀÁÈÉÍÒÓÚ]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,20}$/;

var resul=pnombre.test(usuario);

if(!resul){
	return false;
	}else{
		return true;
	}
};
function tel(){
	var tel=document.contacto.telefono.value;
	var ptel=/^[9]{1}\d{8}$/;
	var resul=ptel.test(tel);
	if(!resul){
	return false;
	}else{
		return true;
	}
};
function edad() {
    var edad = document.contacto.datepicker.value;
    console.log(edad);
    var fechaNace = new Date(edad);
    var fechaActual = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    var resul = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
    console.log(resul);
    resul = Number(resul);
    if (resul<=18) {
    return false;
    }else {
    	return true;
    } 

  
};
function mail(){
	var correu=document.contacto.correu.value;
	var pmail=/^[a-z0-9_-]+(\.[a-z0-9-_]+)*@[a-z0-9-_]+(\.[a-z0-9-_]+)*(\.[a-z]{2,})$/;
	var resul=pmail.test(correu);
	if(!resul){
	return false;
	}else{
		return true;
	}

};
function c_dni(){
	var dni=document.contacto.dni.value;
	dni=dni.toUpperCase();
	var numero,letra,let1;
	var pdni=/^[XYZ]?\d{5,8}[A-Z]{1}$/;
	var resul=pdni.test(dni);
	if(resul){
		numero=dni.substr(0,dni.length-1);
		numero=numero.replace('X',0);
		numero=numero.replace('Y',1);
		numero=numero.replace('Z',2);
		let1=dni.substr(dni.length-1,1);
		letra="TRWAGMYFPDXBNJZSQVHLCKE";
		numero=numero%23;
		letra=letra.substring(numero,numero+1);
		if(letra!==let1){
			return false;
		}else{
			return true;
		}
	}else{
		return false;
	}
};
function pasaValor(name){
	var valor=document.contacto[name].value;
	var funcion;

	switch(name){
		case 'acepto':
		funcion=v_checked();
		if(funcion){
			document.getElementById('info').innerHTML=`Campo ${valor}: - Correcto`;
			document.getElementById('imagenEstado').src="img/benderOk.png";
			info.style.color="#068B3E";
			
		}else{
			document.getElementById('info').innerHTML=`Campo ${valor}: - Incorrecto`;
			document.getElementById('imagenEstado').src="img/benderMal.png";
			info.style.color="#FF0000";
			
		}
		break;
		case 'usuario':
		funcion=user();
		if(funcion){
			// En todos los campos , cambio a correcto la info, cambio la imagen, muestro mensaje en helper y cammbio color de texto e icono
			document.getElementById('info').innerHTML=`Campo Usuario: ${valor}: - Correcto`;
			document.getElementById('imagenEstado').src="img/benderOk.png";
			document.getElementById('helper-text-usuario').innerHTML="El nombre es correcto";
			info.style.color="#068B3E";

			document.getElementById('helper-text-usuario').style.color="#068B3E";
			document.getElementById('iconUserHelp').style.color="#068B3E";

		}else{
			document.getElementById('info').innerHTML=`<p class="truncate"> Campo Usuario: <strong>${valor}: </strong><br/> Incorrecto.</p>
			<br/><p>El nombre de usuario debería tener entre 3 y 20 carácteres y empezar con mayúsculas</p>`;
			document.getElementById('imagenEstado').src="img/benderMal.png";
			document.getElementById('helper-text-usuario').innerHTML="Error!! Sólo puede contener letras y la primera letra debe ser mayúscula";
			info.style.color="#FF0000";

			document.getElementById('helper-text-usuario').style.color="#FF0000";
			document.getElementById('iconUserHelp').style.color="#FF0000";
			
		}
		break;
		case 'telefono':
		funcion=tel();
		if(funcion){
			document.getElementById('info').innerHTML=`Campo ${valor}: - Correcto`;
			document.getElementById('imagenEstado').src="img/benderOk.png";
			document.getElementById('helper-text-tel').innerHTML="El teléfono es correcto";
			info.style.color="#068B3E";
			document.getElementById('helper-text-tel').style.color="#068B3E";
			document.getElementById('iconTelHelp').style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. El teléfono ha de comenzar 9 y tener 9 dígitos";
			document.getElementById('imagenEstado').src="img/benderMal.png";
			document.getElementById('helper-text-tel').innerHTML="Incorrecto. El teléfono ha de comenzar 9 y tener 9 dígitos";
			info.style.color="#FF0000";
			document.getElementById('helper-text-tel').style.color="#FF0000";
			document.getElementById('iconTelHelp').style.color="#FF0000";
			
		}
		break;
		
		case 'edad':
		funcion=edad();
		document.getElementById('info').innerHTML=valor+". Debes tener más de 18 años";
		if(funcion){
			document.getElementById('info').innerHTML=`Campo ${valor}: - Correcto`;
			document.getElementById('imagenEstado').src="img/benderOk.png";
			document.getElementById('helper-text-edad').innerHTML="Correcto";
			info.style.color="#068B3E";
			document.getElementById('helper-text-edad').style.color="#068B3E";
			document.getElementById('iconEdadHelp').style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Debes tener más de 18 años";
			document.getElementById('imagenEstado').src="img/benderMal.png";
			document.getElementById('helper-text-edad').innerHTML="Debes tener más de 18 años";
			info.style.color="#FF0000";
			document.getElementById('helper-text-edad').style.color="#FF0000";
			document.getElementById('iconEdadHelp').style.color="#FF0000";
			
		}
		break;
		case 'correu':
		funcion=mail();
		if(funcion){
			document.getElementById('info').innerHTML=`Campo ${valor}: - Correcto`;
			document.getElementById('imagenEstado').src="img/benderOk.png";
			document.getElementById('helper-text-mail').innerHTML="Email válido";
			info.style.color="#068B3E";
			document.getElementById('helper-text-mail').style.color="#068B3E";
			document.getElementById('iconEmailHelp').style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. El correo electrónico ha de contener (@), texto y (.)seguido de una extensión.";
			document.getElementById('imagenEstado').src="img/benderMal.png";
			document.getElementById('helper-text-mail').innerHTML="Incorrecto. El correo electrónico ha de contener (@), texto y (.)seguido de una extensión.";
			info.style.color="#FF0000";
			document.getElementById('helper-text-mail').style.color="#FF0000";
			document.getElementById('iconEmailHelp').style.color="#FF0000";
			
		}
		break;
		case 'dni':
		funcion=c_dni();
		if(funcion){
			document.getElementById('info').innerHTML=`Campo ${valor}: - Correcto`;
			document.getElementById('imagenEstado').src="img/benderOk.png";
			document.getElementById('helper-text-dni').innerHTML="DNI/NIE válido";
			info.style.color="#068B3E";
			document.getElementById('helper-text-dni').style.color="#068B3E";
			document.getElementById('iconDNIHelp').style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. Escribe un DNI o NIE Correcto";
			document.getElementById('imagenEstado').src="img/benderMal.png";
			document.getElementById('helper-text-dni').innerHTML="DNI/NIE Falso o incorrecto";
			info.style.color="#FF0000";
			document.getElementById('helper-text-dni').style.color="#FF0000";
			document.getElementById('iconDNIHelp').style.color="#FF0000";
			
		}
		break;
	}
};


function guardarDatos(){
	var usuario= document.contacto.usuario.value;
	var tel= document.contacto.telefono.value;
	var edadC= document.contacto.datepicker.value;
	var email= document.contacto.correu.value;
	var dni= document.contacto.dni.value;
	 localStorage.setItem("Usuario", usuario);
	 localStorage.setItem("Teléfono", tel);
	 localStorage.setItem("Edad", edadC);
	 localStorage.setItem("Correo", email);
	 localStorage.setItem("Dni", dni);
 	swalGuardar();

	 
};

function obtenerDatos(){
	
	var mUsuario=localStorage.getItem("Usuario");
	var mTel=localStorage.getItem("Teléfono");
	var mEdad=localStorage.getItem("Edad");
	var mMail=localStorage.getItem("Correo");
	var mDni=localStorage.getItem("Dni");

	document.contacto.usuario.value=mUsuario;
	document.contacto.telefono.value=mTel;
	document.contacto.datepicker.value=mEdad;
	document.contacto.correu.value=mMail;
	document.contacto.dni.value=mDni;
	
	swalRecuperar();

	
};
