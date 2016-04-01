window.onload = function ()
{
    document.getElementById("loginBtn").addEventListener("click",displayLoginDropdown);
}

function displayLoginDropdown()
{
  document.getElementById("myDropdown").classList.toggle('show');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn') && !e.target.matches('#usernameField') && !e.target.matches('#passwordField') ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}