/**
 * Created by Mohamed Oun on 30-Mar-16.
 */
//Jquery
$(function () {
    $("#header").load("header.html #nav");
    $("#footer").load("header.html #footer");
});

var name = "Mohamed";
var id = 124897, year = "Third Year", faculty = "Computer Science";

function setValues() {
    if (name != null)
        document.getElementById("name").innerHTML = name;
    document.getElementById("ID").innerHTML = id;
    document.getElementById("year").innerHTML = year;
    document.getElementById("faculty").innerHTML = faculty;

}

function addCheckbox() {
    var table = document.getElementById("GradesTable");
    var x = table.rows[1].insertCell(0);
    x.innerHTML = "<th>Select</th>";
    for (i = 2; i < table.rows.length; i++) {
        var x = table.rows[i].insertCell(0);
        x.innerHTML = "<input checked='checked'  type='checkbox' class='checkbox' id='checkbox" + i + "'>";
    }

}
function CheckChecked() {
    var table = document.getElementById("GradesTable");
    document.getElementById("modules").innerHTML = "";
    for (i = 1; i < table.rows.length; i++) {
        var $row = $(table.rows[i].cells[2]).text();
        if ($("#checkbox" + i).is(":checked"))
            $("#modules").append("<li>" + $row + "</li>");

    }

}
function CheckCheckedOnClick() {

    $(".checkbox").click(function () {
            var table = document.getElementById("GradesTable");
            document.getElementById("modules").innerHTML = "";
            for (i = 1; i < table.rows.length; i++) {
                var $row = $(table.rows[i].cells[2]).text();
                if ($("#checkbox" + i).is(":checked"))
                    $("#modules").append("<li>" + $row + "</li>");

            }


        }
    );
}
function getAverage() {
    {
        var table = document.getElementById("GradesTable");
        var count = 0, sum = 0, average;
        for (i = 1; i < table.rows.length; i++) {
            var $row = $(table.rows[i].cells[6]).text();
            var num = parseInt($row);
            if ($("#checkbox" + i).is(":checked")) {
                count++;
                sum += num;
            }
        }
        average = sum / count;
        if (count != 0)
            document.getElementById("averageResult").innerHTML = average;
        else
            document.getElementById("averageResult").innerHTML = "No Courses selected";

    }
}
$(document).ready(function () {
    $("#average").click(function () {
        getAverage();
    });
    $("#selectAll").click(function () {
        $(".checkbox").prop('checked', $(this).prop("checked"));
        CheckChecked();
    });
    $("#selectNone").click(function () {
        $('.checkbox').each(function () { //loop through each checkbox
            this.checked = false; //deselect all checkboxes with class "checkbox1"
        });
        CheckChecked();
    });
    var table = document.getElementById("GradesTable");
    $(".checkbox").click(function () {
            document.getElementById("modules").innerHTML = "";
            var $modules = document.getElementById("modules");
            for (i = 1; i < table.rows.length; i++) {
                var $row = $(table.rows[i].cells[2]).text();
                if ($("#checkbox" + i).is(":checked"))
                    $(modules).append("<li>" + $row + "</li>");

            }


        }
    );
});

function init() {
    setValues();
    addCheckbox();
    CheckCheckedOnClick();
    CheckChecked();
    getAverage();

}
