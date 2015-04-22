<?php

require_once 'application/db/MyPDO.php';

class User {

    protected $email;
    protected $name;
    protected $password;
    protected $company;

    function register() {

        $conn = new PDO_connect();
        $conn->db_connect();
        $this->name = $_POST['name'];
        $this->email = $_POST['email'];
        $this->password = $_POST['password'];
        $this->company = $_POST['company'];
        $sql = $conn->dbh->query("INSERT INTO user (name, email, password, company) VALUES ('$this->name', '$this->email', '$this->password', '$this->company')");
    }
    
    function login() {
        
    }

}
