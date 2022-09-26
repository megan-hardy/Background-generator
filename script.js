let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
		+ color1.value + ", " 
		+ color2.value +")";
		css.textContent = body.style.background + ";"
		//inserts code into h3 which was set equal to css
}
function copy() {
	navigator.clipboard.writeText(css.textContent);
	alert("Copied to clipboard!");
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

/* Not adding the () after setGradient keeps the function 
from running without the event listener calling it */

/* ALSO could have added onclick or oninput attributes 
directly to the input tags in HTML*/