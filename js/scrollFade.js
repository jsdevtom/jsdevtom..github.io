const elementToFadeTextOf = document.querySelector(".header");
const fadeUntilPx = 200;

window.addEventListener('scroll', function (e) {
	if (window.scrollY < fadeUntilPx) {
		window.requestAnimationFrame(function () {
			elementToFadeTextOf.style.opacity = 1 - (window.scrollY / fadeUntilPx);
		});
	}
});
