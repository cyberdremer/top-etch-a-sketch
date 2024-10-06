const gridContainer = document.querySelector(".grid-container");
const populateGridButton = document.querySelector("#etch-button");
const deleteGridsButton = document.querySelector("#reset-button");
const clearScreenButton = document.querySelector("#clear-button");

function populateGridContainer(dimensions){
    for(let i = 0; i < dimensions; i++){
        const tileColumn = document.createElement("div");
        tileColumn.id = `column-${i}`;
        tileColumn.className = "tile-column";
        for(let j = 0; j < dimensions; j++){{
            const tile = document.createElement("div");
            tile.id = `tile-${j}`;
            tileColumn.appendChild(tile);
        }}
        gridContainer.appendChild(tileColumn);
    }
    gridContainer.addEventListener("mouseover", colorTile)
}



function colorTile(Event){
    Event.target.classList.add("tile-hovered")

}

function deleteGridsInGridContainer(){
    gridContainer.innerHTML = "";
}

function clearTiles(){
    let tilesHovered = document.querySelectorAll(".tile-hovered");
    tilesHovered.forEach(Element => {
        Element.classList.remove("tile-hovered");
    })
}


clearScreenButton.addEventListener('click', ()=>{
    clearTiles();
})



populateGridButton.addEventListener('click', ()=> {
    const rows = Number(prompt("Enter your desired dimensions"));
    populateGridContainer(rows);
    
});


deleteGridsButton.addEventListener('click', ()=> {
    deleteGridsInGridContainer();

})







