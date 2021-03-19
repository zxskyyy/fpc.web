
let csvdata = [];
let isCsvLoaded = false;
//data load
d3.dsv(";", "../fpc.web/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp; console.log(csvdata); isCsvLoaded = true;}
);

while(isCsvLoaded == false){ 
    //do nothing 
}

console.log("loaded");