import svgUseIt from 'svg-use-it';
import scrollMagic from './components/scrollmagic.js';
import techAnimation from './components/tech-animation.js';
import slick from 'slick-carousel';
import Select from './components/select.js';
$(document).ready(function(){

	svgUseIt();
	scrollMagic();
	techAnimation();


	new Select({
		selector: '.js-select',
		cssClass: 'select-custom'
	});
	new Select({
		selector: '.js-select-big',
		cssClass: 'select-custom-big'
	});


	//end
});

