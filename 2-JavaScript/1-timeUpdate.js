
var MINUTE = 50;
var WITHINHR = ""

if (MINUTE < 30){
    WITHINHR = "It's just after"
}
else{
    WITHINHR = "It's almost"
}

var HOUR = 8;

var PERIOD = "AM"

if (PERIOD == "AM"){
    TIMEOFDAY = "in the morning!"
}
else if (PERIOD == "PM"){
    TIMEOFDAY = "in the evening!"
}

console.log(WITHINHR, HOUR, TIMEOFDAY);