//const url = 'https://backen-envio.onrender.com/envio'
const url = 'http://localhost:8282/envio'

const listarEnvios = async() => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido') 
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listaEnvios = data.msg //msg es el nombre de la lista retorna con json
        console.log(listaEnvios)
        listaEnvios.map(function (envio) {
            //Configurar el objeto para enviarlo por url
            objetoEnvio = Object.keys(envio).map(key => key + '=' + 
            encodeURIComponent(envio[key])).join('&');
            console.log(envio)
            contenido = contenido + `<tr>`+
            `<td style="display: none">`+envio._id+`</td>`+
            `<td>`+envio.registro_envio+`</td>`+
            `<td>`+envio.nombre+`</td>`+
            `<td>`+envio.apellido+`</td>`+
            `<td>`+envio.email+`</td>`+
            `<td>`+envio.telefono+`</td>`+
            `<td>`+envio.direccion+`</td>`+
            `<td>`+envio.ciudad+`</td>`+
            `<td>`+envio.postal+`</td>`+
            `<td>`+envio.pais+`</td>`+
            `<td>`+envio.departamento+`</td>`+
            `<td><button onclick="redireccionarEditar('${objetoEnvio}')">Editar</button></td>`+
            `<td><button onclick="deleteEnvio('${envio.registro_envio}')">Eliminar</button></td>`+
            `</tr>`
        })
        objectId.innerHTML = contenido
    })

    /*for(i = 1; i<10; i++){
        contenido = contenido + '<tr>'+
        '<td>nombre</td>'+
        '<td>rol</td>'+
        '<td>estado</td>'
    }
    */

}

const registrarEnvio = () => {
    
    const registro_envio = generateUUID()
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const telefono = document.getElementById('telefono').value
    const direccion = document.getElementById('direccion').value
    const ciudad = document.getElementById('ciudad').value
    const postal = document.getElementById('postal').value
    const pais = document.getElementById('pais').value
    const departamento = document.getElementById('departamento').value

    // if(registro_envio.length == 0){
    //     alert(333)
    //     document.getElementById('registro_envioHelp').innerHTML = 'Dato requerido'
    //     return false;

    // }
    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'
        alert(1)
    }  
    if(apellido.length == 0){
        document.getElementById('apellidoHelp').innerHTML = 'Dato requerido'
        alert(2)
    }   
    if(email.length == 0){
        document.getElementById('emailHelp').innerHTML = 'Dato requerido'
        alert(3)
    } 
    if(telefono.length == 0){
        document.getElementById('telefonoHelp').innerHTML = 'Dato requerido'
        alert(4)
    } 
    if(direccion.length == 0){
        document.getElementById('direccionHelp').innerHTML = 'Dato requerido'
        alert(5)
    } 
    if(ciudad.length == 0){
        document.getElementById('ciudadHelp').innerHTML = 'Dato requerido'
        alert(6)
    } 
    if(postal.length == 0){
        document.getElementById('postalHelp').innerHTML = 'Dato requerido'
        alert(7)
    } 
    if(pais.length == 0){
        document.getElementById('paisHelp').innerHTML = 'Dato requerido'
        alert(8)
    } 
    if(departamento.length == 0){
        document.getElementById('departamentoHelp').innerHTML = 'Dato requerido'
        alert(9)
    }                                                                 
    // else if(rol == ""){
    //     document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    // }
    // else if(estado == ""){
    //     document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    // }
    // else if(password != confirmarPassword){
    //     alert('Las contraseñas no coinciden')
    // }

    alert('Registrando')
        let envio = {
            registro_envio: registro_envio,
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            direccion: direccion,
            ciudad: ciudad,
            postal: postal,
            pais: pais,
            departamento: departamento
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(envio),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)
            console.info(json); //Imprimir el mensaje de la transacción
        })
 
}

const actualizarEnvio = () => {
    const _id = document.getElementById('_id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const telefono = document.getElementById('telefono').value
    const direccion = document.getElementById('direccion').value
    const ciudad = document.getElementById('ciudad').value
    const postal = document.getElementById('postal').value
    const pais = document.getElementById('pais').value
    const departamento = document.getElementById('departamento').value

    // if(registro_envio.length == 0){
    //     document.getElementById('registro_envioHelp').innerHTML = 'Dato requerido'

    // }
    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'
    }
    else if(apellido.length == 0){
        document.getElementById('apellidoHelp').innerHTML = 'Dato requerido'
    }   
    else if(email.length == 0){
        document.getElementById('emailHelp').innerHTML = 'Dato requerido'
    } 
    else if(telefono.length == 0){
        document.getElementById('telefonoHelp').innerHTML = 'Dato requerido'
    } 
    else if(direccion.length == 0){
        document.getElementById('direccionHelp').innerHTML = 'Dato requerido'
    } 
    else if(ciudad.length == 0){
        document.getElementById('ciudadHelp').innerHTML = 'Dato requerido'
    } 
    else if(postal.length == 0){
        document.getElementById('postalHelp').innerHTML = 'Dato requerido'
    } 
    else if(pais.length == 0){
        document.getElementById('paisHelp').innerHTML = 'Dato requerido'
    } 
    else if(departamento.length == 0){
        document.getElementById('departamentoHelp').innerHTML = 'Dato requerido'
    }                                                                 
    // else if(rol == ""){
    //     document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    // }
    // else if(estado == ""){
    //     document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    // }
    // else if(password != confirmarPassword){
    //     alert('Las contraseñas no coinciden')
    // }
    else{
        let envio = {
            _id: _id,
            // registro_envio: registro_envio,
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            direccion: direccion,
            ciudad: ciudad,
            postal: postal,
            pais: pais,
            departamento: departamento
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(envio),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(JSON.stringify(json.msg)) //Imprimir el mensaje de la transacción
            window.location.href='listarEnvio.html?'
        })
        }
}

const redireccionarEditar = (objetoEnvio) => {
    document.location.href='editarEnvio.html?'+objetoEnvio
}

const editarEnvio = () => {
    // Obtener datos de la url
    var urlParams = new URLSearchParams(window.location.search);
    //Asignar valores a cajas de texto
    document.getElementById('_id').value = urlParams.get('_id')
    document.getElementById('nombre').value = urlParams.get('nombre')
    document.getElementById('apellido').value = urlParams.get('apellido')
    document.getElementById('email').value = urlParams.get('email')
    document.getElementById('telefono').value = urlParams.get('telefono')
    document.getElementById('direccion').value = urlParams.get('direccion')
    document.getElementById('ciudad').value = urlParams.get('ciudad')
    document.getElementById('postal').value = urlParams.get('postal')
    document.getElementById('pais').value = urlParams.get('pais')
    document.getElementById('departamento').value = urlParams.get('departamento')
}

if(document.querySelector('#btnRegistrar')){ //Si objeto exitste
document.querySelector('#btnRegistrar')
.addEventListener('click', registrarEnvio)
}

if(document.querySelector('#btnActualizar')){//Si objeto existe
document.querySelector('#btnActualizar')
.addEventListener('click', actualizarEnvio)
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function deleteEnvio(id){
    console.log(id);

    fetch('http://localhost:8282/envio?registro_envio='+id, {
        method: 'DELETE',
        mode: 'cors',
        // body: JSON.stringify(id),//Convertir el objeto a JSON
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(json => {
        alert(JSON.stringify(json.msg))
        window.location.href='listarEnvio.html?' //Imprimir el mensaje de la transacción
    })
    

}