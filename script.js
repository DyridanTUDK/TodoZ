var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var but = document.createElement('button')
	but.className = 'btn'
	but.appendChild(document.createTextNode('delete'))
	li.appendChild(but)
	input.value = "";
	but.onclick = removeParent
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

function removeParent(event){
	event.target.parentNode.remove()
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);