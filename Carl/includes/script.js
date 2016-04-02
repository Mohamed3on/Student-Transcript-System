window.onload = function ()
{
    if(document.getElementById("loginBtn"))
        document.getElementById("loginBtn").addEventListener("click",displayLoginDropdown);
    if(document.getElementById("searchAlumniBtn"))
    document.getElementById("searchAlumniBtn").addEventListener("click",validateSearch);
    if(document.getElementById("loginSubmit"))
        document.getElementById("loginSubmit").addEventListener("click",valideLogin);
}

function displayLoginDropdown()
{
  document.getElementById("myDropdown").classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) 
{
  if (!e.target.matches('.dropbtn') && !e.target.matches('#usernameField') && !e.target.matches('#passwordField') && !e.target.matches('#loginSubmit')) 
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) 
    {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show'))
          openDropdown.classList.remove('show');
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
    else
    {
        document.getElementById("alert").innerHTML = "";
        document.getElementById("searchResults").style.display = "block";
        document.getElementById("resultName").innerHTML = x;

        return false;
    }
}

function validateLogin()
{
    var re = /^\d+$/;
    var un = document.forms["loginForm"]["un"].value;
    var pw = document.forms["loginForm"]["password"].value;

    if (un == null || un == "") 
    {
        alert("Username can't be empty.");
        return false;
    }
    
    else if (pw == null || pw == "") 
    {
        alert("Password can't be empty.");
        return false;
    }

    else
        return true;
}