showLogout = () => {
  $('.navbar-dropdown').toggle()
}

toggle_sidebar = () => {
  if (clickCount % 2 === 0) {
    $('#sidebar').addClass('active');

  } else {
    $('#sidebar').removeClass('active');
  }
  clickCount++;
}

$(document).ready(function () {
  console.log("ready!");
  clickCount = 0; // Counter for sidebar (vertical navbar) in mobile view
});