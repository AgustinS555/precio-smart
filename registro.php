<?php 
//Por defecto me pone la zona horaria a toda la pagina
date_default_timezone_set('America/Argentina/Buenos_Aires');

include 'conexion.php';

$nombre = $_POST['usuario'];
$correo = $_POST['correo'];
$password = $_POST['password'];
$passwordConfirm = $_POST['passwordConfirm'];
$rol = $_POST['rol'];

//Verificamos que no exista ese mismo usuario ya registrado
$sql_leerUsuarios = 'SELECT * FROM usuarios WHERE usuario_nombre = ?';
$sentencia = $mbd->prepare($sql_leerUsuarios);
$sentencia->execute(array($nombre));
$resultado = $sentencia->fetch();

//var_dump($resultado);

if ($resultado) {
?>

    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Error de Registro</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-5">
                <div class="row">
                    <div class="alert alert-danger text-uppercase" role="alert">
                        <?php echo 'Este usuario ya existe' ?>
                    </div>
                </div>
            </div>
        </body>
        </html>

<?php
    die(); //mato la ejecucion
} 

//primero hacer las validaciones:
$respuesta = [];
$todoCorrecto = true;
if ($nombre == '') {
    $respuesta += ['usuario' => 'Ingrese un nombre de ususario'];
    $todoCorrecto = false;
}
if ($correo == '') {
    $respuesta += ['correo' => 'El correo electronico no debe estar vacio'];
    $todoCorrecto = false;
}
if ($password == '') {
    $respuesta += ['password' => 'Ingrese una contraseña'];
    $todoCorrecto = false;
}

//Encripto la contraseñas:
$password = password_hash($password, PASSWORD_DEFAULT);

if ($todoCorrecto) {

    if (password_verify($passwordConfirm, $password)) {

        $sql = "INSERT INTO usuarios(usuario_nombre, usuario_email, usuario_pass, usuario_rol, usuario_fecha_alta) 
        VALUES (?,?,?,?,?)";

        //Se prepara la consulta:
        $consulta = $mbd->prepare($sql);
        //Se ejecuta la consulta(insersion):
        $consulta->execute(array($nombre,$correo,$password,$rol,date('d-m-Y')));

        //Cerramos la coneccion y redirigimos al index
        $consulta = null;
        $mbd = null;
        header("Location: index.php");
        
    } else {
    ?>
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Error de Registro</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-5">
                <div class="row">
                    <div class="alert alert-danger text-uppercase" role="alert">
                        <?php echo 'Las contraseñas no coinciden' ?>
                    </div>
                </div>
            </div>
        </body>
        </html>

    <?php
    }
}
else { //Mostrar los mensajes de errores
    ?>
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error de Registro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <div class="container mt-5">
            <div class="row">
            <?php foreach($respuesta as $dato): ?>
                
                <div class="alert alert-danger text-uppercase" role="alert">
                    <?php print_r($dato) ?>
                </div>

                <?php endforeach ?>
            </div>
        </div>
    </body>
    </html>
<?php   
}
?>
