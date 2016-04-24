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

    $username=$_POST['username'];
    $password=$_POST['password'];
    $query="SELECT * FROM `login` WHERE username='$username' and password='$password'";
    $result= mysql_query($query);
    $check=mysql_num_rows($result);
    if ($check==1){
        $_SESSION['username']=$username;
        $_SESSION['loggedin'] = true;
            $row = mysql_fetch_row($result);
        if ($row[2]=="admin")
        { $_SESSION['type']='admin';
            header("Location:../admin/AdminTranscript.php");
        }

        else if ($row[2]=="student")

        {
            $_SESSION['type']="student";
            $_SESSION['id']=$row[3];
                header("Location:../user/Transcript.php");
        }

       
    }
    else echo "You're not registered :( or have you forgotten your password?";



?>