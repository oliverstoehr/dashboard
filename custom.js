/* Custom JavaScript for dashboard */

//creating load event
var loadEvent = new Event("load");

// function for reloading data
function reload(loadingScreen) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// getting Element where content should be placed
			var contentElement = document.getElementById("content");
			
			//deleting possible content
			while (contentElement.firstChild) {
				contentElement.removeChild(contentElement.firstChild);
			}
			
			// handling response
			var data = JSON.parse(this.responseText);
			// loop through array and create charts
			for (i = 0; i < data.charts.length; i++) {
				createChart(contentElement, i, data.titles[i], data.charts[i]);
			}
			
			// finished loading
			loadingScreen.dispatchEvent(loadEvent);
		}
	}
	
	xmlhttp.open("GET", "data.php", true);
	xmlhttp.send();
}

// function for creating new chart
function createChart(parentElement, i, title, data) {
	// creating nodes
	var h1 = document.createElement("h2");
	h1.innerHTML = title;
	var canvas = document.createElement("canvas");
	var canvasWrapper = document.createElement("div");
	var col = document.createElement("div");
	col.className = "col-lg-4";
	var card = document.createElement("div");
	card.className = "card";
	card.appendChild(h1);
	canvasWrapper.appendChild(canvas);
	card.appendChild(canvasWrapper);
	col.appendChild(card);
	// if is use to determine when a new row needs to be created
	if (i%3 == 0) {
		var row = document.createElement("div");
		row.className = "row";
		row.appendChild(col);
		parentElement.appendChild(row);
	} else {
		parentElement.lastChild.appendChild(col);
	}
	
	// creating chart
	var myChart = new Chart(canvas, data);

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