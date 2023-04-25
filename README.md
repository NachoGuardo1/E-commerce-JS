"# Correciones login, signup y boton admin" 
1-Se agrego validaciones a la password del registro ( Al menos una letra mayuscula y miniscula, un numero y entre 6 y 12 caracteres ) 
2-Se arreglo el error donde el admin se podia registrar aun asi estando precargado en el codigo
3-Se arreglo el error donde el boton "ADMINISTRACION" al no haber nadie logueado no funcionaba (ahora retorna el mensaje "no tienes permisos" si no hay usuarios logueados y tambien si hay un usuario que no es admin logueado)
4-Ya no podemos ingresar a la seccion admin poniendo en la barra de busqueda /pages/admin.html (redirige al inicio salvo que un Admin este logueado)
5-Se agrego boton logOut y funcionalidad


Falta agregar boton log out y funcionalidad
