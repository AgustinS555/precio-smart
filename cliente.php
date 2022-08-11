<?php
session_start();

if (isset($_SESSION['cliente'])) {
?>
  
  <!-- echo 'Bienvenido '.$_SESSION['cliente']; -->
  <!-- echo '<br><a href="cerrar.php">Cerrar Sesion</a>'; -->

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Cliente</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/pricing/">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    

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

    
    <!-- Custom styles for this template -->
    <link href="pricing.css" rel="stylesheet">
  </head>
  <body style="background-image: url(img/colorful_desktop_candy_by_alisonmf_d1453qu.jpg)">
    
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check" viewBox="0 0 16 16">
    <title>Check</title>
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  </symbol>
</svg>

<div class="container py-3">
  <header>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="col-md-10">
          <a href="cliente.php" class="d-flex align-items-center text-white text-decoration-none">
            <i class="bi bi-cart4"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            <span class="fs-4">Precio-Smart</span>
          </a>
        </div>
        <div class="col-md-2">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <?php echo '<a class="nav-link active" aria-current="page" href="cerrar.php">Cerrar Sesión</a>' ?>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h3 class="display-4 fw-normal text-white"> <?php echo 'Bienvenido '.$_SESSION['cliente'] ?> </h3>
    </div>
  </header>

  <main>
    <div class="row row-cols-1 row-cols-lg-2 mb-3 text-center"> <!-- row-cols-md-3 -->
        <div>
          <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm border-primary" >
                <div class="card-header py-3 text-white bg-primary border-primary">
                  <h4 class="my-0 fw-normal">Filtrar productos</h4>
                </div>

                <div class="card-body">
                  <form class="d-flex">
                    <input class="form-control me-3" type="text" id="buscador" placeholder="Buscar..." aria-label="Search">
                    <button class="btn btn-outline-success" type="button" id="boton" onclick="filtrar()">Filtrar</button>
                  </form>
                </div>
                <div class="card-body">
                    <div>
                      <select class="form-select" aria-label="Default select example" id="filtro">

                      </select>
                    </div>
                </div>
              </div>
          </div>
      </div>

      <div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary" >
                  <div class="card-header py-3 text-white bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Información de los comercios</h4>
                  </div>
                  <div class="card-body">
                    <select class="form-select" aria-label="Default select example" id="infocomer">
                      <option selected disabled>seleccione el comercio</option>
                      <option value="1">APA Supermercados</option>
                      <option value="5">Chango Mas</option>
                      <option value="2">Supermercados Caceres</option>
                      <option value="4">Supermercados Carrefour</option>
                      <option value="3">Supermercados Independencia</option>
                    </select>
                    <br>
                    <div class="alert alert-primary" id="divinfo" hidden>
                      
                    </div>
                  </div>
                </div>
            </div>
        </div>

      <div class="col">
        <h2 class="display-6 text-center mb-4 text-white">Compare precios</h2>
      </div>
      

      <form class="form-control" hidden id="renderizarform">
      <div class="table">
        <table class="table text-center" id="renderizartabla">
        </table>
      </div>
      </form>
  </main>

  <footer class="pt-3 mt-4 text-muted border-top">
    Precio-Smart &copy; 2022
    <br>
    Potenciado por Maldonado & Salazar
  </footer>
</div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js"></script> <!--Para el id-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script> <!--Para encriptar las contraseñas-->
  <script src="funcionalidades.js"></script>
  </body>
</html>

<?php
} else {
  header('Location: index.php');
}

?>