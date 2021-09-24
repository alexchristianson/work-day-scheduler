$("#currentDay").text(moment().format("dddd, MM/DD/YYYY"));

$(".saveBtn").on("click", function() {
    var textValue = $(this).siblings(".text-value").val();
    var hourDiv = $(this).parent().attr("id");

    localStorage.setItem(hourDiv, textValue);
});
// repeat for each hour (change the hour)
$("#9 .text-value").val(localStorage.getItem("9"));
$("#10 .text-value").val(localStorage.getItem("10"));
$("#11 .text-value").val(localStorage.getItem("11"));
$("#12 .text-value").val(localStorage.getItem("12"));
$("#13 .text-value").val(localStorage.getItem("13"));
$("#14 .text-value").val(localStorage.getItem("14"));
$("#15 .text-value").val(localStorage.getItem("15"));
$("#16 .text-value").val(localStorage.getItem("16"));
$("#17 .text-value").val(localStorage.getItem("17"));

var currentTime = moment().hours();

function cssUpdate() {
    $(".divTime").each(function() {
        var divID = parseInt($(this).attr("id")); 
        
        if (currentTime === divID) {
            $(this).addClass("present")
        }
        else if (currentTime > divID) {
            $(this).addClass("past")
        }
        else {
            $(this).addClass("future")
        }
    })
};

cssUpdate();
setInterval(cssUpdate, 300000);