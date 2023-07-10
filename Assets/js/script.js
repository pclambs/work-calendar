// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  
  // Click events for save buttons.
  $('.saveBtn').on('click', function() {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    
    // Save the user input in local storage using the time-block ID as the key
    localStorage.setItem(timeBlockId, userInput)
  });
  
  // Code to apply the past, present, or future class to each time
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var hour = parseInt(timeBlockId.split('-')[1]); // Extract the hour from the ID
    var currentHour = dayjs().format('H')
  
  if (hour < currentHour) {
    $(this).addClass('past').removeClass('present future');
  } else if (hour == currentHour) {
    $(this).addClass('present').removeClass('past future');
  } else {
    $(this).addClass('future').removeClass('past present');
  }
});

// Code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements
$('.time-block').each(function() {
  var timeBlockId = $(this).attr('id');
  var storedValue = localStorage.getItem(timeBlockId);
  if (storedValue) {
    $(this).find('.description').val(storedValue);
  }
});


// Code to display the current date in the header of the page.
var today = dayjs();
$('#today').text(today.format('MMMM D, YYYY'));

});