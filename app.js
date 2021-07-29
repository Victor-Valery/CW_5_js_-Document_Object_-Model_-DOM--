/* The Document Object Model (DOM) */

/* It defines the logical structure of documents and the way a document is accessed and manipulated. */

/* Finding Elements

document.getElementById(id) : Find an element by element id
document.getElementsByTagName(name): Find elements by tag name
document.getElementsByClassName(name): Find elements by class name
Changing Elements

element.innerHTML: Change the inner HTML of an element
element.attribute: Change the attribute value of an HTML element
Adding and Deleting Elements

document.createElement(element) : Create an HTML element
document.removeChild(element): Remove an HTML element
document.appendChild(element): Add an HTML element
document.replaceChild(new, old) : Replace an HTML element
document.write(text) : Write into the HTML output stream */

/*#####################################*/

document.getElementById("object").innerHTML = "Hello World!";

var x = document.getElementById("demo");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
    'The first paragraph inside is: ' + y[0].innerHTML;

/*#####################################*/

/* DOM Events

There are more DOM Events. For full list you can check MDN documents.

* onabort - Loading of an image is interrupted

* onblur - An element loses focus

* onchange - The content of a field changes

* onclick - Mouse clicks an object

* ondblclick - Mouse double-clicks an object

* onerror - An error occurs when loading a document or an image

* onfocus - An element gets focus

* onkeydown - A keyboard key is pressed

* onkeypress - A keyboard key is pressed or held down

* onkeyup - A keyboard key is released

* onload - A page or an image is finished loading

* onmousedown - A mouse button is pressed

* onmousemove - The mouse is moved

* onmouseout - The mouse is moved off an element

* onmouseover - The mouse is moved over an element

* onmouseup - A mouse button is released

* onreset - The reset button is clicked

* onresize - A window or frame is resized

* onselect - Text is selected

* onsubmit - The submit button is clicked

* onunload - The user exits the page */

/******************************************* */

/* onclick Event Type */

function sayHello() {
    alert("Hello World")
}

/******************************************* */

/* onsubmit Event Type */

function validation() {
    /* all validation goes here */
    return either /* true or false */
}

/******************************************* */

/* onmouseover and onmouseout Event Type */

function over() {
    document.write("Mouse Over");
}
function out() {
    document.write("Mouse Out");
}

/******************************************* */

function okClick() {
    alert('You clicked me!!');
}

const okButton = document.getElementById('ok');
okButton.onclick = okClick;

/******************************************* */

/* Event Listeners */

const okButton = document.getElementById('ok');

okButton.addEventListener('click', function1);
// We attached function1 to okButton to be called when it is clicked.

okButton.addEventListener('click', function2);
// We attached another function to okButton to be called when it is **clicked** again. 
// When button clicked, both functions will be called.

okButton.addEventListener('keyup', function3);
// we attached another function for a different event.

/******************************************* */

const okButton = document.getElementById('ok');

okButton.addEventListener('click', function1);
okButton.addEventListener('click', function2);
okButton.addEventListener('keyup', function3);

// This removes the second eventListener for 'click'
okButton.removeEventListener('click', function2);

/*#####################################*/

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

/* text.style.backgroundColor = "red"; */

/* text.classList.add("change"); */

changeColor.addEventListener('click', function () {
    /* text.classList.add("change"); */
    text.classList.toggle("change");
});

const userList = document.querySelectorAll(".name-list li")

/* console.log(userList); */

for (user of userList) {
    user.addEventListener('click', function () {
        /*    console.log(this); */
        this.style.color = "red";
    });
}