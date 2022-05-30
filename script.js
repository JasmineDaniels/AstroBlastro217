var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"))
console.log(today)

var currentTime = today.format("h:mm a")
console.log(currentTime)

var nineAM = moment(today).set("hour", 9).set("minute", 00).set("second", 00);
console.log(nineAM) //gotta figure out AM

var tenAM = new Date("Sun May-29-2022, 9:00 AM")
var nineTime = moment(tenAM).format("h A")
console.log(nineTime)
$("#nine-am").text(nineTime)// works

// var newHour = today.add(1, "h");
// console.log(newHour)
