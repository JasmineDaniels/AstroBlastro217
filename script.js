var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY, h:mm a"))
console.log(today)

var currentTime = today.format("h:mm a")
console.log(currentTime)

// var newHour = today.add(1, "h");
// console.log(newHour)
