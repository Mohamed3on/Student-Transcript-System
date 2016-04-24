<!DOCTYPE html>
<?php
session_start();
if (isset($_SESSION['type'])){
    $type = $_SESSION['type'];
}

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
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>BUE</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script>
        $(function () {
            $("#header").load("../includes/header.php #nav");
            $("#footer").load("../includes/header.php #footer");
        });
    </script>

    <link href="../includes/styles.css" rel="stylesheet">
</head>

<body>
<header id="header"></header>
<div id="container">
    <div class="box" style=" float:left; ">
        <h1> <a href= <?php echo $transcript; ?>> Transcript</a></h1>
    </div>
    <div class="box" style=" float:right;">
        <h1> <a href= <?php echo $loginpage; ?>> <?php echo $login; ?></a></h1>
    </div>


</div>
<div id="footer"></div>
</body>
</html>