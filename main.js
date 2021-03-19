
let csvdata = [];

d3.dsv(";", "..data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp;}
);

console.log(csvdata);