/**
 * Created by Mohamed Oun on 01-Apr-16.
 */
var i=0;
$(function () {
    $("#header").load("../includes/header.html #nav");
    $("#footer").load("../includes/header.html #footer");
});
function addFinal() {
    var input = document.createElement("input");
    $("#modules").append("<div class='variable' >Final: </div><br>");
    $("#modules").append("<div class='variable' >Mark: </div>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.className = "finalMark";
    input.required = false;
    $("#modules").append(input);
    $("#modules").append("<br>");
    $("#modules").append("<div class='variable' >Weight:   </div>");
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.className = "finalWeight";
    input2.max = 100;
    input2.min = 0;
    input2.required = false;
    $("#modules").append(input2);
    $("#modules").append("<br>");
}
function addCoursework() {
    var input = document.createElement("input");
    $("#modules").append("<div class='variable' >Coursework: </div><br>");
    $("#modules").append("<div class='variable' >Mark: </div>");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.className = "courseworkMark";
    input.required = false;
    $("#modules").append(input);
    $("#modules").append("<br>");
    $("#modules").append("<div class='variable' >Weight:   </div>");
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.className = "courseworkWeight";
    input2.max = 100;
    input2.min = 0;
    input2.required = false;
    $("#modules").append(input2);
    $("#modules").append("<br>");
}
function  init() {
    document.getElementById("addModule").onclick = function() {
        i++;
        $("#modules").append("<h3 class='moduleTitle'>Module "+i+": </h3><hr>");
        for (var j=1;j<=6; j++ ) {
            var input = document.createElement("input");
            input.type = "text";
            input.required = true;
            switch (j) {
                case 1:

                    $("#modules").append("<div class='userinfo' >Module Code: </div><br>");
                    input.className="moduleCode"
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;

                case 2:

                    $("#modules").append("<div class='userinfo' >Module Name: </div><br>");
                    input.className = "moduleName"
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;
                case 3:
                    $("#modules").append("<div class='userinfo' >Grade details: </div><br>");
                    addCoursework();
                     addFinal();

                    break;
                case 4:
                    var input1 = document.createElement("input");
                    input1.type = "number";
                    input1.required = true;
                    $("#modules").append("<div class='userinfo' >Module Credits: </div><br>");
                    $("#modules").append(input1);
                    $("#modules").append("<br>");
                    break;
                case 5:

                    $("#modules").append("<div class='userinfo' >Grade: </div><br>");
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;
                case 6:
                    input.type="number";
                    $("#modules").append("<div class='userinfo' >Final Mark (Average): </div><br>");
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;
                case 7:
                    var form = document.createElement("form");
                    var option1 =document.createElement("input");
                    var option2 = document.createElement("input");
                    option1.type="radio";
                    option1.name = "yesno";
                    option2.type = "radio";
                    option2.name = "yesno";
                    option1.id = "yes";
                    option2.id = "no";
                    $("#modules").append("<div class='userinfo' >Passed: </div>");
                    $("#modules").append(form);
                    $("#modules").append(option1);
                    $("#modules").append("<div class='variable' >Yes </div>");
                    $("#modules").append(option2);
                    $("#modules").append("<div class='variable' >No </div>");
                    $("#modules").append("<br>");
                    break;


                default: break;

            }
        }


    }
}
