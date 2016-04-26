/**
 * Created by Mohamed Oun on 01-Apr-16.
 */
$(function () {

    $("#header").load("../includes/header.php #nav");
    $("#footer").load("../includes/header.php #footer");
});
function addFinal() {
    var input = document.createElement("input");
    var m = $("#add");
    m.append("<div class='variable' >Final Mark: </div><br>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.name = "finalMark";
    input.required = false;
    m.append(input);
    m.append("<br>");

}
function addCoursework() {
    var input = document.createElement("input");
    var m = $("#add");
    {
        m.append("<div class='userinfo' >Grade details: </div><br>");
        m.append("<div class='variable' >Coursework Mark: </div><br>");
        input.type = "number";
        input.max = 100;
        input.min = 0;
        input.name = "courseworkMark";
        input.required = false;
        m.append(input);
        m.append("<br>");
    }


}

function validateModuleCode() {
    var good = true;
    $('.moduleCode').each(function (i, obj) {
            if (!/^[a-zA-Z0-9]+$/.test(obj.value)) {
                obj.style.borderColor = 'red';
                good = false;
            }
            else {
                obj.style.borderColor = 'green';
            }
        }
    );
    return good;
}

function validateAddID() {
    var id = document.forms["addGrade"]["idInput"].value;
    if (!/^[0-9]+$/i.test(id)) {
        var textbox = $("[name='idInput']");
        textbox.css('border-color', 'red');
        return false;
    }
    else {
        var textbox = $("[name='idInput']");
        textbox.css('border-color', 'green');
        return true;
    }
}
function validateDeleteID() {
    var id = document.forms["deleteGrade"]["idInput"].value;
    if (!/^[0-9]+$/i.test(id)) {
        var textbox = $("[name='idInput']");
        textbox.css('border-color', 'red');
        return false;
    }
    else {
        var textbox = $("[name='idInput']");
        textbox.css('border-color', 'green');
        return true;
    }
}
function validateAddForm(event) {

    if (validateAddID() && validateModuleCode()) return true;
    else {
        alert("Please check red boxes");
        event.preventDefault();
        return false;
    }

}
function validateDeleteForm(event) {

    if (validateDeleteID() && validateModuleCode()) return true;
    else {
        alert("Please check red boxes");
        event.preventDefault();
        return false;
    }

}
function addModule() {


    var m = $(".modules");
    for (var j = 1; j <= 2; j++) {
        var input = document.createElement("input");
        input.type = "text";
        input.required = true;
        switch (j) {
            case 1:

                m.append("<div class='userinfo' >Module Code: </div><br>");
                input.name = "moduleCode";
                input.className = "moduleCode";
                m.append(input);
                m.append("<br>");
                break;

            case 2:
                addCoursework();
                addFinal();

                break;

            default:
                break;

        }
    }


}
function init() {
    document.getElementById("addGrade").addEventListener("click", validateAddForm);
    document.getElementById("deleteGrade").addEventListener("click", validateDeleteForm);
    addModule();
}
