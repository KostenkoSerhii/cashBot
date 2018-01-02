import { TimelineMax } from 'gsap';


function HeroSlider(){
	let tl = new TimelineMax({repeat: -1, repeatDelay: 1, delay: 1.5});
	let heroSlider = $(".js-hero-slider"),
	heroSlides = $(".js-hero-slide"),
	sliderW = heroSlider.width(),
	sliderH = heroSlider.height(),
	slidesCount = heroSlides.length,
	heroBlick = $(".js-hero-blick"),
	heroLines = {
		tl: $(".js-hero-line-tl"),
		tr: $(".js-hero-line-tr"),
		r: $(".js-hero-line-r"),
		b: $(".js-hero-line-b"),
		l: $(".js-hero-line-l")
	};

	let defTime = 1;
	let resetTime = 0.5;
	let longTime = 3;

	tl
	.set(heroBlick, {x: sliderW - 193, transformOrigin:"50% 50%"})
	.to(heroBlick, defTime, { opacity:1, ease: Power0.easeNone}, "+=0")
	
	.to(heroLines.tr, defTime, { width: 193, ease: Power0.easeNone}, "+=0")
	.to(heroBlick, defTime, { x: sliderW, ease: Power0.easeNone}, `-=${defTime}`)
	.to(heroLines.r, defTime, { height: sliderH, ease: Power0.easeNone}, "+=0")
	.to(heroBlick, defTime, { y: sliderH, ease: Power0.easeNone}, `-=${defTime}`)
	.to(heroLines.b, longTime, { width: sliderW + 4, ease: Power0.easeNone}, "+=0")
	.to(heroBlick, longTime, { x: 0, ease: Power0.easeNone}, `-=${longTime}`)
	.to(heroLines.l, defTime, { height: sliderH, ease: Power0.easeNone}, "+=0")
	.to(heroBlick, defTime, { y: 0, ease: Power0.easeNone}, `-=${defTime}`)
	.to(heroLines.tl, defTime, { width: 193, ease: Power0.easeNone}, "+=0")
	.to(heroBlick, defTime, { x: 193, ease: Power0.easeNone, onComplete:changeSlide}, `-=${defTime}`)
	.to(heroBlick, 7, { rotation: -1440,  ease: Power0.easeNone}, "-=7")

	.to(heroLines.tl, resetTime, {opacity: 0, ease: Power0.easeNone}, `+=0`)
	.to(heroLines.tr, resetTime, {opacity: 0, ease: Power0.easeNone}, `-=${resetTime}`)
	.to(heroLines.r, resetTime, {opacity: 0, ease: Power0.easeNone}, `-=${resetTime}`)
	.to(heroLines.b, resetTime, {opacity: 0, ease: Power0.easeNone}, `-=${resetTime}`)
	.to(heroLines.l, resetTime, {opacity: 0, ease: Power0.easeNone}, `-=${resetTime}`)
	.to(heroBlick, resetTime, { opacity:0, ease: Power0.easeNone}, `-=${resetTime}`)

	function changeSlide(){
		let activeSlide = heroSlides.filter('.is-active').index();
		let nextIndex;
		if( activeSlide + 1 == slidesCount ){
			nextIndex = 0
		}else{
			nextIndex = activeSlide + 1
		};
		heroSlides.removeClass("is-active");
		setTimeout(function(){
			heroSlides.eq(nextIndex).addClass("is-active");
		}, 1000)
	}
}
module.exports = HeroSlider;