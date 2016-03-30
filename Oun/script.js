/**
 * Created by Mohamed Oun on 30-Mar-16.
 */
var name = "Mohamed";
var id = 124897, year = "Third Year",faculty="Computer Science";
function setValues() {
    if (name != null)
        document.getElementById("name").innerHTML = name;
    document.getElementById("ID").innerHTML = id;
    document.getElementById("year").innerHTML = year;
    document.getElementById("faculty").innerHTML = faculty;
}

document.addEventListener('DOMContentLoaded', setValues, false);
