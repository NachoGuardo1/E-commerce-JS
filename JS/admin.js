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

    function mostrarMensaje(){
        const mensaje = 'Pagina en mantenimiento, intente mas tarde.';
        alert(mensaje);
    }