/* Custom JavaScript for dashboard */

//creating load event
var loadEvent = new Event("load");

// function for reloading data
function reload(loadingScreen) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// handling response
			var data = JSON.parse(this.responseText);
			// TODO handle data here and create charts
						
			// finished loading
			loadingScreen.dispatchEvent(loadEvent);
		}
	}
	
	xmlhttp.open("GET", "data.php", true);
	xmlhttp.send();
}

// register EventListener & load content
window.onload = function () {
	// listener for loading screen
	var loadingScreen = document.getElementById("loading-screen");
	loadingScreen.addEventListener("load", function () {
		loadingScreen.classList.remove("loading");
	});
	// listener for reload button
	document.getElementById("reload").addEventListener("click", function () {
		loadingScreen.classList.add("loading");
		reload(loadingScreen);
	});
	
	// load content
	loadingScreen.classList.add("loading");
	reload(loadingScreen);
}