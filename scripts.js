/** @format */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const select = document.querySelector(".select");
const more = document.querySelector(".btn-more");
const cards = document.querySelector(".cards");

const openMenu = () => {
	navMenu.classList.remove("desktop");
	navMenu.classList.toggle("active");
	hamburger.classList.toggle("active");
};

const closeMenu = () => {
	navMenu.classList.add("desktop");
	navMenu.classList.remove("active");
	hamburger.classList.remove("active");
};

hamburger.addEventListener("click", () => {
	openMenu();
});

navItem.forEach((n) => {
	n.addEventListener("click", (n) => {
		closeMenu();
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeMenu();
	}
});

const technologies = [
	{
		title: "Web Development",
		image: "./assets/icon/icon-web.png",
		content:
			"Bin Tech is a nationwide innovation inclusive environment designed to ensure students.",
	},
	{
		title: "Mobile App",
		image: "./assets/icon/icon-mob.png",
		content:
			"Bin Tech is a nationwide innovation inclusive environment designed to ensure students.",
	},
	{
		title: "Graphics Design",
		image: "./assets/icon/icon-graphics.png",
		content:
			"Bin Tech is a nationwide innovation inclusive environment designed to ensure students.",
	},
	{
		title: "Robot Dev",
		image: "./assets/icon/icon-robot.png",
		content:
			"Bin Tech is a nationwide innovation inclusive environment designed to ensure students.",
	},
	{
		title: "Network Design",
		image: "./assets/icon/icon-network.png",
		content:
			"Bin Tech is a nationwide innovation inclusive environment designed to ensure students.",
	},
];

const showCards = (i) => {
	cards.innerHTML += `<article class="card">
						<img class="card-img" src=${technologies[i].image} alt="" />
						<h3 class="card-title">${technologies[i].title}</h3>
						<p class="card-content">${technologies[i].content}
						</p>
					</article>`;
};

document.addEventListener("DOMContentLoaded", () => {
	technologies.forEach((pro, i) => {
		showCards(i);
	});
});
