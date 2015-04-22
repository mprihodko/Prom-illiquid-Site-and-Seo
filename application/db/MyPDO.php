<?php

class PDO_connect {

    public $dbh;
    private $user;
    private $password;

    function __construct() {
        $this->user = 'root';
        $this->password = '123456';
        $dsn = "mysql:host=127.0.0.1;dbname=prom_illiquid;charset=UTF8";
        $opt = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        );
        try {
            $this->dbh = new PDO($dsn, $this->user, $this->password, $opt);
            echo "ok";
            return $this->dbh;
        } catch (PDO_connect $e) {
            echo 'Подключение не удалось: ' . $e->getMessage();
        }
    }

}

//$connect=new PDO_connect();
//$connect->db_connect();
