const Administradores = JSON.parse(localStorage.getItem('usuariosLogueados'));
    if(Administradores){
        if(Administradores.email === 'nachoguardo1@gmail.com' || Administradores.email === 'diegofenino1@gmail.com' || Administradores.email ==='alealaniz1@gmail.com' || Administradores.email === 'lautarocuello1@gmail.com'){
            console.info('hola admin')
        }else{
            window.location.href = '/index.html'
        }
    } else{
        window.location.href = '/index.html'
    }

// variables globales
const formTabla = document.querySelector('#formTabla');
const tablaProductos = document.querySelector('#tablaProductos');
let arrayProductos = [];


// funciones

const crearProducto = (nombre, descripcion,categoria, precio, imagen) =>{

    let item = {
        nombre: nombre,
        descripcion:descripcion,
        categoria:categoria,
        precio:precio,
        imagen:imagen
    }

    arrayProductos.push(item)
    return item
}

const guardarProducto = () => {

    localStorage.setItem('productos', JSON.stringify(arrayProductos));
    leerProductos()
}

const leerProductos = () => {

    tablaProductos.innerHTML = '';
    arrayProductos = JSON.parse(localStorage.getItem('productos'));

    if(arrayProductos === null){
        arrayProductos = [];
    }else{
        arrayProductos.forEach((element, index) => {
            tablaProductos.innerHTML += `
            <tr>
                <th scope="row">${element.nombre}</th>
                <td>${element.descripcion}</td>
                <th>${element.categoria}</th>
                <td>$${element.precio}</td>
                <td>@${element.imagen}</td>
                <td>
                <button class="btn btn-danger mx-1" onclick="eliminarProducto('${index}')">Borrar</button>
                <button class="btn btn-warning "onclick="editarProducto('${index}')">Editar</button>
                </td>
            </tr>`
        });
    }
}


const eliminarProducto = (index)=>{

    arrayProductos.splice(index, 1);
    guardarProducto();
}

const editarProducto = (index) => {
    document.querySelector('#botonAgregar').style.display = 'none';
    document.querySelector('#botonEdicion').style.display = 'block';

    document.querySelector('#nombre').value = arrayProductos[index].nombre;
    document.querySelector('#descripcion').value = arrayProductos[index].descripcion;
    document.querySelector('#categoria').value = arrayProductos[index].categoria;
    document.querySelector('#precio').value = arrayProductos[index].precio;
    document.querySelector('#imagen').value = arrayProductos[index].imagen;

    document.querySelector('#botonEdicion').onclick = ()=>{

        arrayProductos[index].nombre = document.querySelector('#nombre').value;
        arrayProductos[index].descripcion = document.querySelector('#descripcion').value;
        arrayProductos[index].categoria = document.querySelector('#categoria').value;
        arrayProductos[index].precio = document.querySelector('#precio').value;
        arrayProductos[index].imagen = document.querySelector('#imagen').value;
        guardarProducto()
        leerProductos()

        formTabla.reset();

        document.querySelector('#botonAgregar').style.display = 'block';
        document.querySelector('#botonEdicion').style.display = 'none';
    }

}

// Eventlistener

formTabla.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nombre= document.querySelector('#nombre').value;
    let descripcion= document.querySelector('#descripcion').value;
    let categoria= document.querySelector('#categoria').value;
    let precio= document.querySelector('#precio').value;
    let imagen= document.querySelector('#imagen').value;

    crearProducto(nombre, descripcion,categoria, precio, imagen);
    guardarProducto();
    formTabla.reset();
})


document.addEventListener('DOMContentLoaded', leerProductos)
