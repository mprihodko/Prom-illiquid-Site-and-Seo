<?php
header("charset: utf8");
session_start();
require_once 'application/classes/user.php';
require_once 'application/handler.php';
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Главная</title>
        <meta name="description" content="Центральный украинский ресурс по купле / продаже неликвидов">
        <meta name="keywords" content="Неликвиды, купля, продажа">
        <meta name="author" content="SITE&SEO">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/font-awesome-4.2.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/perfect-scrollbar.css">
        <link rel="stylesheet" href="css/jquery.fancybox.css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">
    </head>
    <body class="no-bg">
        <section id="page">            
            <?php
            if (@$_SESSION['user']) {
                include_once 'skins/header_user.php';
            } else {
                include_once 'skins/header.php';
            }
            ?>
            <!-- Header End -->
            <?php
            $page = $_SERVER['QUERY_STRING'];
            switch ($page) {
                case 'enter' :
                    include_once 'skins/login.php';
                    break;
                case 'registration':
                    include_once 'skins/registration.php';
                    break;
                case 'categories':
                    include_once 'skins/categories.php';
                    break;
                case 'subcategories':
                    include_once 'skins/subcategories.php';
                    break;
                case 'product':
                    include_once 'skins/product.php';
                    break;
                case 'cabinet':
                    include_once 'skins/cabinet.php';
                    break;
                default :
                    include_once 'skins/default.php';
                    break;
            }
            ?>

            <!-- Main Content End -->

            <!-- Footer -->
            <?php include_once 'skins/footer.php'; ?>
            <!-- Footer End -->

            <a href="#" class="scroll-top">
                <i class="fa fa-arrow-up"></i>
            </a>

        </section>


        <script src="js/jquery-1.11.0.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/perfect-scrollbar.jquery.js"></script> 
        <script src="js/jquery.fancybox.pack.js"></script>

        <script src="js/autoComplete.js"></script>
        <script src="js/main.js"></script>


    </body>
</html>