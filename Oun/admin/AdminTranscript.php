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
            <div class="userinfo"><label>Student ID:</label> <br>
            </div>
            <input type="text" required="required" name="idInput"><br>
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