import ScrollMagic from 'scrollmagic';
import PubSub from 'pubsub-js';


function scrollMagic(){
	let controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onEnter"
		}
	});
// about hand anim
new ScrollMagic.Scene({
		// duration: 100,	
		offset: 80,
		triggerElement: ".js-about-hand",
		reverse: false
	})
.addTo(controller)
.on("enter", function(e){
	PubSub.publish('about-hand-animation');
});
// about step anim
new ScrollMagic.Scene({
		offset: 150,
		triggerElement: ".js-steps",
		reverse: false
	})
.addTo(controller)
.on("enter", function(e){
	PubSub.publish('about-steps-animation');
});
// why weanim
new ScrollMagic.Scene({
		offset: 100,
		triggerElement: ".js-why-we",
		reverse: false
	})
.addTo(controller)
.on("enter", function(e){
	PubSub.publish('why-we-animation');
});



}
module.exports = scrollMagic;