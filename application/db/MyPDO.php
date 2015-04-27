<?php

class PDO_connect {

    public $dbh;
    private $user;
    private $password;

    function __construct() {
        $this->user = 'root';
        $this->password = '';
        $dsn = "mysql:host=127.0.0.1;dbname=prom_illiquid;charset=UTF8";
        $opt = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        );
        try {
            $this->dbh = new PDO($dsn, $this->user, $this->password, $opt);
//            echo "<span style='color:green; font-size:18px;'>connect_db status :: connected</span><br>";
            return $this->dbh;
        } catch (PDO_connect $e) {            
            echo "<span style='color:red; font-size:18px;'>connect_db status :: disconnected".$e->getMessage()."</span><br>";
        }
    }

}

//$connect=new PDO_connect();
//$connect->db_connect();
