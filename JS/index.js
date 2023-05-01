let arrayProductos = JSON.parse(localStorage.getItem('productos'));
let seccionHombre = document.querySelector('#seccionHombre');
let seccionMujer = document.querySelector('#seccionMujer');
let seccionNiño = document.querySelector('#seccionNiño');


const leerProductosHombres = () => {


    seccionHombre.innerHTML = '';
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
    let menProds = arrayProductos.filter((prod) => prod.categoria === 'Hombre')

    if(arrayProductos === null){
        menProds = [];
    }else{
        menProds.forEach((element) => {
            seccionHombre.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${element.nombre} </h5>
                <p class="card-text">${element.descripcion}</p>
                <p class="card-text">${element.categoria}</p>
                <p href="#">$${element.precio}</p>
            </div>
        </div> `
        });
    }
}

leerProductosHombres()


const leerProductosMujeres = () => {


    seccionMujer.innerHTML = '';
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
    let mujerProds = arrayProductos.filter((prod) => prod.categoria === 'Mujer')

    if(arrayProductos === null){
        mujerProds = [];
    }else{
        mujerProds.forEach((element) => {
            seccionMujer.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${element.nombre} </h5>
                <p class="card-text">${element.descripcion}</p>
                <p class="card-text">${element.categoria}</p>
                <p>$${element.precio}</p>
            </div>
        </div> `
        });
    }
}

leerProductosMujeres()


const leerProductosNiños = () => {


    seccionNiño.innerHTML = '';
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
    let ninProds = arrayProductos.filter((prod) => prod.categoria === 'Niño')

    if(arrayProductos === null){
        ninProds = [];
    }else{
        ninProds.forEach((element) => {
            seccionNiño.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${element.nombre} </h5>
                <p class="card-text">${element.descripcion}</p>
                <p class="card-text">${element.categoria}</p>
                <p>$${element.precio}</p>
            </div>
        </div> `
        });
    }
}

leerProductosNiños()
