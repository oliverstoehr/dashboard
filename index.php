<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Dashboard</title>
		<!-- including Bootstrap CSS -->
		<link rel="stylesheet" href="bootstrap/bootstrap.min.css">
		<!-- including Iconic icon font -->
		<link rel="stylesheet" href="openiconic/css/open-iconic-bootstrap.min.css">
		<!-- including custom stylesheet -->
		<link rel="stylesheet" href="custom.css">
	</head>
	<body>
		<!-- Header -->
		<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light justify-content-between">
			<span class="navbar-brand">Dashboard</span>
			<button id="reload" class="btn btn-outline-success my-2 my-sm-0" type="button"><span class="oi oi-reload" aria-label="reload"></span></button>
		</nav>
		<!-- Main content -->
		<main class="container-fluid" id="content">
		</main>
		
		<!-- Loading screen -->
		<div id="loading-screen">
			<span class="oi oi-reload"></span>
		</div>
		
		<!-- including chart.js -->
		<script src="chartjs/chart.bundle.js"></script>
		<!-- including custom.js -->
		<script src="custom.js"></script>
	</body>
</html>
