<<?php 

$servername = "localhost";
$dbUsername = "root";
$dbPassword ="";
$dbName = "loginsystem";

$conn = mysqli_connect($servername,$dbUsername,$dbPassword,$dbName);

if(!conn) {
	die("Connection failed: ".mysql_connect_error());
}