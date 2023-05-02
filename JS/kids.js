let arrayProductos = JSON.parse(localStorage.getItem('productos'));
let seccionNiño = document.querySelector('#seccionNiño');


const leerProductosNiños = () => {


    seccionNiño.innerHTML = '';
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
    let kidsProds = arrayProductos.filter((prod) => prod.categoria === 'Niño')

    if(arrayProductos === null){
        kidsProds = [];
    }else{
        kidsProds.forEach((element) => {
            seccionNiño.innerHTML += `
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

leerProductosNiños()
