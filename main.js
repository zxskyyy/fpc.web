
let csvdata = [];
let page = 1;

//data load
d3.dsv(";", "../fpc.web/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp; console.log(csvdata); tableStart(100,1)}
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
        //we create a row
        let newTableRow = document.createElement('tr');
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
        document.getElementById("tableBody").appendChild(newTableRow);
    }
}

//Code that really doesn't matter bc I'm stupid
    /*if(elementsOnPage.length == 0){
        //table gets built normally using the elementsOnPage information
        let newTableRow = document.createElement("tr");
        for(let i = 0; i<elementsOnPage.length; i++){
            //first, we create and append all children components to the row
            
        }
    } else {
        //we empty the array
        const arraylength = array.length;
        for(let i=0; i<arraylength; i++){
            array.shift();
        }
        //and then build it using the elementsOnPage information

    }*/