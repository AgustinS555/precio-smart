<?php

$link = 'mysql:host=localhost;dbname=precio_smart_db';
$usuario = 'root';
$pass = '';
try {
    $mbd = new PDO($link,$usuario,$pass);
    //echo 'conectado';
    /* foreach($mbd->query('SELECT * FROM clientes') as $fila) {
        print_r($fila);
    } */

} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}  

