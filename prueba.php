<?php 
  include_once 'conexion.php';     //llamo al archivo de conexion

  $sql_leer = 'SELECT * FROM clientes';   //guardo la consulta en una variable

  $gsent = $mbd->prepare($sql_leer);  //preparamos la consulta
  $gsent->execute();                  //ejecutamos la consulta

  $resultado = $gsent->fetchAll(); //con fetchAll nos devuleve un array de la consulta, el cual guardamos en una varible
  //var_dump($resultado);
  foreach($resultado as $dato) {
    print_r($dato);    //print_r($dato['cliente_usuario']);
  }



foreach($respuesta as $dato) {
    print_r($dato); 
    echo '<br>';
}
sleep(2);

//crear la fecha
$fecha = date('d-m-Y');

$fecha = date_create();
$zonahoraria = new DateTimeZone('-0300');
$fecha->setTimezone($zonahoraria);
print_r($fecha);
$fecha->format('Y-m-d');
echo $fecha;


?>
