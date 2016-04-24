/**
 * Created by Mohamed Oun on 01-Apr-16.
 */
var i = 0;
$(function () {
    
    $("#header").load("../includes/header.php #nav");
    $("#footer").load("../includes/header.php #footer");
});
function addFinal() {
    var input = document.createElement("input");
    var m= $("#modules");
   m.append("<div class='variable' >Final: </div><br>");
   m.append("<div class='variable' >Mark: </div>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.className = "finalMark";
    input.required = false;
   m.append(input);
   m.append("<br>");
   m.append("<div class='variable' >Weight:   </div>");
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.className = "finalWeight";
    input2.max = 100;
    input2.min = 0;
    input2.required = false;
   m.append(input2);
   m.append("<br>");
}
function addCoursework() {
    var input = document.createElement("input");
    var m = $("#modules");
   m.append("<div class='variable' >Coursework: </div><br>");
   m.append("<div class='variable' >Mark: </div>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.className = "courseworkMark";
    input.required = false;
   m.append(input);
   m.append("<br>");
   m.append("<div class='variable' >Weight:   </div>");
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.className = "courseworkWeight";
    input2.max = 100;
    input2.min = 0;
    input2.required = false;
   m.append(input2);
   m.append("<br>");
}
function  getTranscript() {
    if ($type=="admin" )
        return "../admin/AdminTranscript.php";
    else return "../user/Transcript.php";
}
function validateName() {
    var sName = document.forms["GradesForm"]["nameInput"].value;
    if (!/^[a-zA-Z]+$/i.test(sName)) {
        var textbox = $("[name='nameInput']");
        textbox.css('border-color', 'red');
        return false;
    }
    else {
        var textbox = $("[name='nameInput']");
        textbox.css('border-color', 'green');
        return true;
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
function validateModuleName() {
    var good = true;
    $('.moduleName').each(function (i, obj) {
            if (!/^[a-zA-Z]+$/.test(obj.value)) {
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
function validateID() {
    var id = document.forms["GradesForm"]["idInput"].value;
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
function validateForm(event) {

    if (validateName() && validateID() && validateModuleCode() && validateModuleName()) return true;
    else {
        alert("Please check red boxes");
        event.preventDefault();
        return false;
    }

}
function addModule() {
    document.getElementById("addModule").onclick = function () {
        i++;
        var m = $("#modules");
       m.append("<h3 class='moduleTitle'>Module " + i + ": </h3><hr>");
        for (var j = 1; j <= 7; j++) {
            var input = document.createElement("input");
            input.type = "text";
            input.required = true;
            switch (j) {
                case 1:

                   m.append("<div class='userinfo' >Module Code: </div><br>");
                    input.className = "moduleCode";
                   m.append(input);
                   m.append("<br>");
                    break;

                case 2:

                   m.append("<div class='userinfo' >Module Name: </div><br>");
                    input.className = "moduleName";
                   m.append(input);
                   m.append("<br>");
                    break;
                case 3:
                   m.append("<div class='userinfo' >Grade details: </div><br>");
                    addCoursework();
                    addFinal();

                    break;
                case 4:
                    var input1 = document.createElement("input");
                    input1.type = "number";
                    input1.required = true;
                   m.append("<div class='userinfo' >Module Credits: </div><br>");
                   m.append(input1);
                   m.append("<br>");
                    break;
                case 5:

                   m.append("<div class='userinfo' >Grade: </div><br>");
                    input.className = "grade";
                   m.append(input);
                   m.append("<br>");
                    break;
                case 6:
                    input.type = "number";
                   m.append("<div class='userinfo' >Final Mark (Average): </div><br>");
                   m.append(input);
                   m.append("<br>");
                    break;
                case 7:
                    var form = document.createElement("form");
                    var option1 = document.createElement("input");
                    var option2 = document.createElement("input");
                    option1.type = "radio";
                    option1.name = "yesno";
                    option2.type = "radio";
                    option2.name = "yesno";
                    option1.id = "yes";
                    option2.id = "no";
                   m.append("<div class='userinfo' >Passed: </div>");
                   m.append(form);
                   m.append(option1);
                   m.append("<div class='variable' >Yes </div>");
                   m.append(option2);
                   m.append("<div class='variable' >No </div>");
                   m.append("<br>");
                    break;


                default:
                    break;

            }
        }


    }
}
function init() {
    document.getElementById("submitForm").addEventListener("click", validateForm);
    addModule();
}
