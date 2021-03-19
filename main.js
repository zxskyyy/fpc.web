
let csvdata = [];
//data load
d3.dsv(";", "../fpc.web/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp; console.log(csvdata);}
);

console.log(csvdata);