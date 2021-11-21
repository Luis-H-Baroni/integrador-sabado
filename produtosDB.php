<?php



$con = new PDO("mysql:host=localhost;dbname=integrador;charset=utf8","root","");


    require "connect.php";

    $sql = "select * from produto order by codigo";
    $qry = $con->prepare($sql);
    $qry->execute();


    $produtosdb = $qry->fetchAll(PDO::FETCH_OBJ);
echo json_encode($produtosdb);


?>
