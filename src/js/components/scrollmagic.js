import ScrollMagic from 'scrollmagic';
import PubSub from 'pubsub-js';
import {isResp1170} from './global.js';



function scrollMagic(){
	if(isResp1170()) return;
	
	let controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onEnter"
		}
	});
// about hand anim
new ScrollMagic.Scene({
		// duration: 100,	
		offset: 50,
		triggerElement: ".js-about-hand",
		reverse: false
	})
.addTo(controller)
.on("enter", function(e){
	PubSub.publish('about-hand-animation');
});
// about step anim
new ScrollMagic.Scene({
	offset: 200,
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