/**
 * Created by Mohamed Oun on 01-Apr-16.
 */
$(function () {

    $("#header").load("../includes/header.php #nav");
    $("#footer").load("../includes/header.php #footer");
});
function addFinalAdd() {
    var input = document.createElement("input");
    var m = $("#add");
    m.append("<div class='variable' >Final Mark: </div><br>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.name = "finalMark";
    input.value = 0;
    m.append(input);
    m.append("<br>");
}
function addFinalUpdate() {
    var input = document.createElement("input");
    var u = $("#update");
    u.append("<div class='variable' >Final Mark: </div><br>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.name = "finalMark";
    input.value = 0;
    u.append(input);
    u.append("<br>");
}
function addFinal() {
    addFinalAdd();
    addFinalUpdate();

}
function addCourseWorkAdd() {
    var input = document.createElement("input");
    var m = $("#add");
    m.append("<div class='userinfo' >Grade details: </div><br>");
    m.append("<div class='variable' >Coursework Mark: </div><br>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.name = "courseworkMark";
    input.value = 0;
    m.append(input);
    m.append("<br>");
}
function addCourseWorkUpdate() {
    var input = document.createElement("input");
    var u = $("#update");
    u.append("<div class='userinfo' >Grade details: </div><br>");
    u.append("<div class='variable' >Coursework Mark: </div><br>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.name = "courseworkMark";
    input.value = 0;
    u.append(input);
    u.append("<br>");
}
function addCoursework() {
    addCourseWorkAdd();
    addCourseWorkUpdate();

}

function validateAddModuleCode() {
    var module = document.forms["addGrade"]["moduleCode"].value;
    var good = true;

    if (!/^[a-zA-Z0-9]+$/.test(module)) {
        module.style.borderColor = 'red';
        good = false;
    }
    else {
        module.style.borderColor = 'green';
    }


    return good;
}
function validateDeleteModuleCode() {
    var module = document.forms["deleteGrade"]["moduleCode"].value;
    var good = true;

    if (!/^[a-zA-Z0-9]+$/.test(module)) {
        module.style.borderColor = 'red';
        good = false;
    }
    else {
        module.style.borderColor = 'green';
    }


    return good;
}
function validateUpdateModuleCode() {
    var module = document.forms["updateGrade"]["moduleCode"].value;
    var good = true;

    if (!/^[a-zA-Z0-9]+$/.test(module)) {
        module.style.borderColor = 'red';
        good = false;
    }
    else {
        module.style.borderColor = 'green';
    }


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
function validateUpdateID() {
    var id = document.forms["updateGrade"]["idInput"].value;
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

    if (validateAddID() && validateAddModuleCode()) return true;
    else {
        alert("Please check red boxes");
        event.preventDefault();
        return false;
    }

}
function validateDeleteForm(event) {

    if (validateDeleteID() && validateDeleteModuleCode()) return true;
    else {
        alert("Please check red boxes");
        event.preventDefault();
        return false;
    }

}
function validateUpdateForm(event) {

    if (validateUpdateID() && validateUpdateModuleCode()) return true;
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
    document.getElementById("updateGrade").addEventListener("click", validateUpdateForm);

    addModule();
}
