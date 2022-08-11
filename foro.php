<?php
session_start();

if (isset($_SESSION['comerciante'])) {
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FORO COMERCIANTES</title>

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
<div class="container py-3">
    <main>
        <div>
            <header>
              <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <div class="container-fluid">
                  <div class="col-md-10">
                    <a href="foro.php" class="d-flex align-items-center text-white text-decoration-none">
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
            </header>
            <br>
            
            <div style="color: rgb(11, 11, 10) ;">
                <h2 style="font-size: 70px; text-align: center;"> <?php echo '¡Bienvenido '.$_SESSION['comerciante'].' al Foro de Comerciantes!' ?> </h2>
            </div>
            <br><br>
            <div class="row align-items-md-stretch">
                <div class="row-cols-md-7">
                  <div class="h-100 p-5 text-dark rounded-3">
                    <p style="font-size: 30px; font-weight: 400px; ">
                        <strong>
                            Aquí los comerciantes registrados podrán enviar propuestas de compra - venta, ofertas mayoristas, ofrecer servicios, 
                            fletes compartidos y todo lo  pertinente para abaratar costos de forma asociativa con otros colegas comerciantes,
                            transportistas, productores, intermediarios, entre otros.
                        </strong>
                    </p>
                    
                  </div>
                </div>
               
                
                <div>
                    
                    <div class="container">
                        <STROng>
                            <p>
                                ESCRIBA AQUÍ SU MENSAJE (No debe superar los 150 caracteres)
                            </p>
                        </STROng>
                        <div>
                            <textarea id="message" type="text" placeholder="Escriba su mensaje" name="message" class="form-control input-box rm-border" style="background-color: rgb(241, 234, 240);"></textarea>
                        </div>
                        <br>
                            <div>
                                <button class="btn btn-primary" type="button" onclick="cargarComentario()">Publicar</button>
                            </div>

                        <br><br>
                        <div class="row" id="foro">
                            <div class="" style="border: 5px solid #dfdfdf; background-color: white; padding: 30px;border-radius: 15px; margin-bottom: 15px;">
                                <p>
                                    <strong>SMC:</strong> Para el día 15 de julio recibiremos 4 equipos de mercadería, y los camiones viajarán el
                                    día 16 hacia Buenos Aires capital. Para compartir costos del envío contactar a nuestro correo (pajarito@elpajarito.com)
                                </p>
                            </div>
                            <br>
                            <br>
                            <div class="" style="border: 5px solid #dfdfdf; background-color: white; padding: 30px; border-radius: 15px; margin-bottom: 15px;">
                                <p>
                                    <strong>La Alegría</strong> El día 25 de julio se rematarán terneras en nuestra estancia, interesados
                                    contactar con el señor hacendado MALDONADO Juan Eduardo (3704256868) o a su encargado Salazar Agustín (3704097459)
                                </p>
                            </div>
                            <br>
                            <div class="" style="border: 5px solid #dfdfdf; background-color: white; padding: 30px;border-radius: 15px; margin-bottom: 15px;">
                                <p><strong>Gómez Angel</strong> Buenas tardes, el día 20 de julio estaré arribando a la ciudad de Formosa llevando
                                un camión con carbón proveniente de Palo Santo a precio mayorista. Mi celular es el 3704222216</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <footer class="pt-3 mt-4 text-muted border-top">
                Precio-Smart &copy; 2022
                <br>
                Potenciado por Maldonado & Salazar
            </footer>
    </main>
  </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
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