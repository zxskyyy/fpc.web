
let csvdata = [];
let isCsvLoaded = false;
//data load
d3.dsv(";", "../fpc.web/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp; console.log(csvdata); isCsvLoaded = true;}
);

while(true){   
    if (isCsvLoaded){
        console.log("loaded");
        break;
    }
}