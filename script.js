// Select color input
const gridColourEl = document.getElementById('colorPicker');
// Select size input
const gridHeightEl = document.getElementById('inputHeight');
const gridWidthEl = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
const submitForm = document.getElementById("sizePicker");
submitForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    makeGrid();
    
});

function makeGrid() { 
    const gridHeight = gridHeightEl.value;
    const gridWidth =gridWidthEl.value;
    const myTable =document.getElementById("pixelCanvas");
 
    //resets values when new table is added.
    myTable.innerHTML = "";
 
    //uses the numbers collected to create a grid of the correct size.
    for (var x = 0; x < gridHeight; x++){
        var row = myTable.insertRow(0);
        for (var y = 0; y < gridWidth; y++){
            var cell = row.insertCell(0);
 
            //adds an event listener to each cell which changes the colour of that cell when clicked. 
            cell.addEventListener('click', function (e) {
                const gridColour =gridColourEl.value;
                e.target.style.backgroundColor = gridColour;
            });
        }
        
    }
   
}