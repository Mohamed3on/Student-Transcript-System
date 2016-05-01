<!DOCTYPE html>
<?php
session_start();
function checkValidity()
{
    if (!isset($_SESSION['loggedin'])) {
        header('Location:../login/Login.html');
    }
    $type = $_SESSION['type'];
    if ($type == "student") header("Location:../user/Transcript.php");

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
        <h2>Student Grades Operations:</h2>
        <form name="addGrade" action="addGrade.php" method="post">
            <h3>Add Grade: </h3>
            <hr>
            <div class="userinfo"><label>Student ID:</label> <br>
            </div>
            <input type="text" required="required" name="idInput"><br>
            <div class="modules" id="add"></div>
            <br> <input style="text-align: center; margin:auto;" type=submit id="addGrade" value="Add Grade">

        </form>
        <form name="deleteGrade" action="deleteGrade.php" method="post">
            <h3>Delete Grade: </h3>
            <hr>
            <div class="userinfo"><label>Student ID:</label> <br>
            </div>
            <input type="text" required="required" name="idInput"><br>
            <div class="modules"></div>
            <br> <input style="text-align: center; margin:auto;" type=submit id="deleteGrade" value="Delete Grade">

        </form>
        <form name="updateGrade" action="updateGrade.php" method="post">
            <h3>Update Grade: </h3>
            <hr>
            <div class="userinfo"><label>Student ID:</label> <br>
            </div>
            <input type="text" required="required" name="idInput"><br>
            <div class="modules" id="update"></div>
            <br> <input style="text-align: center; margin:auto;" type=submit id="updateGrade" value="Update Grade">

        </form>

    </div>
</div>
<footer id="footer"></footer>
</body>
</html>