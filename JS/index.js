let arrayProductos = JSON.parse(localStorage.getItem('productos'));
let seccionHombre = document.querySelector('#seccionHombre');
let seccionMujer = document.querySelector('#seccionMujer');


const leerProductosHombres = () => {


    seccionHombre.innerHTML = '';
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
    let menProds = arrayProductos.filter((prod) => prod.categoria === 'Hombre')

    if(arrayProductos === null){
        menProds = [];
    }else{
        menProds.forEach((element) => {
            seccionHombre.innerHTML += `
            <div class="laTarjeta card bg-dark" style="width: 18rem;">
            <img src="${element.imagen}" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title text-light">${element.nombre}</h5>                            
                <p class="card-text text-light">$${element.precio}</p>                         
                <a href="/pages/error404" class="btn btn-outline-light">COMPRAR</a>
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
            
                    <div class="laTarjeta card bg-dark" style="width: 18rem;">
                        <img src="${element.imagen}" class="card-img-top">
                        <div class="card-body text-center">
                            <h5 class="card-title text-light">${element.nombre}</h5>                            
                            <p class="card-text text-light">$${element.precio}</p>                         
                            <a href="/pages/error404" class="btn btn-outline-light">COMPRAR</a>
                        </div>
                    </div>
        `
        });
    }
}

leerProductosMujeres()



