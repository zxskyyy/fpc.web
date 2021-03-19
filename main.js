
let csvdata = [];

d3.dsv(";", "../Taller2/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp;}
);

console.log(csvdata);