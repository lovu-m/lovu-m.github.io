var menu = document.getElementById("menu");
var icon_menu = document.getElementById("icon-menu");
var darker = document.getElementById("dark");
var no = document.getElementById("no");

var noper = 0;

resize();

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function resize() {
	if (screen.width <= 700) {
		menu.style.maxWidth = "0px";
	}
	else {
		menu.style.maxWidth = "10000px";
	}
}

function toggle() {
	if (menu.style.maxWidth == "0px") {
		menu.style.maxWidth = "180px";
		icon_menu.style.background = '#e5e5e5';
		darker.style.background = '#000010';
		darker.style.zIndex = "1";
	}
	else {
		menu.style.maxWidth = "0px";
		icon_menu.style.background = 'none';
		darker.style.background = 'none';
		darker.style.zIndex = "0";
	}
}

function nope(){
	no.style.position = "fixed";
	no.style.left = getRandomInt(screen.width - 80) + "px";
	no.style.top = getRandomInt(screen.height - 80) + "px";
	no.style.width = "40px";
	no.style.zIndex = 10;
	noper += 1;
	if (noper == 5) {
		alert("Dis 'oui' stp ☹️❤️❤️");
	}
	if (noper == 8) {
		alert("Vraiment, cliques sur le 'oui', juste pour voir ☹️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️");
	}
	if (noper == 10) {
		alert("Ehehehehehe, plus le choix, clique sur 'oui' 👀👀");
		no.style.display = "none";
	}
}