
let csvdata = [];

//comment because aparently changes didn't push

d3.dsv(";", "../fpc.web/data/pets-citizens.csv").then(
    function(csvtemp){csvdata = csvtemp;}
);

console.log(csvdata);