/**
 * Created by Mohamed Oun on 30-Mar-16.
 */
//Jquery
$(function(){
    $("#header").load("header.html #nav");
    $("#footer").load("header.html #footer");
});

var name = "Mohamed";
var id = 124897, year = "Third Year",faculty="Computer Science";

function setValues() {
    if (name != null)
        document.getElementById("name").innerHTML = name;
    document.getElementById("ID").innerHTML = id;
    document.getElementById("year").innerHTML = year;
    document.getElementById("faculty").innerHTML = faculty;

}

function addCheckbox() {
    var table= document.getElementById("GradesTable");
    var x = table.rows[0].insertCell(0);
    x.innerHTML = "<th>Select</th>";
    for ( i=1; i<table.rows.length; i++)
    {
        var x = table.rows[i].insertCell(0);
        x.innerHTML = "<input  type='checkbox' class='checkbox' id='checkbox"+i+"'>";
    }

}
function CheckChecked() {
    var table= document.getElementById("GradesTable");
    $(".checkbox").click(function(){
    for ( i=1; i<=table.rows.length; i++)
    {

            if( $("#checkbox"+i).is(":checked"))  document.getElementById("modules").innerHTML=i+"<br>";

        }


    }
    );
}

function init() {
    setValues();
    addCheckbox();
    CheckChecked();

}
