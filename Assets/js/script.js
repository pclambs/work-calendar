// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentHour = dayjs().format('H')

  // Click events for save buttons.
  $('.saveBtn').on('click', function() {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    
    // TODO: 
    // Save the user input in local storage using the time-block ID as the key
    console.log(timeBlockId, userInput);
  });

  // Code to apply the past, present, or future class to each time
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var hour = parseInt(timeBlockId.split('-')[1]); // Extract the hour from the ID
    
    if (hour < currentHour) {
      $(this).addClass('past').removeClass('present future');
    } else if (hour == currentHour) {
      $(this).addClass('present').removeClass('past future');
    } else {
      $(this).addClass('future').removeClass('past present');
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // Code to display the current date in the header of the page.
  var today = dayjs();
  $('#today').text(today.format('MMMM D, YYYY'));

});
