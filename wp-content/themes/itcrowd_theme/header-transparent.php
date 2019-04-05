
<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 *
 * @package ITCrowd
 * @subpackage ITCrowd_Theme
 * @since 1.0.0
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	
    <div class="nav navbar-inverse header" id="home">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
                <button class="navbar-toggle pull-left" id="nav-icon3" data-toggle="collapse" data-target="#mynavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <div class="navbar-brand logo">
                    <a href="Home.html">
                    <img src="http://localhost/wordpress/wp-content/uploads/2019/04/logo.png" class="img-responsive"></a>
                </div>
                <div class="clear"></div>
                <div class="collapse navbar-collapse" id="mynavbar">

                    <!-- Rendering menu items -->
                    <?php if ( has_nav_menu( 'footer' ) ) : ?>
                        
                        <?php
                            wp_nav_menu(
                                array(
                                    'menu_class'     => 'nav navbar-nav navbar-right',
                                    'depth'          => 1,
                                )
                            );
                        ?>
                        
                    <?php endif; ?>

                    <!-- <ul class="nav navbar-nav navbar-right">
                        <li class="active">
                        <a href="Home.html" class="">Home</a>
                        </li>
                        <li>
                        <a href="AboutUs.html">About Us</a>
                        </li>
                        <li>
                        <a href="OurServices.html">Our Services</a>
                        </li>
                        <li>
                        <a href="Career.html">Career</a>
                        </li>
                        <li>
                        <a href="Contact.html">Contact</a>
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
        </div>
    </div>

	<div id="content" class="site-content">