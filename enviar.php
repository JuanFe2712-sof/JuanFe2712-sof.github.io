<?php
$destino = "est.juan.montenegro1@unimilitar.edu.co";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["nmensaje"];
$contenido = "Nombre: " . $nombre . "\nCorreo; " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
mail($destino,"CONTACTO" , $contenido);
header("Location:Contacto.html");
?>