const backgrounds = [
	{ start: 0, end: 4, url: "img/background/night_b.jpg" },
	{ start: 4, end: 5, url: "img/background/night_c.jpg" },
	{ start: 5, end: 7, url: "img/background/sunrise.jpg" },
	{ start: 7, end: 9, url: "img/background/morning_a.jpg" },
	{ start: 9, end: 11, url: "img/background/morning_b.jpg" },
	{ start: 11, end: 13, url: "img/background/noon.jpg" },
	{ start: 13, end: 14, url: "img/background/afternoon_a.jpg" },
	{ start: 14, end: 16, url: "img/background/afternoon_b.jpg" },
	{ start: 16, end: 18, url: "img/background/sunset_a.jpg" },
	{ start: 18, end: 19, url: "img/background/sunset_b.jpg" },
	{ start: 19, end: 22, url: "img/background/evening.jpg" },
	{ start: 22, end: 24, url: "img/background/night_a.jpg" },
];

const hour = new Date().getHours();

// Find the background that matches the current hour
const background = backgrounds.find(b => hour >= b.start && hour < b.end);

if (background) {
	const style = `
		body {
			background: transparent url(${background.url}) fixed no-repeat 50% 50% / cover;
		}
		.navigation {
			background: transparent;
		}
	`;
	const styleSheet = document.createElement("style");
	styleSheet.type = "text/css";
	styleSheet.textContent = style;
	document.head.appendChild(styleSheet);
}