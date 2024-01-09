// show current day and date
var currentDate = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
var showTime = document.querySelector("#currentDay");
showTime.textContent = currentDate;

$(document).ready(function () {
  
  // click listener for user input
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save to local storage
    localStorage.setItem(time, text);
  });

  function timeTracker() {
  
    var currentTime = dayjs().hour();
  
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  
      // add background classes based on time
      if (timeBlock === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("future past");
      } else if (timeBlock > currentTime) {
        $(this).removeClass("past present");
        $(this).addClass("future");
      } else {
        $(this).removeClass("future present");
        $(this).addClass("past");
      }
    });
  }

  timeTracker();

// get data from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

});