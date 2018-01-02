import { TimelineMax } from 'gsap';
import PubSub from 'pubsub-js';

function whyWeAnim(){
	let token = PubSub.subscribe('why-we-animation', animation);
	let tl = new TimelineMax(),
	left = $(".js-why-we-left"),
	right = $(".js-why-we-right");

	function animation(){
		tl
			.set(left, {x: -300})
			.set(right, {x: 300})
			.to(left, 0.8, {x: 0, opacity: 1, ease: Power0.easeNone}, 0)
			.to(right, 0.8, {x: 0, opacity: 1, ease: Power0.easeNone}, 0)
	}
}
module.exports = whyWeAnim;