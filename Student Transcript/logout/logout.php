<?php
/**
 * Created by PhpStorm.
 * User: Mohamed Oun
 * Date: 24-Apr-16
 * Time: 10:55 PM
 */
session_start();
session_destroy();
header('Location:../login/Login.html');

