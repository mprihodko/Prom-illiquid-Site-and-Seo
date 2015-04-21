<?php

require_once 'application/db/MyPDO.php';

class Registration {

    function register() {

        $conn = new PDO_connect();
        $conn->db_connect();
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $company = $_POST['company'];
        $sql = $conn->dbh->query("INSERT INTO user (name, email, password, company) VALUES ('$name', '$email', '$password', '$company')");
    }

}
