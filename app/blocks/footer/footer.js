/* global $ */

const footerBlock = $('.footer');

$('.footer-ico__fb').hover(
	() => footerBlock.css('border-color', '#a52615'),
	() => footerBlock.css('border-color', ''),
);

$('.footer-ico__inst').hover(
	() => footerBlock.css('border-color', '#a52615'),
	() => footerBlock.css('border-color', ''),
);
