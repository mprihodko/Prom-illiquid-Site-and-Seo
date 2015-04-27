<header id="header" class="normal-header line-decoration">

    <!-- Top Bar -->
    <div id="top-bar" class="text-normal full-width-line clearfix">
        <div class="wf-wrap">
            <div class="wf-container-top">
                <div class="wf-table">
                    <!-- Top bar conctacts icons -->
                    <div class="wf-td">
                        <span class="mini-contacts email">
                            <i class="fa fa-envelope-o"></i>
                            <span class="top-bar-icon-text">isitinme88@gmail.com</span>
                        </span>
                        <span class="mini-contacts phone">
                            <i class="fa fa-phone"></i>
                            <span class="top-bar-icon-text">(095) 896 24 70</span>
                        </span>
                        <span class="mini-contacts skype">
                            <i class="fa fa-skype"></i>
                            <span class="top-bar-icon-text">alexander_punkk</span>
                        </span>
                    </div>
                    <!-- Top bar conctacts icons End -->

                    <div class="right-block wf-td clearfix">
                        <div class="mini-login">
                            <a href="index.php?cabinet" class="submit">
                                <i class="fa fa-sign-in"></i>
                                <span class="top-bar-icon-text"><?= $_SESSION['user'] ?></span>
                            </a>
                        </div>

                        <div class="mini-login">
                            <a href="index.php" class="submit">
                                <i class="fa fa-pencil"></i>
                                <!--<span class="top-bar-icon-text" id="exit"">Выйти</span>-->
                                <form action="" method="POST">
                                    <input type="submit" name="logout" value="Выйти" class="top-bar-icon-text">
                                </form>

                            </a>
                        </div>
                        <!-- Social -->
                        <div class="soc-ico clearfix">
                            <a href="#" title="Instagram" target="_blank">
                                <i class="fa fa-instagram"></i>
                            </a>
                            <a href="#" title="Facebook" target="_blank">
                                <i class="fa fa-facebook-square"></i>
                            </a>
                            <a href="#" title="Twitter" target="_blank">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="#" title="Vk" target="_blank">
                                <i class="fa fa-vk"></i>
                            </a>
                        </div>
                        <!-- Social End -->
                    </div>

                </div>
            </div>
        </div>
    </div>

    <span class="top-bar-arrow">
        <span>
            <i class="fa fa-angle-down"></i>
        </span>
    </span>

    <!-- Top Bar End -->

    <!-- Branding & Navigation -->
    <div class="wf-wrap clearfix">

        <div id="branding" class="wf-td">
            <a href="index.php">
                <img src="img/logo-regular.png" alt="Logo">
            </a>
        </div>

        <div id="cabinet-title">
            <span class="cabinet-icon">
                <i class="fa fa-briefcase"></i>
            </span>
            <span class="cabinet-name">
                <h3>Кабинет компании</h3>
                <h4>Apple</h4>
            </span>
        </div>

        <div class="yoursId">
            <span><b>Ваш id:</b> 1234567890</span>
        </div>

    </div>
    <!-- Branding & Navigation End -->

</header>