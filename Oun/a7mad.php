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

$sql = "SELECT CourseID, StudentID, (`CourseworkMark`*course.CourseworkWeight/100 + FinalMark*course.FinalWeight/100) FROM grades INNER JOIN course ON grades.CourseID=course.ID";
$result= mysql_query($sql);
echo "      <table border = \"1\">
         <tr>
           <th>ID</th> <th>URL</th><th>description</th>
         </tr>";

while ( $row = mysql_fetch_row( $result ) )
    print( "<tr><td>" . $row[ 0 ] . "</td><td>" . $row[ 1 ] . "</td><td>" . $row[2] . "</td></tr>" );
echo "</table>";
?>

