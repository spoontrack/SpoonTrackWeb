<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="Search results description">
	<meta name=viewport content="width=device-width, inital-scale=1">
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	
	<header>
		<nav class="nav-header-main">
			<a class="header-logo" href="#">
				<img src="img/logo.png" alt="logo">
			</a>
			<ul>
				<li><a href="index.php"> Home</a></li>
				<li><a href="#"> Portfolio</a></li>
				<li><a href="#"> About me</a></li>
				<li><a href="#"> Contact</a></li>
			</ul>
			<div class="header-login">
				<form action="includes/login.inc.php" method="post">
					<input type="text" name="mailuid" placeholder="Username/email...">
					<input type="password" name="pwd" placeholder="Password">
					<button type="submit" name="login-submit" class="account-button">Login</button>
				</form>
				<a href="singup.php" class="signup">Singup</a>
				<form action="includes/logout.inc.php" method="post">
					<button type="submit" name="Logout-submit" class="account-button">Logout</button>
				</form>
			</div>
		</nav>		
	</header>