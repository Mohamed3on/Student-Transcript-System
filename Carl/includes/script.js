window.onload = function ()
{
    if(document.getElementById("loginBtn"))
        document.getElementById("loginBtn").addEventListener("click",displayLoginDropdown);
    if(document.getElementById("searchAlumniBtn"))
    document.getElementById("searchAlumniBtn").addEventListener("click",validateSearch);

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

function validateSearch()
{
    var re = /^\d+$/;
    var x = document.forms["searchAlumni"]["alumName"].value;
    if (x == null || x == "") 
    {
        document.getElementById("alert").innerHTML = "<h2>Name must be filled out.</h2>";
        return false;
    }
    else if(re.test(x))
    {
        document.getElementById("alert").innerHTML = "<h2>Input can't be a number.</h2>";
        return false;
    }
}