document.querySelector('#formularioRegistro').addEventListener('submit', (evento) => {
    evento.preventDefault()

    
    let Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#password2').value;

    Usuarios.push({name: 'Nacho', email: 'nachoguardo1@gmail.com', password: 'Admin1'},
    {name: 'Diego', email: 'diegofenino1@gmail.com', password: 'Admin1'},
    {name: 'Ale', email: 'alealaniz1@gmail.com', password: 'Admin1'},
    {name: 'Lautaro', email: 'lautarocuello1@gmail.com', password: 'Admin1'})

    let emailUsado = Usuarios.find(usuario => usuario.email === email);
    if (emailUsado){
    alert('Email en uso')
    }else if(password !== password2) {
    alert('Las contraseñas no coiciden')
    } else{
        Usuarios.push({name: name, email: email, password: password, password2: password2})
        localStorage.setItem('usuarios', JSON.stringify(Usuarios))
        alert('Registro exitoso')
        window.location.href = '/pages/login.html'
    } 
    

})
