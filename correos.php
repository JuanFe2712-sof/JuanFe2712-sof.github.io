<?php
    $destinatario = 'juanfemonte@gmail.com' // correo destino

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $header = " Enviado desde la pagina de Mestizo";
    $mensajeCompleto = $mensaje. "\nAtentamente: " . $nombre;

    mail($destinatario, $nombre, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='Contacto.html'\",1000)</script>";

?>