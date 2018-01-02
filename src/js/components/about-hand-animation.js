import { TimelineMax } from 'gsap';
import PubSub from 'pubsub-js';

function aboutHandAnim(){
	let token = PubSub.subscribe('about-hand-animation', animation);
	let tl = new TimelineMax(),
	aboutTitle = $(".js-about-title"),
	aboutText = $(".js-about-text"),
	aboutHand = $(".js-about-hand"),
	wrapper = $(".js-about-wrapper"),
	wrapperW = wrapper.width(),
	layoutW = $(".js-about-l").width();

	function animation(){
		tl
		.set(wrapper, {x: (layoutW - wrapperW ) /2})
		.set(aboutHand, {x: 300})
		.to(aboutTitle, 0.8, {opacity: 1, ease: Power0.easeNone}, "+=0")
		.to(aboutText, 0.8, {opacity: 1, ease: Power0.easeNone}, "+=0.2")
		.to(aboutHand, 1, {x: 0, opacity: 1, ease: Power0.easeNone}, "+=0.2")
		.to(wrapper, 0.8, {x: 0, ease: Power0.easeNone}, "-=0.8")
	}
}
module.exports = aboutHandAnim;