    // Sweet Alerts
    //Ejemplo Confirm
    /*
    
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    */
swalErrorEnvio = () => {
    swal({
          title: "Formulario No enviado",
              text: "El formulario no ha sido enviado por errores al completarlo. Revisa su contenido por favor.",
              icon: "warning",
              button: "Cerrar"
            });
     };
swalOkEnvio = () => {
    swal({
              title: "Formulario Enviado",
              text: "El formulario ha sido enviado con éxito. En breve nos pondremos en contacto con usted. Gracias por la confianza depositada.",
              icon: "success"
            });
     };
swalGuardar = () => {
    swal({
          title: "Datos Guardados",
          text: "Los datos del formulario se han guardado en memoria",
          icon: "success",
          button: "Cerrar"
        });
};

swalRecuperar = () => {
    swal({
          title: "Datos Recuperados",
          text: "Los datos guardados en memoria se han recuperado!",
          icon: "success",
          button: "Cerrar"
        });
    };
swalErrorForm = () => {
    swal({
          title: "Error!!!",
          text: "El formulario no ha sido rellenado correctamente!",
          icon: "success",
          button: "Cerrar"
        });
};
swalAceptarCondiciones = () => {
    swal({
          title: "Condiciones de Privacidad",
          text: "Debe aceptar las condiciones de privacidad para poder enviar el formulario. Gracias",
          icon: "success",
          button: "Cerrar"
        });
};