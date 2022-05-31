// Grab elements
// var textarea = $(".container").children().eq(1)
// var nineEl = $("#nine-am")

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"))
console.log(today)

var currentTime = today.format("h A")
console.log("current time is: " + currentTime)


// AM's
var nineAM = moment(today).set("hour", 9).set("minute", 00).set("second", 00);
var formNine = nineAM.format("h A")
console.log("nine AM " + formNine) 
$("#nine-am").text(formNine)

var tenAM = moment(today).set("hour", 10).set("minute", 00).set("second", 00);
var formTen = tenAM.format("h A")
console.log(formTen)
$("#ten-am").text(formTen)

var elevenAM = moment(today).set("hour", 11).set("minute", 00).set("second", 00);
var formEleven = elevenAM.format("h A")
console.log(formEleven)
$("#eleven-am").text(formEleven)

// PM's
var twelvePM = nineAM.add(3, "h").format("h A")
console.log(twelvePM)
$("#twelve-pm").text(twelvePM)

var onePM = moment(today).set("hour", 1).set("minute", 00).set("second", 00);
var formOne = onePM.add(12, "h").format("h A"); 
console.log(formOne)
$("#one-pm").text(formOne)

var twoPM = moment(today).set("hour", 2).set("minute", 00).set("second", 00);
var formTwo = twoPM.add(12, "h").format("h A"); 
console.log(formTwo)
$("#two-pm").text(formTwo)

var threePM = moment(today).set("hour", 3).set("minute", 00).set("second", 00);
var formThree = threePM.add(12, "h").format("h A"); 
console.log(formThree)
$("#three-pm").text(formThree)

var fourPM = moment(today).set("hour", 4).set("minute", 00).set("second", 00);
var formFour = fourPM.add(12, "h").format("h A"); 
console.log(formFour)
$("#four-pm").text(formFour)

var fivePM = moment(today).set("hour", 5).set("minute", 00).set("second", 00);
var formFive = fivePM.add(12, "h").format("h A"); 
console.log(formFive)
$("#five-pm").text(formFive)


// how long has it been?
var howLong = nineAM.from(today)
console.log(today.format("dddd, MMMM Do, YYYY, h A"))
console.log("it's been " + howLong)

console.log(tenAM.fromNow())

// diff
var before = nineAM.diff(today, "hours")
console.log(before) // happened earlier

// var now = nineAM.diff(today, "hours")
// console.log(now)

var after = today.diff(nineAM, "hours")
console.log(after) // the next day

// Loop thru all times 


// if 
if (before > 0) { // present
    $("textarea").attr("style","background-color: #ff6961")
} if (after < 0){ // future
    $("textarea").attr("style","background-color: #77dd77")
} if (today === after){ // past
    $("textarea").attr("style","background-color: #d3d3d3")
}

