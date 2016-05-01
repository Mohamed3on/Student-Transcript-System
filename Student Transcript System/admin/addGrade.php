<?php
$ID = $_POST['idInput'];
$courseID = $_POST['moduleCode'];
$final = $_POST['finalMark'];
$coursework = $_POST['courseworkMark'];
function DatabaseConnect()
{
    $connect = @mysql_connect('localhost', 'root', '');
    if (!$connect) {
        die("database connection went kaboom" . mysql_error());
    }
    $mydb = mysql_select_db('studentgrades');
    if (!$mydb) {
        die("could not select database :" . mysql_error());
    }
}

function validateIDs()
{
    $ID = $GLOBALS['ID'];
    $courseID = $GLOBALS['courseID'];
    $query = "SELECT * FROM `student` WHERE ID='$ID'";
    $result = mysql_query($query);
    $check = mysql_num_rows($result);
    if ($check < 1) {
        echo "the Student ID isn't registered in the database<br>";
        header("refresh:2;url=AdminTranscript.php");
        return false;
    }
    $query = "SELECT ID FROM `course` WHERE ID='$courseID'";
    $result = mysql_query($query);
    $check = mysql_num_rows($result);
    if ($check < 1) {
        echo "the Course ID isn't registered in the database<br>";
        header("refresh:2;url=AdminTranscript.php");
        return false;
    }
    return true;
}

function addGrade()
{
    if (validateIDs()) {
        $ID = $GLOBALS['ID'];
        $courseID = $GLOBALS['courseID'];
        $coursework = $GLOBALS['coursework'];
        $final = $GLOBALS['final'];
        $query = "INSERT INTO `grades`(`StudentID`, `CourseID`, `CourseworkMark`,`FinalMark`) VALUES ('$ID','$courseID','$coursework','$final')";
        mysql_query($query);
        if (mysql_errno()) {
            echo "MySQL error " . mysql_errno() . ": "
                . mysql_error() . "\n<br>When executing <br>\n$query\n<br>";
            header("refresh:1;url=AdminTranscript.php");
        } else {
            echo "Insertion success";
            header("refresh:1;url=AdminTranscript.php");
        }
    }
}

DatabaseConnect();
addGrade();


