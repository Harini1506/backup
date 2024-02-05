$(document).ready(function() {
  // Add a click event listener to the body element
  $('body').on('click', function(e) {
    // Check if the navigation menu is currently open
    if ($('.navbar-collapse').hasClass('in')) {
      // If it is, check if the click was not inside the navigation bar
      if (!$(e.target).closest('.navbar-header').length && !$(e.target).closest('.navbar-collapse').length) {
        // If it was not, close the navigation menu
        $('.navbar-collapse').collapse('hide');
      }
    }
  });
});