/**
 * Created by Mohamed Oun on 30-Mar-16.
 */
var name=prompt("Please enter your name");
function setName() {
    if (name !=null)
        document.getElementById("name").innerHTML =
            name;
}
document.addEventListener('DOMContentLoaded',setName,false);
