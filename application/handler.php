<?php
$user = new User();
if (isset($_POST['login'])) {
    $user->login();
}
if (isset($_POST['register'])) {
    $user->register();    
}
if (isset($_POST['logout'])) {
    unset($_SESSION['user']);
}
?>﻿