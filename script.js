// Grab elements
// var textarea = $(".container").children().eq(1)

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"))
console.log(today)

var currentTime = today.format("h:mm a")
console.log(currentTime)

function whatTime(){
    if (formNine = currentTime) {
        $("#nine-am").textarea.classList.add(".present")
    } if (formNine < currentTime) {
        $("#nine-am").textarea.classList.add(".past")
    } if (formNine > currentTime) {
        $("#nine-am").textarea.classList.add(".future")
    }
}

// AM's
var nineAM = moment(today).set("hour", 9).set("minute", 00).set("second", 00);
var formNine = nineAM.format("h A")
console.log(formNine) 
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

//Manipulate tenAM Date+1
var exampleAM = new Date("Sun May-29-2022, 9:00 AM") //may not work because date is hard coded 
var nineTime = moment(exampleAM).format("h A") // so it will be in past tense 
console.log(nineTime)
// $("#nine-am").text(nineTime)// AM/PM works


