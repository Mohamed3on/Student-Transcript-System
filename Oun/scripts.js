/**
 * Created by Mohamed Oun on 01-Apr-16.
 */
var i=0;
$(function () {
    $("#header").load("header.html #nav");
    $("#footer").load("header.html #footer");
});
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
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;

                case 2:

                    $("#modules").append("<div class='userinfo' >Module Name: </div><br>");
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;
                case 3:
                    var input1 = document.createElement("input");
                    input1.type = "number";
                    input1.required = true;
                    $("#modules").append("<div class='userinfo' >Module Credits: </div><br>");
                    $("#modules").append(input1);
                    $("#modules").append("<br>");
                    break;
                case 4:

                    $("#modules").append("<div class='userinfo' >Grade: </div><br>");
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;
                case 5:

                    $("#modules").append("<div class='userinfo' >Final Mark (Average): </div><br>");
                    $("#modules").append(input);
                    $("#modules").append("<br>");
                    break;
                case 6:
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
