<?php 
  include 'conexion.php';     //llamo al archivo de conexion

  /* $sql_leer = 'SELECT * FROM clientes';   //guardo la consulta en una variable

  $gsent = $mbd->prepare($sql_leer);  //preparamos la consulta
  $gsent->execute();                  //ejecutamos la consulta

  $resultado = $gsent->fetchAll(); //con fetchAll nos devuleve un array de la consulta, el cual guardamos en una varible
  //var_dump($resultado);
  foreach($resultado as $dato) {
    print_r($dato);    //print_r($dato['cliente_usuario']);
  } */
?>


<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Precio-Smart</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/jumbotron/">

    

    <!-- Bootstrap core CSS -->
<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      /*Estilos para la imagen de fondo*/
      body {
        background-image:url(img/colorful_desktop_candy_by_alisonmf_d1453qu.jpg);
        background-size: cover;
        background-repeat:no-repeat;
        background-position: center center;
        background-attachment: fixed;
      }
    </style>

  </head>
  <body>
  
<main>
  
  <div class="container py-4">
    <!-- <header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
          <span class="fs-4">Pricing example</span>
        </a>
  
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
          <a class="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
          <a class="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
          <a class="py-2 text-dark text-decoration-none" href="#">Pricing</a>
        </nav>
      </div>
    </header> -->

      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <div class="col-md-8">
            <a href="index.php" class="d-flex align-items-center text-white text-decoration-none">
              <i class="bi bi-cart4"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
              <span class="fs-4">Precio-Smart</span>
            </a>
          </div>
          <div class="col-md-4">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#inicioSesion">Iniciar Sesión</button>
                </li>
                <li class="nav-item">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registro">Registrarse</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    

    <div class="p-5 mb-3 rounded-3"> <!-- style="background-color: #bbbbbb;" -->
      <div class="container-fluid">
        <h1 class="display-5 fw-bold">Precio-Smart</h1>
        <p class="col-md-8 fs-5">Con esta aplicación los clientes pueden encontrar fácilmente los mejores precios con un solo click, encontar ofertas, comercios cercanos y realizar compras de manera virtual.<br><br>
          Los comerciantes pueden aumentar sus ventas al ofertar sus productos y anunciarse en nuestra plataforma.<br><br>
          Esta es una plataforma comunitaria que se nutre de la buena voluntad y responsabilidad de los usuarios.
        </p>
     
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-dark rounded-3" style="background-color: rgb(193, 238, 243);">
          <h2>Beneficios para el cliente</h2>
          <ul>
            <li>Comparar precios sin moverse de su casa</li>
            <li>Realizar compras virtuales y/o programadas</li>
            <li>Recibir sus compras en su domicilio</li>
            <li>Buscar comercios por cercanía o por rubro</li>
            <li>Recibir avisos de ofertas de acuerdo a su preferencia</li>
            <li>Compartir información actualizada de los precios</li>
          </ul>
          
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-dark border rounded-3" style="background-color: rgb(5, 255, 101);">
          <h2>Beneficios para el comerciante</h2>
          <ul>
            <li>Cargar los precios de sus productos</li>
            <li>Publicar avisos y ofertas para aumentar sus ventas</li>
            <li>Coordinar compras al por mayor con otros comerciantes</li>
            <li>Participar en licitaciones comerciales</li>
            <li>Informar al cliente las novedades</li>
          </ul>
        </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-muted border-top">
     Precio-Smart &copy; 2022
     <br>
     Potenciado por Maldonado & Salazar
    </footer>
  </div>
</main>
<!--inicio sesion-->
<div class="modal fade" id="inicioSesion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="background-color: rgb(80, 156, 255);">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Inicio de Sesión</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method="POST" action="inicioSesion.php">
          <div class="mb-3">
            <label for="user" class="form-label">Nombre de Usuario</label>
            <input type="text" class="form-control" id="usuario1" name="username" placeholder="Username">
          </div>

          <div class="mb-3">
            <label for="pass" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="contrasena" name="password" placeholder="Password">
          </div> 
          
          <div id="alertInicio">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-primary" id="inicioSesion">Iniciar Sesión</button>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>

<!-- Modal de Registro-->
<div class="modal fade" id="registro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="background-color: rgb(80, 156, 255);">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method="POST" action="registro.php" id="form">
          <div class="mb-3">
            <select class="form-select" aria-label="Default select example" id="tipoUsuario" name="rol">
              <option selected disabled>Tipo de Usuario</option>
              <option value="1">Cliente</option>
              <option value="2">Comerciante</option>
            </select>
          </div>
          <br>
          <div class="mb-3">
            <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Nombre de usuario">
          </div>

          <div class="mb-3">
             <input type="email" class="form-control" id="email" name="correo" placeholder="Correo electronico">
           </div>
          
          <div class="mb-3">
            <input type="password" class="form-control" id="contraseña" name="password" placeholder="Contraseña">
          </div>
          
          <div class="mb-3">
            <input type="password" class="form-control" id="contraseña2" name="passwordConfirm" placeholder="Repetir Contraseña">
          </div>

          <div id="alertRegister">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-primary" id="registrarse">Registrarse</button>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js"></script> <!--Para el id-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script> <!--Para encriptar las contraseñas-->
<script src="funcionalidades.js"></script>

    
</body>
</html>