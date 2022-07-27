/** @format */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const select = document.querySelector(".select");
const more = document.querySelector(".btn-more");
const cards = document.querySelector(".cards");
const feature = document.querySelector(".feature-cards");

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

const lectures = [
	{
		title: "Backend Lecture",
		name: "Mohammed Hussen",
		image: "./assets/icon/icon-binhussen.jpg",
		content:
			"Experienced Software Engineer with a demonstrated history of working in Full-stack Web development.",
	},
	{
		title: "senior Lecture",
		name: "Abdul Mejid",
		image: "./assets/icon/icon-binhussen.jpg",
		content:
			"Experienced Software Engineer with a demonstrated history of working in Full-stack Web development.",
	},
	{
		title: "Network Lecture",
		name: "osman waqo",
		image: "./assets/icon/icon-binhussen.jpg",
		content:
			"Experienced Software Engineer with a demonstrated history of working in Full-stack Web development.",
	},
	{
		title: "Full Stack Lecture",
		name: "Yesuf fetna",
		image: "./assets/icon/icon-binhussen.jpg",
		content:
			"Experienced Software Engineer with a demonstrated history of working in Full-stack Web development.",
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

const showLectures = (i) => {
	feature.innerHTML += `<article class="feature-card">
						<div class="feature-img">
							<img
								src="./assets/bg/checkerboard-squares-black-white.jpg"
								alt="background"
								class="bg-people"
							/>
							<img
								class="people-img"
								src=${lectures[i].image}
								alt="binhussen image"
							/>
						</div>

						<div>
							<h3 class="feture-name">${lectures[i].name}</h3>
							<h5 class="card-title">${lectures[i].title}</h5>
							<p class="card-content">
								${lectures[i].content}
							</p>
						</div>
					</article>`;
};

document.addEventListener("DOMContentLoaded", () => {
	technologies.forEach((pro, i) => {
		showCards(i);
	});

	lectures.forEach((pro, i) => {
		showLectures(i);
	});
});
