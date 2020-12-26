//prompts
var rain = prompt("How many inches of rain fell?");
var fertilizer = prompt("Did you use fertilizer?");
var brand = "Did you use premium or regular fertilizer?";
var rainYield;
var total;

// functions
function rainfall(inches){
    var rainAmount = "";
    for (var x = 0; x < inches; x++){
        rainAmount = rainAmount + "*";
    }
    return (rainAmount);
}

function rainCalculation(inches){
    var x = 50;
    var y = 0.9;
    var z = 0.8;
    if (inches <= 10){
        rainYield = x * z;
    }
    else if(inches >= 20){
        rainYield = x * y;
    }
    else if(11 <= inches && inches <= 19){
        rainYield = x;
    }
}

function manure(answer){
    if(answer === "yes"){
        var grow = prompt (brand);
        type(grow);
    }
    else{
        console.log("The yield should be " + rainYield + " bushels per acre.");
    }
}

function type(premium){
    if(premium === "premium"){
        total = rainYield * 1.2;
    }
    else{
        total = rainYield * 1.1;
    }
    console.log("The yield should be " + total + " bushels per acre.");
}

// calls
console.log (rainfall(rain));
rainCalculation(rain);
manure(fertilizer);


