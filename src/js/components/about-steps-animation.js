import { TimelineMax } from 'gsap';
import PubSub from 'pubsub-js';

function aboutStepsAnim(){
	let token = PubSub.subscribe('about-steps-animation', animation);
	let windowH = $(window).height();
	let options = {
		delay: 0
	};
	if(windowH > 750){
		options.delay = 3;
		console.log(2);
	}
	let tl = new TimelineMax(options),
	line1 = $(".js-step-line-1"),
	line2 = $(".js-step-line-2 svg"),
	line3 = $(".js-step-line-3 svg"),
	line4 = $(".js-step-line-4"),
	line5 = $(".js-step-line-5 svg"),
	line6 = $(".js-step-line-6 svg"),
	line7 = $(".js-step-line-7"),
	stepItem1 = $(".js-step-money svg"),
	stepItem2 = $(".js-step-graph svg"),
	stepItem3 = $(".js-step-coin svg"),
	stepItem4 = $(".js-step-travel svg");

	// console.log(windowH);
	function animation(){

		tl
			.to(stepItem1, 0.4, {fill: '#fd8842', ease: Power0.easeNone}, 0)
			.to(line1, 0.3, {background: '#fd8842', ease: Power0.easeNone}, "+=0.2")
			.to(stepItem2, 0.4, {fill: '#fd8842', ease: Power0.easeNone}, "+=0")
			.to(line2, 0.3, {fill: '#fd8842', ease: Power0.easeNone}, "+=0")
			.to(line3, 0.3, {fill: '#fd8842', ease: Power0.easeNone}, "+=0")
			.to(line4, 0.3, {background: '#fd8842', ease: Power0.easeNone}, "+=0")
			.to(line5, 0.3, {fill: '#fd8842', ease: Power0.easeNone}, "+=0")
			.to(line6, 0.3, {fill: '#fd8842', ease: Power0.easeNone}, "+=0")
			.to(stepItem3, 0.4, {fill: '#fd8842', ease: Power0.easeNone}, "+=0")
			.to(line7, 0.3, {background: '#fd8842', ease: Power0.easeNone}, "+=0.2")
			.to(stepItem4, 0.4, {fill: '#fd8842', ease: Power0.easeNone}, "+=0")

	}
}
module.exports = aboutStepsAnim;