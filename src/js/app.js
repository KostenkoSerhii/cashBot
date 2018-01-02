import svgUseIt from 'svg-use-it';
import HeroSlider from './components/HeroSlider.js';
import scrollMagic from './components/scrollmagic.js';
import aboutHandAnim from './components/about-hand-animation.js';
import aboutStepsAnim from './components/about-steps-animation.js';
import whyWeAnim from './components/why-we-amination.js';
import slick from 'slick-carousel';
import Select from './components/select.js';
$(document).ready(function(){

	svgUseIt();
	HeroSlider();
	scrollMagic();


	new Select({
		selector: '.js-select',
		cssClass: 'select-custom'
	});
	new Select({
		selector: '.js-select-big',
		cssClass: 'select-custom-big'
	});
	aboutHandAnim();
	aboutStepsAnim();
	whyWeAnim();

	$('.js-pslider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		prevArrow: `<div class="prev-arrow"><?xml version="1.0" encoding="utf-8"?>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 204 333" enable-background="new 0 0 204 333" xml:space="preserve">
		<polygon points="46.5,166 197,306.7 176.3,326 5,166 176.3,6 197,25.4 "/>
		</svg></div>`,
		nextArrow: `<div class="next-arrow">
		<?xml version="1.0" encoding="utf-8"?>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 204 333" enable-background="new 0 0 204 333" xml:space="preserve">
		<polygon points="5,25.4 25.7,6 197,166 25.7,326 5,306.7 155.5,166 "/>
		</svg></div>`
		// centerMode: true,
		// centerPadding: '80px',
		// variableWidth: true
	});
	//end
});

