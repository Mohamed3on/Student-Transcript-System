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
    var x = document.getElementById("TableHeader").insertCell(0);
    x.innerHTML = "<th>Select</th>";
    for (i = 3; i < table.rows.length; i++) {
        var x = table.rows[i].insertCell(0);
        x.innerHTML = "<input checked='checked'  type='checkbox' class='checkbox' id='checkbox" + i + "'>";
    }

}
function CheckChecked() {
    var table = document.getElementById("GradesTable");
    document.getElementById("modules").innerHTML = "";
    for (i = 1; i < table.rows.length; i++) {

        if ($("#checkbox" + i).is(":checked")) {
            var $row = $("#checkbox" + i).closest('tr').index();
            $row+=3;
            var $data=$(table.rows[$row]);
            var $final=$data.find(".moduleName").text();
            $("#modules").append("<li>" + $final + "</li>");
        }
    }


}
function getAverage() {
    {
        var table = document.getElementById("GradesTable");
        var count = 0, sum = 0, average;
        for (i = 1; i < table.rows.length; i++) {


            if ($("#checkbox" + i).is(":checked")) {
                var $row = $("#checkbox" + i).closest('tr').index();
                $row+=3;
                var $data=$(table.rows[$row].cells[5]).text();
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
        for (i = 1; i < table.rows.length; i++) {

            if ($("#checkbox" + i).is(":checked")) {
                var $row = $("#checkbox" + i).closest('tr').index();
                $row+=3;
                var $data=$(table.rows[$row]);
                var $final=$data.find(".moduleName").text();
                $("#modules").append("<li>" + $final + "</li>");
            }
        }
        getAverage();
        }
    );
}

$(document).ready(function () {
    addCheckbox();
    $(".details").fadeOut();
    $('#GradesTable').DataTable({"bLengthChange": false,
        "order": [[ 5, "desc" ]],
        "info":     false,
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
            this.checked = false; //deselect all checkboxes with class "checkbox1"
        });
        CheckChecked();
        getAverage();
    });
  $(".module").click(function () {
      var self=$(this);
      var $details=self.find('.details');
      if ( $details.is(':visible'))  $details.slideUp();
     else $details.slideDown();
  })

});

function init() {
    setValues();
    CheckCheckedOnClick();
    CheckChecked();
    getAverage();

}
