const countries = ["country1", "country2", "country3", "country4", "country5"];

function changeBackground() {
	const slider = document.querySelector(".slider-container");
	setInterval(() => {
		const bg = countries[Math.floor(Math.random() * countries.length)]
		slider.style.background = `url("assets/${bg}.jpg")`;
	}, 4000);
}

changeBackground();

fetch('./testData.json')
	.then(response => response.json())
	.then(json => {
		createContent(json.items);
		sortPrice(json.items);
		sortDuration(json.items);
		createFilterCountries(json.items);
		createFilterCities(json.items);
		filterCountry(json.items);
		filterCity(json.items);
		searchItem(json.items);
	});

const sorterPrice = document.querySelector('.price');
const sorterDuration = document.querySelector('.duration');
const search = document.querySelector('.search__input');

function dropdown(element) {
	const arrow = element.children[1];
	element.addEventListener('click', () => {
		arrow.classList.toggle('fa-angle-up');
	});
}

dropdown(sorterDuration);
dropdown(sorterPrice);

function createContent(items) {
	const content = document.getElementById('item');
	content.innerHTML = items.reduce((acc, item) => {
		return acc += `
		<div class="item-container">
			<div class="item-description">
				<div class="item__direction">Country: ${item.country}, ${item.direction}</div>
				<div class="item__duration">Duration: ${item.duration}</div>
				<div class="item__description">Description: 
					<p class="description__text">${item.description}</p>
				</div>
				<div class="item__price">${item.price}</div>
			</div>
			<div class="item-image">
				<img src=${item.image} alt=${item.direction}>
			</div>
		</div>`
	}, '');
}

function sortPrice(arr) {
	sorterPrice.addEventListener('click', () => {
		const contentForPrice = arr.sort(sortP);
		createContent(contentForPrice);
	});
}

function sortP(a, b) {
	const arrow = sorterPrice.children[1];
	if (arrow.classList.contains('fa-angle-up')) {
		return parseInt(a.price) - parseInt(b.price);
	} else {
		if (parseInt(b.price) > parseInt(a.price)) return 1;
		if (parseInt(b.price) === parseInt(a.price)) return 0;
		if (parseInt(b.price) < parseInt(a.price)) return -1;
	}
}

function sortD(a, b) {
	const arrow = sorterDuration.children[1];
	if (arrow.classList.contains('fa-angle-up')) {
		return a.duration - b.duration;
	} else {
		if (b.duration > a.duration) return 1;
		if (b.duration === a.duration) return 0;
		if (b.duration < a.duration) return -1;
	}
}

function sortDuration(arr) {
	sorterDuration.addEventListener('click', () => {
		const contentForDuration = arr.sort(sortD);
		createContent(contentForDuration);
	});
}

function createFilterCountries(items) {
	const countries = new Set();
	items.map(item => {
		countries.add(item.country)
	});

	const content = document.getElementById('countries-container');
	content.innerHTML = Array.from(countries).reduce((acc, item) => {
		return acc += ` 
		<div class="countries__item">${item}</div>`
	}, '');
}

function createFilterCities(items) {
	const cities = new Set();
	items.map(item => {
		cities.add(item.direction)
	});

	const content = document.getElementById('cities-container');
	content.innerHTML = Array.from(cities).reduce((acc, item) => {
		return acc += ` 
		<div class="cities__item">${item}</div>
		`
	}, '');
}

function filterCountry(arr) {
	let filteredContentForCountries = [];
	Array.from(document.querySelectorAll('.countries__item')).map(item => {
		item.addEventListener('click', (e) => {
			let current = e.target.innerHTML;
			filteredContentForCountries = arr.filter(item => {
				return item.country === current;
			})
			createContent(filteredContentForCountries);
		})
	})
}

function filterCity(arr) {
	let filteredContentForCities = [];
	Array.from(document.querySelectorAll('.cities__item')).map(item => {
		item.addEventListener('click', (e) => {
			let current = e.target.innerHTML;
			filteredContentForCities = arr.filter(item => {
				return item.direction === current;
			})
			createContent(filteredContentForCities);
		})
	})
}

function searchItem(arr) {
	let filteredContent = [];
	search.addEventListener('input', (event) => {
		let current = event.target.value.toLowerCase();
		filteredContent = arr.filter(item => {
			return item.direction.toLowerCase().includes(current) || item.country.toLowerCase().includes(current);
		})
		createContent(filteredContent);
	})
}