// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  var currentHour = dayjs().format('H')

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

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

  // How can Day.js be used to get the current hour in 24-hour time?
  console.log(currentHour)



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // Code to display the current date in the header of the page.
  var today = dayjs();
  $('#today').text(today.format('MMMM D, YYYY'));

});
