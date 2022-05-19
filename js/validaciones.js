$(document).ready(function(){
    $("#formulario_reg").validate({
    rules: {
        regis_nombre: {
            required: true,
        },
        regis_correo: {
            required: true,
            email: true
        },
        regis_contra: {
            required: true,
            minlength: 3
        },
        regis_confirma: {
            required: true,
            minlength: 3
        }
    },
    messages: {

        regis_nombre: "Por favor, introduzca su nombre",  
        regis_correo: "Por favor, introduce una dirección de correo electrónico válida",
        regis_contra: {
          required: "Por favor proporcione una contraseña",
          minlength: "Su contraseña debe tener al menos 3 caracteres."
        },
        regis_confirma: {
            required: "Por favor proporcione una contraseña",
            minlength: "Su contraseña debe tener al menos 3 caracteres."
          },
        
  
    },
  
      submitHandler: function(formulario_reg) {
  
        formulario_reg.submit();
  
      }
  
    });
});
  
