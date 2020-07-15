// Commenting out the following color input code, which I had in originally.
// For some reason, this method was working in my browser, but not working in
// the reviewer's browser. Updated color input code added to Row 45 onward.

// var color = "";
// document.getElementById("pixelCanvas").addEventListener("click", function (event) {
//     var colorElement = document.getElementById("colorPicker");
//     var color = colorElement.value;
//     var click = event.target.id;
//     document.getElementById(click).style.backgroundColor = color;
// })

// Select size input

const row_input = document.getElementById('inputHeight');
const column_input = document.getElementById('inputWidth');
var size = document.querySelector("#sizePicker"); 
size.addEventListener("submit", function(event) {
    event.preventDefault();
    let row_count = row_input.value;
    let column_count = column_input.value;

// When size is submitted by the user, call makeGrid()

    makeGrid(row_count, column_count);
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

// Select color; clickListener moved from table to td element, 
// per reviewer comment.

    let tableCells = Array.from(document.querySelectorAll("td"));

    tableCells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            this.style.backgroundColor = document.querySelector("#colorPicker").value;
        }, false);
    })
}
