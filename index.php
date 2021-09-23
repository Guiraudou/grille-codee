<?php ini_set('default_charset', "utf-8"); ?>
<!DOCTYPE html>
<html lang="fr-FR">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<!-- title / desc / keywords-->
	<title>Génération d'une grille codée</title>
	<meta name="description" content="Générez une grille dans laquelle peux se cacher un mot, une phrase, un dessin, un symbole, etc." />
	<meta name="keywords" content="grille codée" />

	<!-- robots -->
	<meta name="robots" content="all" />
	<meta name="revisit-after" content="7 days" />

	<!-- affichage -->
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->

	<!-- style -->

	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

	<link href="css/style.css" rel="stylesheet">
</head>
<body>
	<div class="container">
		<header>
			<h1>Génération d'une grille codée</h1>
		</header>
		<div class="body">
			<div class="card">
				<div class="card-body">
					<form action="#">
						<div class="form-group row">
							<label class="col-sm-4 col-form-label">Taille de la grille :</label>
							<div class="col-sm-8 form-inline">
								<input type="text" name="nb_squares_horizontal" class="form-control" size="2" value="30" /> &nbsp; x &nbsp; <input type="text" name="nb_squares_vertical" class="form-control" size="2" value="30" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-4 col-form-label">Taille des cases :</label>
							<div class="col-sm-8 form-inline">
								<div class="input-group">
									<input type="text" name="square_size" class="form-control" size="2" value="30" />
									<div class="input-group-append">
										<div class="input-group-text">pixels</div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-4 col-form-label">Couleur de fond :</label>
							<div class="col-sm-8 form-inline">
								<input type="color" name="square_background_color" class="form-control" value="#fffbf5" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-4 col-form-label">Chiffres en gras :</label>
							<div class="col-sm-8 form-inline">
								<div class="form-check form-check-inline">
									<label class="form-check-label"><input type="radio" class="form-check-input" name="digit_font_bold" value="1" /> Oui</label>
								</div>
								<div class="form-check form-check-inline">
									<label class="form-check-label"><input type="radio" class="form-check-input" name="digit_font_bold" value="0" checked="checked" /> Non</label>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-4 col-form-label">Nombre de chiffres à colorier :</label>
							<div class="col-sm-8 form-inline">
								<input type="text" name="nb_marked_digits" class="form-control" size="3" value="3" />
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-4 col-form-label">Chiffres à colorier :</label>
							<div class="col-sm-8 form-inline digit_marked_content">
							</div>
						</div>
					</form>

					<div id="grid" class="grid">
						
					</div>

					<div class="alert alert-info">
						Pour marquer une case à colorier, clique dessus !
					</div>
					<div class="buttons">
						<button class="btn btn-info btn_regenerate_grid">Regénérer la grille</button> &nbsp;
						<button class="btn btn-info btn_toogle_show_marked_squares"></button> &nbsp;
					</div>
				</div>
			</div>
		</div>
		<footer>
			<p>
				Made with ❤ by <a href="https://twitter.com/benfett">Benoit Guiraudou</a>. Contribute to this project on <a href="https://github.com/guiraudou/grille-codee">GitHub</a>.
			</p>
		</footer>
	</div><!-- fin div.container -->

	<script type="text/javascript">
		var locale = 'fr-FR';
		var timeZone = 'Europe/Paris';
		var currency = 'EUR';
	</script>

	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>

	<script src="js/app.js"></script>

</body>
</html>