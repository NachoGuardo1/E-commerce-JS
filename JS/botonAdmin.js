document.querySelector('#botonAdmin').addEventListener('click', ()=>{

    const Administradores = JSON.parse(localStorage.getItem('usuariosLogueados'))  || [];
    if(Administradores.email === 'nachoguardo1@gmail.com' || Administradores.email === 'diegofenino1@gmail.com' || Administradores.email === 'alealaniz1@gmail.com' || Administradores.email === 'lautarocuello1@gmail.com'){
        window.location.href = '/pages/admin.html'
    }
})

function mostrarBotonAdmin(){
    const Administradores = JSON.parse(localStorage.getItem('usuariosLogueados'))  || [];
    if(Administradores.email === 'nachoguardo1@gmail.com'  || Administradores.email === 'diegofenino1@gmail.com' || Administradores.email === 'alealaniz1@gmail.com' || Administradores.email === 'lautarocuello1@gmail.com'){
        document.querySelector('#botonAdmin').style.display = 'block'
    }
}

mostrarBotonAdmin()
