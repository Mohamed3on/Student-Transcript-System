/**
 * Created by Mohamed Oun on 30-Mar-16.
 */
//Jquery
$(function () {
    $("#header").load("../includes/header.html #nav");
    $("#footer").load("../includes/header.html #footer");
});

var name = "Mohamed Oun";
var id = 124897, year = "Third Year", faculty = "Computer Science";

function setValues() {
    if (name != null)
        document.getElementById("name").innerHTML = name;
    document.getElementById("ID").innerHTML = id.toString();
    document.getElementById("year").innerHTML = year;
    document.getElementById("faculty").innerHTML = faculty;

}

function addCheckbox() {
    var table = document.getElementById("GradesTable");
    var x = document.getElementById("TableHeader").insertCell(0);
    x.innerHTML = "<th>Select</th>";
    for (var i = 3; i < table.rows.length; i++) {
        var y = table.rows[i].insertCell(0);
        y.innerHTML = "<input checked='checked'  type='checkbox' class='checkbox' id='checkbox" + i + "'>";
    }

}
function CheckChecked() {
    var table = document.getElementById("GradesTable");
    document.getElementById("modules").innerHTML = "";
    for (var i = 1; i < table.rows.length; i++) {

        if ($("#checkbox" + i).is(":checked")) {
            var $row = $("#checkbox" + i).closest('tr').index();
            $row += 3;
            var $data = $(table.rows[$row]);
            var $final = $data.find(".moduleName").text();
            $("#modules").append("<li>" + $final + "</li>");
        }
    }


}
function getAverage() {
    {
        var table = document.getElementById("GradesTable");
        var count = 0, sum = 0, average;
        for (var i = 1; i < table.rows.length; i++) {


            if ($("#checkbox" + i).is(":checked")) {
                var $row = $("#checkbox" + i).closest('tr').index();
                $row += 3;
                var $data = $(table.rows[$row].cells[5]).text();
                var num = parseInt($data);
                count++;
                sum += num;
            }
        }
        average = sum / count;
        if (count != 0)
            document.getElementById("averageResult").innerHTML = average;
        else
            document.getElementById("averageResult").innerHTML = "No modules selected";

    }
}
function CheckCheckedOnClick() {

    $(".checkbox").click(function () {
            var table = document.getElementById("GradesTable");
            document.getElementById("modules").innerHTML = "";
            for (var i = 1; i < table.rows.length; i++) {

                if ($("#checkbox" + i).is(":checked")) {
                    var $row = $("#checkbox" + i).closest('tr').index();
                    $row += 3;
                    var $data = $(table.rows[$row]);
                    var $final = $data.find(".moduleName").text();
                    $("#modules").append("<li>" + $final + "</li>");
                }
            }
            getAverage();
        }
    );
}
function moduledetails() {
    var self = $(this);
    var $details = self.find('.details');
    $details.slideToggle();
}
function events() {
    $(".details").hide();
    $(".dropdown content").fadeOut();
    $('#GradesTable').DataTable({
        "bLengthChange": false,
        "order": [[5, "desc"]],
        "info": false,
        "paging": false,
        responsive: true
    });

    $("#selectAll").click(function () {
        $(".checkbox").prop('checked', $(this).prop("checked"));
        CheckChecked();
        getAverage();
    });
    $("#selectNone").click(function () {
        $('.checkbox').each(function () { //loop through each checkbox
            this.checked = false; //deselect all checkboxes with class "checkbox"
        });
        CheckChecked();
        getAverage();
    });
    $(".module").hover(moduledetails, moduledetails)

}
$(document).ready(function () {
    addCheckbox();
    events();

});

function init() {
    setValues();
    CheckCheckedOnClick();
    CheckChecked();
    getAverage();

}
window.setTimeout(function () {
    $(".dropdown").click(function () {
        var self = $(this);
        var $content = self.find('.dropdown content');
        if ($content.is(':visible'))  $content.slideUp();
        else $content.slideDown();
    })
}, 1);