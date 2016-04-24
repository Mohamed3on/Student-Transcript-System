<!DOCTYPE html>
<?php
session_start();
$connect=@mysql_connect('localhost','root','');
if (!$connect)
{
    die("database connection went kaboom" . mysql_error());

}
$mydb=mysql_select_db('studentgrades');
if(!$mydb)
{
    die("could not select database :" . mysql_error());
}
$id=$_SESSION['id'];
$query="SELECT * FROM `student` WHERE ID='$id'";
$result= mysql_query($query);
$check=mysql_num_rows($result);
if ($check==1) {
    $row = mysql_fetch_row($result);
    $name = $row[1];
    $year=$row[2];
    $semester=$row[3];
    $faculty=$row[4];
}
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
        <div class="userinfo" id="name"><?php echo $name?></div>
        <br>
        <div class="variable">ID:</div>
        <div class="userinfo" id="ID"><?php echo $id?></div>
        <br>
        <div class="variable">Year:</div>
        <div class="userinfo" id="year"><?php echo $year?></div>
        <br>
        <div class="variable">Faculty:</div>
        <div class="userinfo" id="faculty"><?php echo $faculty?></div>
        <br><br>
        <table class="gradesTable order-column" id="GradesTable">
            <thead>
            <tr id="degreeYear">
                <th colspan="7">Year <?php echo $year?></th>
            </tr>
            <tr id="semester">
                <th colspan="7">Semester <?php echo $semester?></th>
            </tr>
            <tr id="TableHeader">
                <th>Module Code</th>
                <th>Module Name</th>
                <th>Module Credit</th>
                <th>Grade</th>
                <th>Final Mark</th>
                <th>Passed</th>
            </tr>
            </thead>
            <tbody>
            <tr id="row1">
                <td> 15CSCI01I</td>
                <td class="module">
                    <div class="moduleName">
                        Analysis of Algorithms
                    </div>
                    <div class="details"> Unseen Exam 92<br>
                        Group assignment 92<br>
                        Class Test 95<br></div>

                </td>
                <td>10</td>
                <td>A+</td>
                <td>93</td>
                <td>Yes</td>
            </tr>
            <tr id="row2">
                <td> 15CSCN01I</td>
                <td class="module">
                    <div class="moduleName"> Introduction to Computer Networks and Data communication</div>
                    <div class="details"> Unseen Exam 90<br>
                        Class Test 92<br>
                        Lab Exam 94<br></div>
                </td>
                <td>10</td>
                <td>A+</td>
                <td>91</td>
                <td>Yes</td>
            </tr>
            <tr id="row3">
                <td> 15CSCI03I</td>
                <td class="module">
                    <div class="moduleName"> Operating Systems</div>
                    <div class="details">
                        Class Test 95<br>
                        Lab Exam 75<br>
                        Unseen Exam 76<br>

                    </div>
                </td>
                <td>10</td>
                <td>A+</td>
                <td>80</td>
                <td>Yes</td>
            </tr>

            <tr id="row4">
                <td> 15CSCI10I</td>
                <td class="module">
                    <div class="moduleName">Computer Architecture</div>
                    <div class="details"> Unseen Exam 76<br>
                        Assignments 85
                        <br></div>
                </td>
                <td>10</td>

                <td>A+</td>
                <td>80</td>
                <td>Yes</td>
            </tr>
            <tr id="row5">
                <td> 15CSCI01I</td>
                <td class="module">
                    <div class="moduleName">Systems Analysis and Design</div>
                    <div class="details"> Group Term Project 75<br>
                        Lab Exam 93
                        <br></div>
                </td>
                <td>10</td>

                <td>A+</td>
                <td>80</td>
                <td>Yes</td>
            </tr>
            <tr id="row6">
                <td> 15CSCI08I</td>
                <td class="module">
                    <div class="moduleName">Software Project Management</div>
                    <div class="details"> Unseen Exam 79<br>
                        Group Term Project 76
                        <br></div>
                </td>
                <td>10</td>
                <td>A+</td>
                <td>78</td>
                <td>Yes</td>
            </tr>
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