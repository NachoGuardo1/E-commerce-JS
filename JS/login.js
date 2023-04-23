document.querySelector('#formularioLogin').addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    

    let Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [{name: 'Nacho', email: 'nachoguardo1@gmail.com', password: 'Admin1'},
    {name: 'Diego', email: 'diegofenino1@gmail.com', password: 'Admin1'},
    {name: 'Ale', email: 'alealaniz1@gmail.com', password: 'Admin1'},
    {name: 'Lautaro', email: 'lautarocuello1@gmail.com', password: 'Admin1'}];

    let usuariosRegistrados = Usuarios.find(usuario => usuario.email === email && usuario.password === password)
    if(usuariosRegistrados){
        alert(`Bienvenido ${usuariosRegistrados.name}`);
        localStorage.setItem('usuariosLogueados', JSON.stringify(usuariosRegistrados))
        window.location.href = '/index.html'
    }else{
        alert('Datos invalidos intente de nuevo');
    }

})