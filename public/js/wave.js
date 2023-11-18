// American English vowels

import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import Spectrogram from "https://unpkg.com/wavesurfer.js@7/dist/plugins/spectrogram.esm.js";

import products from "/products.json";

const grid = document.getElementById("wave");

products.forEach((product) => {
	const productDiv = document.createElement("div");
	productDiv.textContent = `[ ${product.name} ]`;

	const wavesurfer = WaveSurfer.create({
		container: productDiv,
		height: 50,
		hideScrollbar: true,
		waveColor: "rgb(200, 0, 200)",
		progressColor: "rgb(100, 0, 100)",
		url: `/audio/${product.beat}`,
		sampleRate: 14600,
		interact: false,
		plugins: [
			Spectrogram.create({
				labels: true,
				labelsColor: "currentColor",
				labelsBackground: "transparent",
				height: 150,
			}),
		],
	});

	wavesurfer.on("ready", () => {
		productDiv.onclick = () => {
			wavesurfer.playPause();
		};
	});

	grid.appendChild(productDiv);
});
// var wavesurfer = WaveSurfer.create({
// 	container: "#wave",

// 	waveColor: "#6e6e6e",
// 	progressColor: "#b3b3b3",
// 	cursorColor: "#ffffff",
// 	height: 100,
// 	splitChannels: false,
// 	normalize: false,
// 	cursorWidth: 0,
// 	barWidth: null,
// 	barGap: null,
// 	barRadius: 1,
// 	barHeight: 0.6,
// 	barAlign: "",
// 	minPxPerSec: 1,
// 	fillParent: true,
// 	autoplay: false,
// 	interact: true,
// 	dragToSeek: false,
// 	hideScrollbar: false,
// 	audioRate: 1,
// 	autoScroll: true,
// 	autoCenter: true,
// 	sampleRate: 8000,
// });

// var audioFileName = document
// 	.getElementById("wave")
// 	.getAttribute("data-audio-file");
// wavesurfer.load(`/audio/${audioFileName}`);
// wavesurfer.load("/audio/b9Prueba.mp3");

// wavesurfer.on("interaction", () => {
// 	wavesurfer.play();
// });

// $(".btn-toggle-pause").on("click", function () {
// 	wavesurfer.playPause();
// });

// $(".btn-backward").on("click", function () {
// 	wavesurfer.skipBackward();
// });

// $(".btn-forward").on("click", function () {
// 	wavesurfer.skipForward();
// });

// $(".btn-toggle-mute").on("click", function () {
// 	wavesurfer.toggleMute();
// });

// $(".btn-stop").on("click", function () {
// 	wavesurfer.stop();
// });
