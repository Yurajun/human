/* global $ */

const line = $('.body-serveice__line');

$('.body-serveice__mail').hover(
	() => line.css('background-color', '#a52615'),
	() => line.css('background-color', ''),
);

$('.body-serveice__tell').hover(
	() => line.css('background-color', '#a52615'),
	() => line.css('background-color', ''),
);
