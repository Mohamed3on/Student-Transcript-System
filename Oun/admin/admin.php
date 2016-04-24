<?php
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

    $name=$_POST['nameInput'];
    $ID=$_POST['idInput'];
    $faculty=$_POST['facultyInput'];
    $year=$_POST['yearInput'];
    $query="INSERT INTO `student`(`Name`, `ID`, `Faculty`,`Year`) VALUES ('$name','$ID','$faculty','$year')";
    mysql_query($query);
if(mysql_errno()){
    echo "MySQL error ".mysql_errno().": "
        .mysql_error()."\n<br>When executing <br>\n$query\n<br>";
}

?>