<!DOCTYPE html>
<?php
session_start();
function CheckValidity()
{
   
   if (!isset($_SESSION['loggedin'])) {
        header('Location:../login/Login.html');
    }
    $type = $_SESSION['type'];
    if ($type == "admin") {
        header("Location:../admin/AdminTranscript.php");
    }
}
function CheckGrade($mark){
    if ($mark >= 77) $grade = "A+";
    else if($mark >=74 &&$mark <77)  $grade = "A";
    else if($mark >=70 &&$mark <74)  $grade = "A-";
    else if($mark >=67 &&$mark <70)  $grade = "B+";
    else if($mark >=64 &&$mark <67)  $grade = "B";
    else if($mark >=60 &&$mark <64)  $grade = "B-";
    else if($mark >=57 &&$mark <60)  $grade = "C+";
    else if($mark >=54 &&$mark <57)  $grade = "C";
    else if($mark >=50 &&$mark <54)  $grade = "C-";
    else if($mark >=47 &&$mark <50)  $grade = "D+";
    else if($mark >=44 &&$mark <47)  $grade = "D";
    else if($mark >=40 &&$mark <44)  $grade = "D-";
    else $grade = "F";
    return $grade;
}
$connect = @mysql_connect('localhost', 'root', '');
if (!$connect) {
    die("database connection went kaboom" . mysql_error());

}
$mydb = mysql_select_db('studentgrades');
if (!$mydb) {
    die("could not select database :" . mysql_error());
}
$id = $_SESSION['id'];
$query = "SELECT * FROM `student` WHERE ID='$id'";
$result = mysql_query($query);
$check = mysql_num_rows($result);
if ($check == 1) {
    $row = mysql_fetch_row($result);
    $name = $row[1];
    $year = $row[2];
    $faculty = $row[3];
}


CheckValidity();


?>

<html lang="en">
<meta charset="UTF-8">
<title>UK Transcript</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<link rel="stylesheet" href="../includes/styles.css">
<script src="../includes/script.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css"
      href="https://cdn.datatables.net/t/dt/dt-1.10.11,cr-1.3.1,r-2.0.2,rr-1.1.1/datatables.min.css"/>
<script type="text/javascript" src="https://cdn.datatables.net/t/dt/dt-1.10.11,r-2.0.2/datatables.min.js"></script>
<body onload="init()">
<header id="header"></header>
<div id="Tcontainter">
    <hr>
    <div class="verticalLine">
        <h1 style="text-decoration: underline ">UK Transcript</h1>
        <div class="variable">Name:</div>
        <div class="userinfo" id="name"><?php echo $name ?></div>
        <br>
        <div class="variable">ID:</div>
        <div class="userinfo" id="ID"><?php echo $id ?></div>
        <br>
        <div class="variable">Year:</div>
        <div class="userinfo" id="year"><?php echo $year ?></div>
        <br>
        <div class="variable">Faculty:</div>
        <div class="userinfo" id="faculty"><?php echo $faculty ?></div>
        <br><br>
        <table class="gradesTable order-column" id="GradesTable">
            <thead>

            <tr id="TableHeader">
                <th>Module Code</th>
                <th>Module Name</th>
                <th>Module Credit</th>
                <th>Grade</th>
                <th>Final Mark</th>
                <th>Passed</th>
                <th>Year</th>
                <th>Semester</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $sql = "SELECT CourseID, course.Name,course.ModuleCredits, (`CourseworkMark`*course.CourseworkWeight/100 + FinalMark*course.FinalWeight/100),grades.CourseworkMark,grades.FinalMark,course.Year,course.Semester FROM grades INNER JOIN course ON grades.CourseID=course.ID WHERE grades.StudentID='$id'";
            $result = mysql_query($sql);
            $numrow = 1;
            while ($row = mysql_fetch_row($result)) {
                $grade=CheckGrade($row[3]);
                if ($row[3] > 40) $passed = "Yes"; else $passed = "No";
                print("<tr id=" . $numrow . "><td>" . $row[0] . "</td> <td class=\"module\"><div class=\"moduleName\">" . $row[1] . "</div> <div class=\"details\">Coursework ".$row[4]."<br>Final ".$row[5]."<br></div></td><td>" . $row[2] . "</td><td>" . $grade . "</td><td>" . round($row[3]) . "</td><td>" . $passed ."</td><td>".$row[6]."</td><td>".$row[7]. "</td></tr>");
                $numrow++;
            }

            ?>

            </tbody>
        </table>
    </div>
    <p style="font-weight: bold ;color:#811e00"> *Hint: Hover over Module name for grade breakdown</p>
    <form style="text-align:center">
        <p><input type="radio" name="SelectAllNone" id="selectAll"> Select All
            <input type="radio" name="SelectAllNone" id="selectNone"> Select None
        </p>
    </form>
    <ul>
        <p id="modules"></p>
    </ul>
    <div class="variable">Average of selected modules:</div>
    <div class="userinfo" id="averageResult"></div>
    <br>
</div>
<footer id="footer"></footer>
</body>
</html>