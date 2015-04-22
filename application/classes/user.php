<?php

require_once 'application/db/MyPDO.php';

class User extends PDO_connect {

    protected $email;
    protected $name;
    protected $password;
    protected $company;

    function __construct() {
        parent::__construct();
    }

    private function Valid($param) {
        
    }

    function register() {
        $this->name = $_POST['name'];
        $this->email = $_POST['email'];
        $this->password = $_POST['password'];
        $this->company = $_POST['company'];
        $sql = $this->dbh->query("INSERT INTO user (name, email, password, company) VALUES ('$this->name', '$this->email', '$this->password', '$this->company')");
    }

    function login() {
        $stmt = $this->dbh->prepare('SELECT name FROM user WHERE email = :email AND password= :password');
        $stmt->execute(array('email' => $_POST['email'], 'password' => $_POST['password']));
        foreach ($stmt as $row) {
            echo $row['name'] . "\n";
        }
    }

}
