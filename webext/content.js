let body = document.body;
if (body) {
	let yt_dlp = document.createElement("div");
	yt_dlp.textContent = "Loading content using yt-dlp...";
	yt_dlp.setAttribute("id", "yt-dlp");
	body.replaceChildren(yt_dlp);

	let video = document.createElement("div");
	video.setAttribute("id", "yt-dlp-video");

	let background = browser.runtime.connect({ name: "yt-dlp" });
	background.onMessage.addListener((message) => {
		if (message) {
			video.innerHTML += message;
		} else {
			body.replaceChildren(video);
		}
	});
	background.postMessage(window.location.toString());
}
