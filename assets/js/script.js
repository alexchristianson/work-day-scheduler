$("#currentDay").text(moment().format("dddd, MM/DD/YYYY"));

$(".saveBtn").on("click", function() {
    var textValue = $(this).siblings(".text-value").val();
    var hourDiv = $(this).parent().attr("id");

    localStorage.setItem(hourDiv, textValue);
});
// repeat for each hour (change the hour)
$("#9 .text-value").val(localStorage.getItem("9"))

