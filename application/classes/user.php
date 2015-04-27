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
        if (!empty($param)) {
            $elem = trim(strip_tags($param));
            if ($e == true) {
                $elem = preg_replace("/[^a-zA-ZА-Яа-я0-9\s]/", "", $elem);
                if (preg_match("/[a-zA-ZА-Яа-я0-9]/", $elem)) {
                    return $elem;
                }
            } else {
                if (preg_match('/\S+@\S+\.\S+/', $elem)) {
                    $stmt = $this->dbh->prepare('SELECT email FROM user WHERE email = :email');
                    $stmt->execute(array('email' => $elem));
                    foreach ($stmt as $row) {
                        if ($elem == $row['email']) {
                            echo "Такой Email уже зарегистрирован";
                            exit();
                        } else {
                            return $elem;
                        }
                    }
                }
            }
        } else {
            echo "Заполните все поля формы";
            exit();
        }
    }

    function register() {
        $this->err = '';
        if ($this->Valid($_POST['name'])) {
            $this->name = $this->Valid($_POST['name']);
        } else {
            $this->err.='Введите корректное имя!<br/>';
        }
        if ($this->Valid($_POST['email'], false)) {
            $this->email = $this->Valid($_POST['email'], false);
        } else {
            $this->err.='Введите корректный email!<br/>';
        }
        if ($this->Valid($_POST['password'])) {
            $this->password = $this->Valid($_POST['password']);
        } else {
            $this->err.='Введите корректный пароль!<br/>';
        }
        if ($this->Valid($_POST['company'])) {
            $this->company = $this->Valid($_POST['company']);
        } else {
            $this->err.='Введите корректное имя компании!<br/>';
        }
        if (empty($this->err)) {
            $sql = $this->dbh->query("INSERT INTO user (name, email, password, company) VALUES ('$this->name', '$this->email', '$this->password', '$this->company')");
        } else {
            echo $this->err;
        }
    }

    function login() {
        $stmt = $this->dbh->prepare('SELECT name FROM user WHERE email = :email AND password= :password');
        $stmt->execute(array('email' => $_POST['email'], 'password' => $_POST['password']));

        foreach ($stmt as $row) {
            if (!empty($row['name'])) {
                $_SESSION['user']=$row['name'];
                header("Location: index.php?cabinet");
            }
        }
    }
    function logOut(){
        
    }

}
