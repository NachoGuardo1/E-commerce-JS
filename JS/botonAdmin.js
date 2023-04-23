document.querySelector('#botonAdmin').addEventListener('click', ()=>{

    const Administradores = JSON.parse(localStorage.getItem('usuariosLogueados'));
    if(Administradores){
        if(Administradores.email === 'nachoguardo1@gmail.com' || Administradores.email === 'diegofenino1@gmail.com' || Administradores.email ==='alealaniz1@gmail.com' || Administradores.email === 'lautarocuello1@gmail.com'){
            window.location.href = '/pages/admin.html'
        }else{
            alert('No tienes los permisos para ingresar a esta seccion')
        }
    }else{
        alert('No tienes los permisos para ingresar a esta seccion')
    }
})
