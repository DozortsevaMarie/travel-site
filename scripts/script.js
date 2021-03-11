window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("hidden");
	changeBackground();
});

window.addEventListener("scroll", () => {
	const header = document.querySelector(".header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
	const menuToggle = document.querySelector(".navigation-toggleMenu");
	const navigation = document.querySelector(".header_navigation");
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
}

const countries = ["country1", "country2", "country3", "country4", "country5"];
function changeBackground() {
	const slider = document.querySelector(".slider-container");
	setInterval(() => {
		const bg = countries[Math.floor(Math.random() * countries.length)]
		slider.style.background = `url("assets/${bg}.jpg")`;
	}, 4000);
}

