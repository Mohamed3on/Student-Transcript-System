<!DOCTYPE html>
<?php
session_start();
function checkValidity(){
  if (!isset($_SESSION['loggedin'])) {header('Location:../login/Login.html');}
    $type=$_SESSION['type'];
    if ($type=="student") header("Location:../user/Transcript.php");

}
checkValidity();
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Transcript(Admin)</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <link rel="stylesheet" href="../includes/styles.css">
    <script src="../includes/Adminscript.js" type="text/javascript"></script>
</head>

<body onload="init()">
<header id="header"></header>
<div id="Tcontainter">
    <hr>
    <div class="verticalLine">
        <h2>Add Student Grades:</h2>
        <form name="GradesForm" action="admin.php" method="post">
            <div class="userinfo"><label>Name:</label> <br>
            </div>
            <input type="text" required="required" autofocus="autofocus" name="nameInput"><br>
            <div class="userinfo"><label>ID:</label> <br>
            </div>
            <input type="text" required="required" name="idInput"><br>
            <div class="userinfo"><label>Faculty:</label> <br>
            </div>
            <select name="facultyInput">
                <option selected="selected" value="ICS">ICS</option>
                <option value="Engineering">Engineering</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Political Science">Political Science</option>
            </select><br>
            <div class="userinfo"><label>Year:</label> <br></div>
            <input type="number" min="1" max="5"  required="required" name="yearInput"><br>
            <div class="userinfo"><label>Semester:</label> <br></div>
            <input type="number" min="1" max="3" required="required" name="semesterInput"><br>
            <div id="modules"></div>
            <div id="buttons" style="text-align: center; margin:auto;">
                <input type="button" id="addModule" value="Add Module">
                <input type=submit id="submitForm" value="Submit grades">
            </div>

        </form>

    </div>
</div>
<footer id="footer"></footer>
</body>
</html>