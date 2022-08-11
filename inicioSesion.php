<?php

session_start();

include 'conexion.php';

$username = $_POST['username'];
$password = $_POST['password'];

//Verificamos que no exista ese mismo usuario ya registrado
$sql_leerUsuarios = "SELECT * FROM usuarios WHERE usuario_nombre = ?";
$sentencia = $mbd->prepare($sql_leerUsuarios);
$sentencia->execute(array($username));
$resultado = $sentencia->fetch();

if (!$resultado) {
    //Si es falso matamos la operacion es decir, no existe el usuario
?>
    
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Error de Login</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-5">
                <div class="row">
                    <div class="alert alert-danger text-uppercase" role="alert">
                        <?php echo 'El usuario no existe' ?>
                    </div>
                </div>
            </div>
        </body>
        </html>

<?php
    die();
}

if ( password_verify($password, $resultado['usuario_pass']) ) { //Si la contraseña es valida se sigue ejecutando

    $rol = $resultado['usuario_rol'];
    switch ($rol) {
        case 1:
            $_SESSION['cliente'] = $username;
            header('Location: cliente.php');
            break;
        
        case 2:
            $_SESSION['comerciante'] = $username;
            header('Location: comerciante.php');
            break;
    }
}
else {
?>

        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Error de Login</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-5">
                <div class="row">
                    <div class="alert alert-danger text-uppercase" role="alert">
                        <?php echo 'La contraseña no es correcta, intente nuevamente!' ?>
                    </div>
                </div>
            </div>
        </body>
        </html>

<?php    
    die();
}
?>