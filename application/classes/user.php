<?php

require_once 'application/db/MyPDO.php';

class User extends PDO_connect {

    public $err;
    protected $email;
    protected $name;
    protected $password;
    protected $company;

    function __construct() {
        parent::__construct();
    }

    private function Valid($param, $e = true) {
        $elem = trim(strip_tags($param));
        if ($e == true) {
            if (preg_match("#[aA-zZ0-9]+$#", $elem)) {
                return $elem;
            } else {
                echo "Error";
            }
        } else {
            if (preg_match('/\S+@\S+\.\S+/', $elem)) {
                return $elem;
            }
        }
    }

    function register() {
        $this->err = '';
        if (!empty($this->Valid($_POST['name']))) {
            $this->name = $this->Valid($_POST['name']);
        } else {
            $this->err.='Введите корректное имя!';
        }
        if (!empty($this->Valid($_POST['email'], false))) {
            $this->email = $this->Valid($_POST['email']);
        } else {
            $this->err.='Введите корректный email!';
        }
        if (!empty($this->Valid($_POST['password']))) {
            $this->password = $this->Valid($_POST['password']);
        } else {
            $this->err.='Введите корректный пароль!';
        }
        if (!empty($this->Valid($_POST['company']))) {
            $this->company = $this->Valid($_POST['company']);
        } else {
            $this->err.='Введите корректное имя компании!';
        }
        if (empty($this->err)) {
            $sql = $this->dbh->query("INSERT INTO user (name, email, password, company) VALUES ('$this->name', '$this->email', '$this->password', '$this->company')");
        } else {
            echo $this->err. "\n";
        }
    }

    function login() {
        $stmt = $this->dbh->prepare('SELECT name FROM user WHERE email = :email AND password= :password');
        $stmt->execute(array('email' => $_POST['email'], 'password' => $_POST['password']));
        foreach ($stmt as $row) {
            echo $row['name'] . "\n";
        }
    }

}
