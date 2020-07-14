// Select color input

var color = "";
document.getElementById("pixelCanvas").addEventListener("click", function (event) {
    var colorElement = document.getElementById("colorPicker");
    var color = colorElement.value;
    var click = event.target.id;
    document.getElementById(click).style.backgroundColor = color;
})

// Select size input

var size = document.querySelector("#sizePicker"); 
size.addEventListener("submit", function(event) {
    event.preventDefault();
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;

// When size is submitted by the user, call makeGrid()

    makeGrid(height, width);
})

function makeGrid(height, width) {
    var canvas = document.querySelector("#pixelCanvas");

// First, the function deletes any colored cells in the previous grid

    canvas.innerHTML = '';

// Draws the grid

    for (var i = 1; i <= height; i++) {
        canvas.insertAdjacentHTML("afterbegin", `<tr id = canvas${i}></tr>`);
        var line = document.querySelector(`#canvas${i}`);
        for (var j = 1; j <= width; j++) {
            line.insertAdjacentHTML("afterbegin",`<td id = cell${i}${j}></td>`);
        }
    }
}
