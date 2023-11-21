var currentPageUrl = window.location.pathname;

// Oculta todos los íconos por defecto
document.querySelectorAll(".section-icon").forEach(function (icon) {
	icon.style.display = "none";
});

if (currentPageUrl.includes("/users/profile/myTracks/")) {
	// Muestra los íconos de la sección de mis pistas
	document.querySelectorAll(".products-icon").forEach(function (icon) {
		icon.style.display = "none"; // Oculta los íconos de productos
	});
	document.querySelectorAll(".mytracks-icon").forEach(function (icon) {
		icon.style.display = "block"; // Muestra los íconos de mis pistas
	});
} else {
	// Muestra los íconos de la sección de productos en caso contrario
	document.querySelectorAll(".products-icon").forEach(function (icon) {
		icon.style.display = "block";
	});
	document.querySelectorAll(".mytracks-icon").forEach(function (icon) {
		icon.style.display = "none";
	});
}

import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";

const wavesurfer = WaveSurfer.create({
	id: "<%= product.id %>",
	container: "#wave-<%= product.id %>",
	waveColor: "#36363a",
	// waveColor: "#414141",
	progressColor: "#ffffff",
	barHeight: 0.75,
	cursorWidth: 0,
	height: 50,
	url: "/audio/<%= product.beat %>",
});

wavesurfer.on("ready", () => {
	const timeDisplay = document.getElementById("time-display-<%= product.id %>");
	const duracionTotalDisplay = document.getElementById(
		"duracion-total-<%= product.id %>"
	);

	// Obtener la duración total
	const duracionTotal = wavesurfer.getDuration();

	const totalMinutes = Math.floor(duracionTotal / 60);
	const totalSeconds = Math.floor(duracionTotal % 60);
	duracionTotalDisplay.innerText = `${totalMinutes}:${totalSeconds
		.toString()
		.padStart(2, "0")}`;

	wavesurfer.on("audioprocess", (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		timeDisplay.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
	});
});

const grids = document.getElementById("grid-<%= product.id %>");
const playButton = document.getElementById("playsong-<%= product.id %>");
const playIcon = document.getElementById("play-icon-<%= product.id %>");
const pauseIcon = document.getElementById("pause-icon-<%= product.id %>");
const image = document.getElementById("image-<%= product.id %>");

playButton.addEventListener("click", () => {
	if (wavesurfer.isPlaying()) {
		wavesurfer.pause();
		grids.classList.remove("bg-zinc-900");
		image.classList.remove("hidden");
		playButton.classList.add("hidden");
		playIcon.classList.add("xl:inline-block");
		pauseIcon.classList.add("hidden");
		pauseIcon.classList.remove("inline-block");
	} else {
		wavesurfer.play();
		grids.classList.add("bg-zinc-900");
		image.classList.add("hidden");
		playButton.classList.remove("hidden");
		playIcon.classList.remove("xl:inline-block");
		pauseIcon.classList.remove("hidden");
		pauseIcon.classList.add("inline-block");
	}
});
