const search = [
	["!b", "https://search.brave.com/search?source=llmSuggest&summary=1&q="], //brave (default)
	["!g", "https://www.google.com/search?q="], // Google
	["!d", "https://duckduckgo.com/?q="], // Duckduckgo
	["!y", "https://www.youtube.com/results?search_query="], // YouTube
	["!a", "https://www.amazon.com.mx/s?k="], // Amazon
];

function handleQuery(event) {
	let key = event.keyCode || event.which;

	if (key == 13) {
		let query = document.getElementById("query").value;
		let flag = true;

		for (let i = 0; i <= search.length - 1; i++) {
			const se = query[0] + query[1];
			const searchWith = search[i][0];

			if (se === searchWith) {
				query = query.slice(2).trim();
				window.location.href = search[i][1] + query;
				flag = false;
			}
		}

		if (flag) window.location.href = search[0][1] + query;
	}
}

function randomWallpaper() {
	let imgPath = "./img/" + Math.floor(Math.random() * 9) + ".png";
	return (document.getElementById("w-img").src = imgPath);
}

randomWallpaper();
const setWallpaper = setInterval(randomWallpaper, 10000);
