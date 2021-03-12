window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("hidden");
})

function toggleMenu() {
	const menuToggle = document.querySelector(".navigation-toggleMenu");
	const navigation = document.querySelector(".header__navigation");
	menuToggle.classList.toggle("navigation-toggleMenu_active");
	navigation.classList.toggle("header__navigation_active");
}

const name = document.querySelector(".name");
const email = document.querySelector(".email");
const messageText = document.querySelector(".textarea");

const submitForm = document.querySelector(".contact__form");
submitForm.addEventListener("submit", event => {
	event.preventDefault();
	const letterObject = {
		name: name.value,
		email: email.value,
		messageText: messageText.value,
	}
	localStorage.setItem("letter", JSON.stringify(letterObject));
	const message = document.querySelector(".contact__message");
	const showMessage = setTimeout(() => {
		name.value = "";
		email.value = "";
		messageText.value = "";
		message.classList.remove("contact__message_hidden");
	}, 500);
	setTimeout(() => {
		message.classList.add("contact__message_hidden");
		clearTimeout(showMessage)
	}, 2000);
})

