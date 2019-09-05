<?php 
require "header.php";
?>

<main>
	<h1>Singup</h1>
	<form action="includes/singup.inc.php" method="post">
		<input type="text" name="uid" placeholder="Username">
		<input type="text" name="mail" placeholder="Email">
		<input type="password" name="pwd" placeholder="Password">
		<input type="password" name="pwd-repeat" placeholder="Repeat Password">
		<button type="submit" name="singup-submit">Singup</button>
	</form>
</main>

<?php
require "footer.php";
?>