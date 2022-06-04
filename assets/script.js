
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"))
console.log(today)
//current time formatted into Hours and parsed into an integer (Military time)
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

// When $(this) saveBtn is clicked,
//User Input => saveBtn textarea.val() 

$(".saveBtn").click(function(){
    var value = $(this).siblings(".textArea").val();
    var key = $(this).attr("id");

    if (key && value){
        localStorage.setItem(key, value);
        console.log(localStorage)
    }

});

// Refactor Code 
// for (let i = 9; i < 18; i++) {
//     // var for the id w/ the value of i 
//     var nextKey = $(`#key-${i}`).attr("id") 
//     // var for the textarea sibling of the id with the value of i  
//     var nextValue = $("#" + i).siblings(".textarea").val();

//     // if 
//     if (localStorage.getItem(`#key-${i}`)){
//         $("#text-9").append(localStorage.getItem(`#key-${i}`));
//     } else {
//         $("#text-9").append("Add Text");
//     };
// }

if (localStorage.getItem("key-9")){
    $("#text-9").append(localStorage.getItem("key-9"));
} else {
    $("#text-9").append("Add Text");
};

if (localStorage.getItem("key-10")){
    $("#text-10").append(localStorage.getItem("key-10"));
} else {
    $("#text-10").append("Add Text");
};

if (localStorage.getItem("key-11")){
    $("#text-11").append(localStorage.getItem("key-11"));
} else {
    $("#text-11").append("Add Text");
};

if (localStorage.getItem("key-12")){
    $("#text-12").append(localStorage.getItem("key-12"));
} else {
    $("#text-12").append("Add Text");
};

if (localStorage.getItem("key-13")){
    $("#text-13").append(localStorage.getItem("key-13"));
} else {
    $("#text-13").append("Add Text");
};

if (localStorage.getItem("key-14")){
    $("#text-14").append(localStorage.getItem("key-14"));
} else {
    $("#text-14").append("Add Text");
};

if (localStorage.getItem("key-15")){
    $("#text-15").append(localStorage.getItem("key-15"));
} else {
    $("#text-15").append("Add Text");
};

if (localStorage.getItem("key-16")){
    $("#text-16").append(localStorage.getItem("key-16"));
} else {
    $("#text-16").append("Add Text");
};

if (localStorage.getItem("key-17")){
    $("#text-17").append(localStorage.getItem("key-17"));
} else {
    $("#text-17").append("Add Text");
};



