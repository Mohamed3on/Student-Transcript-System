/**
 * Created by Mohamed Oun on 02-Apr-16.
 */
$(function () {
    $("#header").load("../includes/header.html #nav");
    $("#footer").load("../includes/header.html #footer");
});
function validateUsername() {
    var uName = document.forms["loginForm"]["username"].value;
    var textbox = $("[name='username']");
    if (!/^[a-zA-Z0-9]+$/i.test(uName)) {
        textbox.css('border-color', 'red');
        alert("Username should contain only numbers and alphabets!");
        return false;
    }
    else {
        textbox.css('border-color', 'green');
        return true;
    }


}
function validateForm(event) {

    if (validateUsername()) return true;
    else {
        event.preventDefault();
        return false;
    }

}
function init() {
    document.getElementById("submitForm").addEventListener("click", validateForm);
}