var hour = dayjs().hour();


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

// Listener for click events on the save button using the id in the containing time-block as a key to save the user input in local storage. 
$(saveBtn).click(function() {
var description_val = $(this.parentElement).children('#description').val();

console.log(description_val);
localStorage.setItem(this.parentElement.id, description_val);
});

// Gets any user input that was saved in localStorage and sets the values of the corresponding textarea elements. 
$(function () {
  console.log(hour);
  var children = document.getElementById("container").children;

  for (c of children) {
    var el = document.getElementById(c.id);
    $(el).children('#description').val(localStorage.getItem(c.id));

  // removes the 'hour-' from the id on each hour and turns it into integer
    var hourId = parseInt(c.id.replace('hour-', ''), 10); 


  // Applies the past, present, or future class to each time block by comparing the id to the current hour. 
  if (hourId) {
    if (hourId < hour) {
     el.classList.add("past")
      // console.log("past")
      // console.log(hourId);
    } 
    else if(hourId === hour) {
      el.classList.add("present")
      // console.log("present")
    }
    else {
      el.classList.add("future")
      // console.log("future");
      // console.log(hourId);
    }
  }
  }
  
    
    // Displays the current date in the header of the page.
    var today = dayjs().format('dddd, MMMM D, YYYY'); 
    $('#currentDay').text(today); 
  });

  function addInputToLocalStorage() {

  }
  
 