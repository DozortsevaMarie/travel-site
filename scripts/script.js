window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("hidden");
})

function toggleMenu() {
	const menuToggle = document.querySelector(".navigation-toggleMenu");
	const navigation = document.querySelector(".header_navigation");
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
}



