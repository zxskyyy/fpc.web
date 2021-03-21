
let csvdata = [];

//I am gonna fuck git's shit up

//data load
d3.dsv(";", "../fpc.web/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp; console.log(csvdata); tableStart(5,1)}
);

console.log(csvdata);

function tableStart(pageSize, pageNumber){
    for(let i = (pageSize*pageNumber)-1; i<(pageNumber*pageSize)+pageSize; i++){
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
        document.getElementById("actualTable").appendChild(newTableRow);
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