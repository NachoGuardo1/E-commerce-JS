const Administradores = JSON.parse(localStorage.getItem('usuariosLogueados'));
    if(Administradores){
        if(Administradores.email === 'nachoguardo1@gmail.com' || Administradores.email === 'diegofenino1@gmail.com' || Administradores.email ==='alealaniz1@gmail.com' || Administradores.email === 'lautarocuello1@gmail.com'){
            alert(`Bienvenido ${Administradores.name}`)
        }else{
            window.location.href = '/index.html'
        }
    } else{
        window.location.href = '/index.html'
    }