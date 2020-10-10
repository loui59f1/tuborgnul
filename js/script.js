window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log(sidenVises);

	document.querySelector("#closebtn").addEventListener("click", closeNav);
	document.querySelector("#openbtn").addEventListener("click", openNav);

}

function openNav() {
	document.getElementById("myNav").style.width = "80%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}
