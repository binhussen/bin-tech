/** @format */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const select = document.querySelector(".select");

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
