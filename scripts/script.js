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

const name = document.querySelector(".name");
const email = document.querySelector(".email");
const messageText = document.querySelector(".textarea");

const submitForm = document.querySelector(".contact_form");
submitForm.addEventListener("submit", event => {
	event.preventDefault();
	const letterObject = {
		name: name.value,
		email: email.value,
		messageText: messageText.value,
	}
	localStorage.setItem("letter", JSON.stringify(letterObject));
	const message = document.querySelector(".contact_message");
	const showMessage = setTimeout(() => {
		name.value = "";
		email.value = "";
		messageText.value = "";
		message.classList.remove("hidden");
	}, 500);
	setTimeout(() => {
		message.classList.add("hidden");
		clearTimeout(showMessage)
	}, 2000);
})

