
let csvdata = [];
let page = 1;
let json = [];
//do this in the respective function

//data load
d3.dsv(";", "../fpc.web/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp; console.log(csvdata); tableStart(100,1);}
);

console.log(csvdata);

function tableDown(){
    let tableBody = document.getElementById("tableBody");
    tableBody.textContent = '';
    if(page == 1){
        tableStart(100,1);
    } else {
        page = page -1;
        tableStart(100,page);
    }
}

function tableUp(){
    let tableBody = document.getElementById("tableBody");
    tableBody.textContent = '';
    if(page == 235){
        tableStart(100,235);
    } else {
        page = page +1;
        tableStart(100,page);
    }
}

function tableStart(pageSize, pageNumber){
    let tableBody = document.getElementById("tableBody");
    tableBody.textContent = '';
    for(let i = (pageNumber-1)*100; i<(pageNumber*pageSize)+pageSize; i++){
        if(i>23411){
            break;
        }
        //we create two new rows
        let newTableRow = document.createElement('tr');
        let newExtraRow = document.createElement('tr');

        //we create and append all children components to the row
        //microchip;species;sex;size;potentDangerous;neighborhood
        let newRowMicrochip = document.createElement('th');
        newRowMicrochip.innerHTML = csvdata[i].microchip;
        newTableRow.appendChild(newRowMicrochip);
        let newRowSpecies = document.createElement('th');
        newRowSpecies.innerHTML = csvdata[i].species;
        newTableRow.appendChild(newRowSpecies);
        let newRowSex = document.createElement('th');
        newRowSex.innerHTML = csvdata[i].sex;
        newTableRow.appendChild(newRowSex);
        let newRowSize = document.createElement('th');
        newRowSize.innerHTML = csvdata[i].size;
        newTableRow.appendChild(newRowSize);
        let newRowPotentDangerous = document.createElement('th');
        newRowPotentDangerous.innerHTML = csvdata[i].potentDangerous;
        newTableRow.appendChild(newRowPotentDangerous);
        let newRowNeighborhood = document.createElement('th');
        newRowNeighborhood.innerHTML = csvdata[i].neighborhood;
        newTableRow.appendChild(newRowNeighborhood);
        let newButton = document.createElement('button');
        newButton.innerHTML = "Actualizar";
        newButton.addEventListener('click', theFunction(newRowMicrochip.innerHTML, pageSize, pageNumber));
        newTableRow.appendChild(newButton);
        document.getElementById("tableBody").appendChild(newTableRow);

        //the second table with the extra stuff
        let newExtraMicrochip = document.createElement('th');
        newExtraMicrochip.innerHTML = csvdata[i].microchip;
        newExtraRow.appendChild(newExtraMicrochip);
        let newExtraRace = document.createElement('th');
        if(csvdata[i].race != undefined){
            newExtraRace.innerHTML = csvdata[i].race;
        } else {
            newExtraRace.innerHTML = "";
        }
        newExtraRow.appendChild(newExtraRace);
        let newExtraOwner = document.createElement('th');
        if(csvdata[i].owner != undefined){
            newExtraOwner.innerHTML = csvdata[i].owner;
        } else {
            newExtraOwner.innerHTML = "";
        }
        newExtraRow.appendChild(newExtraOwner);
        let newExtraAdress = document.createElement('th');
        if(csvdata[i].adress != undefined){
            newExtraAdress.innerHTML = csvdata[i].adress;
        } else {
            newExtraAdress.innerHTML = "";
        }
        newExtraRow.appendChild(newExtraAdress);
        let newExtraPath = document.createElement('th');
        if(csvdata[i].pic != undefined){
            let newImage = document.createElement('img');
            newImage.setAttribute("src", csvdata[i].pic)
            newExtraPath.appendChild(newImage);
        } else {
            newExtraPath.innerHTML = "";
        }
        newExtraRow.appendChild(newExtraPath);
        document.getElementById("extraBody").appendChild(newExtraRow);
    }
}