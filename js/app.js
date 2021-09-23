$(function() {
	let markedSquaresDisplayed = true;
	let SQUARE_MARKED_BACKGROUND = '#424242';
	let nbDigitsMarked;
	let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let digitsMarked;
	let digitsNotMarked;

	function generateAllSelectMarkedDigit() {
		nbDigitsMarked = $('input[name="nb_marked_digits"]').val();
		$('div.digit_marked_content').text('');
		for (let i = 1; i <= nbDigitsMarked; i++) {
			$('div.digit_marked_content').append($('<select name="digit_marked_'+i+'" class="form-control"></select>'));
			$('div.digit_marked_content').append('&nbsp;');
			generateSelectMarkedDigit($('select[name="digit_marked_'+i+'"]'), i);
			$('select[name="digit_marked_'+i+'"]').change(regenerateGridContent);
		}
	}

	function generateSelectMarkedDigit(select, defaultDigit) {
		console.log(select);
		select.append($('<option value="-">-</option>'));
		for (var i = 0; i < digits.length; i++) {
			select.append($('<option value="'+digits[i]+'" '+(defaultDigit==digits[i]?'selected="selected"':'')+'>'+digits[i]+'</option>'));
		}
	}

	function generateGrid() {
		let nbSquaresHorizontal = $('input[name="nb_squares_horizontal"]').val();
		let nbSquaresVertical = $('input[name="nb_squares_vertical"]').val();
		let grid = $('div#grid');

		grid.text('');
		for (let y = 0; y < nbSquaresVertical; y++) {
			for (let x = 0; x < nbSquaresHorizontal; x++) {
				grid.append($('<div class="square"></div>'));
			}
			grid.append($('<div class="clearfix"></div>'));
		}

		regenerateGridContent();
		updateStyleGrid();
		initClick();
	}

	function regenerateGridContent() {
		updateDigits();
		$('div.square').each(function(idx, el) {
			regenerateSquareContent($(el));
		});
		updateStyleGrid();
	}

	function updateDigits() {
		digitsMarked = [];
		for (let i = 1; i <= nbDigitsMarked; i++) {
			let digitMarked = $('select[name="digit_marked_'+i+'"]').val();
			if (digitMarked != '-') {
				digitMarked = parseInt(digitMarked);
				if (digitsMarked.indexOf(digitMarked) == -1) {
					digitsMarked.push(digitMarked);
				}
			}
		}

		digitsNotMarked = [];
		for (let i = 0; i < digits.length; i++) {
			if (digitsMarked.indexOf(digits[i]) == -1) {
				digitsNotMarked.push(digits[i]);
			}
		}

		console.log('digitsMarked', digitsMarked);
		console.log('digitsNotMarked', digitsNotMarked);
	}

	function regenerateSquareContent(square) {
		let items = digitsNotMarked;
		if (square.hasClass('marked')) {
			items = digitsMarked;
		}
		square.text((items.length>0 ? items[Math.floor(Math.random()*items.length)] : 'X'));
	}

	function updateStyleGrid() {
		let squareSize = $('input[name="square_size"]').val();
		let squareBackgroundColor = $('input[name="square_background_color"]').val();
		let digitFontBold = $('input[name="digit_font_bold"]:checked').val();

		$('div.square')
			.css('width', squareSize)
			.css('height', squareSize)
			.css('background', squareBackgroundColor)
		;
		$('div.square.marked').css('background', SQUARE_MARKED_BACKGROUND);
		$('div.square.marked.hide').css('background', squareBackgroundColor);
		$('div.square').css('font-weight', (digitFontBold==1?'bold':'normal'));
	}

	function displayOrHideMarkedSquare() {
		if (!markedSquaresDisplayed) {
			$('div.square.marked').addClass('hide');
			$('button.btn_toogle_show_marked_squares').text('Afficher les cases à colorier');
		}
		else {
			$('div.square.marked').removeClass('hide');
			$('button.btn_toogle_show_marked_squares').text('Cacher les cases à colorier');
		}
		updateStyleGrid();
	}

	function initClick() {
		$('div.square').click(function() {
			if ($(this).hasClass('marked')) {
				$(this).removeClass('marked');
			}
			else {
				$(this).addClass('marked');
			}

			markedSquaresDisplayed = true;
			displayOrHideMarkedSquare();

			regenerateSquareContent($(this));
			updateStyleGrid();
			return false;
		});
	}

	$('input[name="nb_squares_horizontal"]').change(generateGrid);
	$('input[name="nb_squares_vertical"]').change(generateGrid);

	$('input[name="square_size"]').change(updateStyleGrid);
	$('input[name="square_background_color"]').change(updateStyleGrid);
	$('input[name="digit_font_bold"]').change(updateStyleGrid);

	$('input[name="nb_marked_digits"]').change(function() {
		generateAllSelectMarkedDigit();
		regenerateGridContent();
	});

	$('button.btn_regenerate_grid').click(regenerateGridContent);
	$('button.btn_toogle_show_marked_squares').click(function() {
		markedSquaresDisplayed = !markedSquaresDisplayed;
		displayOrHideMarkedSquare();
	});

	generateAllSelectMarkedDigit();
	generateGrid();
	displayOrHideMarkedSquare();
});