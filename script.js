var buttonO = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var h1 = document.querySelector("h1");
h1.className = "coolTitle";
function inputLength() {
	return input.value.length;
}

function createLi() {
	var li = document.createElement("li");
	button = document.createElement("button");
  button.appendChild(document.createTextNode("X"));
	button.addEventListener("click", function(){
		ul.removeChild(li)
	}) 
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", function(){
		li.classList.toggle("done");
	})
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0){
		createLi();
	}
}

function addListAfterKeyPress(event){
	if (inputLength() > 0 && event.charCode===13	){
		createLi();
	}
}
function deleteAll() {
	body.removeChild(ul);
	ul = document.createElement("ul");
}

buttonO.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);