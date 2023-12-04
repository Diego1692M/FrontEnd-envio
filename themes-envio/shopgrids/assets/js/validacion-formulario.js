const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');


const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const direccion = document.getElementById('direccion');
const ciudad = document.getElementById('ciudad');
const postal = document.getElementById('postal');
const pais = document.getElementById('pais');



const botonSiguiente = document.getElementById('Siguiente');
 // Agrega un evento de clic al botón
botonSiguiente.addEventListener('click', function () {
     // Aquí debes realizar la validación de todos tus campos
     // Puedes utilizar funciones o condiciones según tus necesidades

     // Ejemplo de validación, debes ajustar esto según tus necesidades
    const camposValidos = validarCampos();

    if (camposValidos) {
        
         // Muestra la confirmación con SweetAlert2
        Swal.fire(
            'Los Datos se guardaron correctamente',
            '',
            'success'
        );
    } else {
        // Puedes mostrar algún mensaje de error si es necesario
        Swal.fire(
            'Error',
            'Por favor, completa todos los campos correctamente',
            'error'
        );
    }
});

// Función de ejemplo para la validación de campos
function validarCampos() {
    const campos = document.querySelectorAll('input, text');
  
    for (const campo of campos) {
      if (campo.value.length === 0) {
        return false;
      }
    }
  
    return true;
}


nombre.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    var nombreError = document.getElementById('nombre-error');


    // Verificar si el valor contiene algún número
    if (!isNaN(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '' );
        nombreError.textContent = 'El nombre lleva solo letras';

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled');
        nombreError.textContent = 'El nombre es válido';
        
    }

    // Swal.fire(
    //     'Los Datos se guardaron correctamente',
    //     '',
    //     'success'
    // )
});

nombre.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) e.preventDefault()//asi solo  me deja ingresar letras no numeros y con el signo de ! solo numeros
})


apellido.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    var apellidoError = document.getElementById('apellido-error');
    
    // Verificar si el valor contiene algún número
    if (!isNaN(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '' );
        apellidoError.textContent = 'El apellido lleva solo letras';

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled');
        apellidoError.textContent = 'El apellido es valido';
        
    }

    console.log('Aqui funciona')
});

apellido.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) e.preventDefault()//asi solo  me deja ingresar letras no numeros y con el signo de ! solo numeros
})


email.addEventListener('blur', (e) => {
    const inputValue = e.target.value;

    if (inputValue.length > 40) {
        e.target.value = inputValue.substring(0, 40);
    }

    var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var emailError = document.getElementById('email-error');

    
    // Verificar si el valor contiene algún número
    if (!email.test(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '' )

        emailError.textContent = 'El correo electrónico no es válido';

        
		return false;

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled')

        emailError.textContent = 'El correo electrónico es válido.';

		return true;
        
    }

    
});



 // Evento blur para validar y aplicar estilos
telefono.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    var telefonoError = document.getElementById('telefono-error');
    
    // Verificar si el valor contiene algún número
    if (inputValue == "" || inputValue.length < 9) {
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '');
        telefonoError.textContent = 'El telefono no es válido.';
    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled');
        telefonoError.textContent = 'El telefono es válido.';
    }
});

// Evento keydown para permitir solo números
telefono.addEventListener('keydown', (e) => {
    // Permitir solo números (0-9)
    if (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8) ) {
        e.preventDefault();
    }
});



direccion.addEventListener('blur', (e) => {
    const inputValue = e.target.value;

    if (inputValue.length > 40) {
        e.target.value = inputValue.substring(0, 40);
    }

    // var direccion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var direccionError = document.getElementById('direccion-error');
    
    // Verificar si el valor contiene algún número
    if (inputValue == "") {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '' )
        direccionError.textContent = 'La direccion no es válido';

		return false;

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled')
        direccionError.textContent = 'La dirección es válida.';

       
		return true;
        
    }

    
});

ciudad.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    var ciudadError = document.getElementById('ciudad-error');
    
    // Verificar si el valor contiene algún número
    if (!isNaN(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '' );
        ciudadError.textContent = 'La ciudad no es válido';

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled');
        ciudadError.textContent = 'La ciudad es válida';
        
    }

    console.log('Aqui funciona')
});

ciudad.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) e.preventDefault()//asi solo  me deja ingresar letras no numeros y con el signo de ! solo numeros
})


 // Evento blur para validar y aplicar estilos
postal.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    var postalError = document.getElementById('postal-error');
    
    // Verificar si el valor contiene algún número
    if (inputValue == "" || inputValue.length < 6) {
        console.log('estamo dentro')
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '');
        postalError.textContent = 'El codigo postal no es válido';
    } else {
        // Si no contiene números, quitar cualquier estilo existente
        console.log('estamos 2')
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled');
        postalError.textContent = 'El codigo postal es válido';
    }
});

// Evento keydown para permitir solo números
postal.addEventListener('keydown', (e) => {
    // Permitir solo números (0-9)
    if (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8) ) {
        e.preventDefault();
    }
});


pais.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    var paisError = document.getElementById('pais-error');
    
    // Verificar si el valor contiene algún número
    if (!isNaN(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        botonSiguiente.setAttribute('disabled', '' );
        paisError.textContent = 'El pais no es válido';

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');
        botonSiguiente.removeAttribute('disabled');
        paisError.textContent = 'El pais es válido';
        
    }

    // Swal.fire(
    //     'Los Datos se guardaron correctamente',
    //     '',
    //     'success'
    // )
});

pais.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) e.preventDefault()//asi solo  me deja ingresar letras no numeros y con el signo de ! solo numeros
})




const labels = document.querySelectorAll('.form__label');
const fields = document.querySelectorAll('.form__input');
const btn    = document.querySelector('.btn');

fields.forEach((field, i) => {
	field.addEventListener('focus', () => {
		btn.classList.remove('btn--disabled');
		
		fields.forEach((item, i) => {
			if (i !== 0) {
				item.classList.remove('form__input--disabled');
			}
			
			switch (i) {
				case 2:
					item.value = '09/29';
					break;
				case 3:
					item.value = '344';
					break;
			}
		});
	});
});

fields.forEach((field, i) => {
	
	field.addEventListener('blur', () => {
		btn.classList.add('btn--disabled');
		
		fields.forEach((item, i) => {
			if (i !== 0) {
				item.classList.add('form__input--disabled');
			}
			
			switch (i) {
				case 2:
					item.value = 'MM/YY';
					break;
				case 3:
					item.value = '***';
					break;
			}
		});
	});
});










// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
//     usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     telefono: /^\d{7,14}$/, // 7 a 14 numeros.
//     direccion: /^.{1,100}$/, // Puedes ajustar la expresión para la dirección según tus necesidades
//     ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//     codigoPostal: /^\d{5}$/, // Puedes ajustar la expresión según los requisitos de tu país
//     pais: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//     departamento: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//     titular: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//     numeroTarjeta: /^\d{16}$/, // Se asume que la tarjeta tiene 16 dígitos
//     caducidadMM: /^(0[1-9]|1[0-2])$/, // Mes de caducidad (01-12)
//     caducidadYYYY: /^\d{4}$/, // Año de caducidad (4 dígitos)
//     cvc: /^\d{3}$/ // Código de seguridad de 3 dígitos
// };

// const campos = {
//     usuario: false,
//     nombre: false,
//     correo: false,
//     telefono: false,
//     direccion: false,
//     ciudad: false,
//     codigoPostal: false,
//     pais: false,
//     departamento: false,
//     titular: false,
//     numeroTarjeta: false,
//     caducidadMM: false,
//     caducidadYYYY: false,
//     cvc: false,
//     terminos: false
// };

// const validarFormulario = (e) => {
//     switch (e.target.id) {
//         case "Nombre":
//         case "Apellido":
//             validarCampo(expresiones.nombre, e.target, 'nombre');
//             break;
//         case "email":
//             validarCampo(expresiones.correo, e.target, 'correo');
//             break;
//         case "telefono":
//             validarCampo(expresiones.telefono, e.target, 'telefono');
//             break;
//         case "Direccion":
//             validarCampo(expresiones.direccion, e.target, 'direccion');
//             break;
//         case "Ciudad":
//             validarCampo(expresiones.ciudad, e.target, 'ciudad');
//             break;
//         case "CodigoPostal":
//             validarCampo(expresiones.codigoPostal, e.target, 'codigoPostal');
//             break;
//         case "Pais":
//             validarCampo(expresiones.pais, e.target, 'pais');
//             break;
//         case "departamento":
//             validarCampo(expresiones.departamento, e.target, 'departamento');
//             break;
//         case "titular":
//             validarCampo(expresiones.titular, e.target, 'titular');
//             break;
//         case "credit-input":
//             validarCampo(expresiones.numeroTarjeta, e.target, 'numeroTarjeta');
//             break;
//         case "caducidadMM":
//             validarCampo(expresiones.caducidadMM, e.target, 'caducidadMM');
//             break;
//         case "caducidadYYYY":
//             validarCampo(expresiones.caducidadYYYY, e.target, 'caducidadYYYY');
//             break;
//         case "cvc":
//             validarCampo(expresiones.cvc, e.target, 'cvc');
//             break;
//         case "checkbox-3":
//             campos.terminos = e.target.checked;
//             break;
//     }
// }

// const validarCampo = (expresion, input, campo) => {
//     if (expresion.test(input.value)) {
//         document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
//         document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
//         document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
//         document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
//         document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
//         campos[campo] = true;
//     } else {
//         document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
//         document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
//         document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
//         document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
//         document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
//         campos[campo] = false;
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (campos.usuario && campos.nombre && campos.correo && campos.telefono && campos.direccion &&
//         campos.ciudad && campos.codigoPostal && campos.pais && campos.departamento &&
//         campos.titular && campos.numeroTarjeta && campos.caducidadMM && campos.caducidadYYYY &&
//         campos.cvc && campos.terminos) {
//         formulario.reset();

//         document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
//         setTimeout(() => {
//             document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
//         }, 5000);

//         document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
//             icono.classList.remove('formulario__grupo-correcto');
//         });
//     } else {
//         document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
//     }
// });