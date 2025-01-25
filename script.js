function updateHeight(){
	let width = window.innerWidth;
	let height= window.innerHeight;
	
	document.getElementById("width").textContent = width;
	document.getElementById("height").textContent = height;
}
updateHeight();
window.addEventListner("resize", updateHeight);

