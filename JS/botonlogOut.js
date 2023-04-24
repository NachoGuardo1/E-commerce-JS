document.querySelector('#logOut').addEventListener('click', ()=>{
    const UsuariosLogueados = JSON.parse(localStorage.getItem('usuariosLogueados')) ;
    alert(`Hasta luego ${UsuariosLogueados.name}!`)
    localStorage.removeItem('usuariosLogueados')
    window.location.href = '/pages/login.html'
})

function mostrarBoton(){
    const UsuariosLogueados = JSON.parse(localStorage.getItem('usuariosLogueados')) || [];

    if (UsuariosLogueados.length !== 0){
        document.querySelector('#logOut').style.display = 'block'
    }
}

mostrarBoton()

function OcultarBoton(){
    const UsuariosLogueados = JSON.parse(localStorage.getItem('usuariosLogueados')) || [];

    if (UsuariosLogueados.length !== 0){
        document.querySelector('#logIn').style.display = 'none'
    }
}

OcultarBoton()

