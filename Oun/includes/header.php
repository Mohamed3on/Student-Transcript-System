<!DOCTYPE html>
<?php
session_start();
$type = $_SESSION['type'];
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] = true) {
    if ($type == "admin") $transcript = "../admin/AdminTranscript.php";
    else if ($type == "student") $transcript = "../user/Transcript.php";
    $login = "Logout";
    $loginpage = "../logout/logout.php";
} else {
    $transcript = '../login/Login.html';
    $login = "Login";
    $loginpage = '../login/Login.html';
}
?>
<html>
<meta charset="UTF-8">
<title>Header/Footer</title>
<div id="nav">
    <div id="logo">
        <a href='../Home/Home.php'><img src="../images/logo.png" style="float: left; " alt="logo" width="240"
                                        height="160"></a>
    </div>
    <ul>
        <li>
            <a href='../Home/Home.php'>Home</a>
        </li>
        <li style="display: inline">
            <a href= <?php echo $transcript; ?>> Transcript</a>
        </li>
        <li>
            <a href=<?php echo $loginpage ?>><?php echo $login ?></a>
        </li>
    </ul>
</div>
<div id="footer">
    <ul>
        <li style="display: inline">
            <a href='../Home/Home.php'>Home</a>
        </li>
        <li style="display: inline">
            <a href= <?php echo $transcript; ?>> Transcript</a>
        </li>
        <li style="display: inline">
            <a href=<?php echo $loginpage ?>><?php echo $login ?></a>
        </li>
    </ul>
</div>


</html>