
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"))
console.log(today)
//current time formatted into Hours and turned into Military time (an integer)
var currentTime = JSON.parse(today.format("H"))
console.log("current time is: " + currentTime)

// Loop thru all times 
for (let i = 9; i < 18; i++) {
    // var for the id w/ the value of i, parsed into an integer from a str 
    var nextTime = JSON.parse($(`#${i}`).attr("id")) 
    // var for the textarea sibling of the id with the value of i  
    var nextSib = $("#" + i).siblings("textarea")

    // if 
    if (nextTime == currentTime) { // present 
        nextSib.attr("style","background-color: #ff6961")
    } if (nextTime < currentTime){ // past 
        nextSib.attr("style","background-color: #d3d3d3")
    } if (nextTime > currentTime){ // future 
        nextSib.attr("style","background-color: #77dd77")
    };
}

// Local Storage User Input => saveBtn textarea.val() 

$(".saveBtn").click(function(){
    var value = $(this).siblings(".textArea").val();
    var key = $(this).attr("id");
    var output = $(this).siblings("textArea")

    if (key && value){
        localStorage.setItem(key, value);
        console.log(localStorage)
    }

    output.append("<li>" +localStorage.getItem("key") + "</li>")
});

// $("text-9").append(localStorage.getItem("key"))


