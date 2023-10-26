<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Max-Age: 1000");
header("Access-Control-ALlow-Headers: Content-Type, Authorization, X-Requested-With, X-Custom-Header");

$applicationName = "Kisan Mela Inventory System";
$sessionMaxTime = "3156000";
        $dbHost = "localhost";    
		// $dbDb="patialakisanmela";
		// $dbDb="gurdaspurkisanmela";
		// $dbDb="btikisanmela";
		// $dbDb="gurdaspurkisanmela";
		// $dbDb="patialakisanmela";
		// $dbDb="bathindakisanmela";
		// $dbDb="paukisanmela";
		$dbDb="gurdaspurkisanmela";
		$dbUser = 'root';
		$dbPassword = '';
		$appProtocol = "http";

		$con= mysqli_connect($dbHost,$dbUser,$dbPassword,$dbDb);

   
?>