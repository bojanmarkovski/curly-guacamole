<?php 
//  Template Name: Home Page
?>

<?php get_header(); ?>

<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/slick/slick-theme.css"/>

<!-- Content -->

<!-- MAIN SLIDER -->
<div class="main-slider-holder">
    <div class="one-time">

        <?php
            $args = array( 
                'category'            => '5', 
                'posts_per_page'      => 500,
                'orderby'             => 'timestamp',
                'order'               => 'asc'
            );
            $myposts = get_posts( $args );
        ?>

        <?php if ( $myposts ) {
            $counter = 0;
            foreach ( $myposts as $term ) { ?>

                <div>
                    <section id="iq-home" class="iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax" data-jarallax="{&quot;speed&quot;: 0.6}" style="background: none; z-index: 0;" data-jarallax-original-styles="background: url('<?php echo get_the_post_thumbnail_url($term); ?>');">
                        <div class="container-fluid">
                            <div class="banner-text">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h1 class="text-uppercase iq-font-white">
                                        <?php echo $term->post_title; ?>
                                    </h1>
                                    
                                    <div class="iq-font-white iq-pt-15">
                                        <?php echo $term->post_content; ?>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 z-index">
                                    <img class="banner-img img-fluid watch-img slideInUpMobile" src="<?php echo get_field('left_image_src', $term->ID); ?>" alt="" style="visibility: visible;">
                                    <img class="banner-img slideInDown" src="<?php echo get_field('center_image_src', $term->ID); ?>" alt="" style="visibility: visible;">
                                    <img class="banner-phone img-fluid center-block fadeInUp slideInUpWatch" src="<?php echo get_field('right_image_src', $term->ID); ?>" alt="" style="visibility: visible;">
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="banner-objects">
                            <span class="banner-objects-02 iq-fadebounce">
                            <span class="iq-round"></span>
                            </span>
                            <span class="banner-objects-03 iq-fadebounce">
                            <span class="iq-round"></span>
                            </span>
                        </div>
                        <div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;">
                            <div style="background-repeat: no-repeat; background-size: cover; background-image: url('<?php echo get_site_url(); ?>/wp-content/uploads/main-img.jpeg'); position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; margin-top: -245.561px; transform: translate3d(0px, 240.955px, 0px);"></div>
                        </div>
                    </section>
                </div>

            <?php } ?>
        <?php } ?>

    </div>
    <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgBottom">

            <?php 
                $uploaDirUrlObj = wp_upload_dir();
                $uploaDirUrl = $uploaDirUrlObj["url"];
            ?>

            <div class="wave waveBottom" style="background-image: url('<?php echo $uploaDirUrl; ?>/slider_wave.png');"></div>
        </div>
    </div>
</div>

<div class="container-fluid">

    <!-- WHAT WE DO -->
    <h2 class="text-uppercase text-center">What we do?</h2>
    <hr>
    <div class="row development">
        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
            <div class="row">
            
                <?php
                    $args = array( 
                        'category'            => '4', 
                        'posts_per_page'      => 3,
                        'orderby'             => 'timestamp',
                        'order'               => 'asc'
                    );
                    $myposts = get_posts( $args );
                ?>

                <?php if ( $myposts ) {
                    $counter = 0;
                    foreach ( $myposts as $term ) { ?>
            
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="iq-fancy-boxnew text-center">
                                <div class="iq-icon icon-bg">
                                    <i class="<?php echo $term->icon_value; ?>"></i>
                                </div>

                                <div class="fancy-content">
                                    <h4>
                                        <?php echo $term->post_title; ?>
                                    </h4>
                                    
                                    <p class="text-left">
                                        <?php echo $term->post_content; ?>
                                    </p>
                                </div>
                            </div>
                        </div>

                    <?php } ?>
                <?php } ?>

            </div>
        </div>
    </div>

    <!-- TECHNOLOGY, WHAT WE USE -->
    
    <div class="row our-skills-process">
        <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgBottom">

                <?php 
                    $uploaDirUrlObj = wp_upload_dir();
                    $uploaDirUrl = $uploaDirUrlObj["url"];
                ?>

                <div class="wave waveBottom" style="background-image: url('<?php echo $uploaDirUrl; ?>/down_img.png');">
                </div>
            </div>
        </div>
<h2 class="text-uppercase text-center">What we use?</h2>
    <hr>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 bg-color">
                            
            <?php 
                $args = array( 
                    'category'            => '3', 
                    'posts_per_page'      => 1 
                );
                $myposts = get_posts( $args );
            ?>

            <?php if ( $myposts ) {
                foreach ( $myposts as $term ) { ?>

                    <div>
                        <h3>
                            <?php echo $term->post_title; ?>
                        </h3>

                        <p>
                            <?php echo $term->post_content; ?>
                        </p>
                    </div>

                <?php } ?>
            <?php } ?>

        </div>

        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 bg-color">
            <div id="wrapper">
                <div class="marketing-page page-content" data-page="index">
                    <section class="wrapper-technologies">
                    <div class="container-fluid container-technologies">
                        <div class="company-icons">

                            <?php 
                                $args = array( 
                                    'category'            => '2', 
                                    'posts_per_page'      => 9 
                                );
                                $myposts = get_posts( $args );
                            ?>

                            <?php if ( $myposts ) {
                                $counter = 1;
                                foreach ( $myposts as $term ) { ?>

                                    <div class="company-icon-container ring-<?php echo $counter++; ?>">
                                        <div class="image company-icon" style="background-image: url('<?php echo get_the_post_thumbnail_url($term); ?>'); width:130px;height:130px;"></div>
                                    </div>    

                                <?php } ?>
                            <?php } ?>

                            
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgBottom">

                <?php 
                    $uploaDirUrlObj = wp_upload_dir();
                    $uploaDirUrl = $uploaDirUrlObj["url"];
                ?>

                <div class="wave waveBottom" style="background-image: url('<?php echo $uploaDirUrl; ?>/up_img.png');">
                </div>
            </div>
        </div>
    </div>
    <div class="clear">
    </div>
    <h2 class="text-uppercase text-center">How we do it?</h2>
    <hr>
    <div class="row work-process-row-container">
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="work-process">
            <div class="progress-container">
                <div class="progress-title first-title">
                <h4>Requirement analysis</h4>
<!--                 <small>We pay attention to our clients wishes, what is important to them and what is the way should be done</small> -->
                </div>
                <!-- FIRST -->
                <ul class="chart-skills first">
                    <li>
<!--                         <span>CSS</span> -->
                    </li>
                    <li>
<!--                         <span>HTML</span> -->
                    </li>
                    <li>
<!--                         <span>PHP</span> -->
                    </li>
                    <li>
<!--                         <span>Python</span> -->
                    </li>
                </ul>
                <div class="icon-progress first-title" style="background-image: url('<?php echo $uploaDirUrl; ?>/planning.png');">
                </div>
            </div>
            <!-- SECOND -->
            <div class="progress-container even">
                <div class="container">
                <ul class="chart-skills second">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="icon-progress second-title" style="background-image: url('<?php echo $uploaDirUrl; ?>/content.png');">
                </div>
                </div>
                <div class="progress-title second-title">
                <h4>Design and planing</h4>
                </div>
            </div>
            <!-- THIRD -->
            <div class="progress-container">
                <div class="progress-title third-title">
                <h4>Development</h4>
                </div>
                <div class="container">
                <ul class="chart-skills third">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="icon-progress third-title" style="background-image: url('<?php echo $uploaDirUrl; ?>/design.png');">
                </div>
                </div>
            </div>
            <!-- FOURTH -->
            <div class="progress-container even">
                <div class="container">
                <ul class="chart-skills fourth">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="icon-progress fourth-title" style="background-image: url('<?php echo $uploaDirUrl; ?>/development.png');">
                </div>
                </div>
                <div class="progress-title fourth-title">
                <h4>Quality assurance</h4>
                </div>
            </div>
            <!-- FIFTH -->
            <div class="progress-container">
                <div class="progress-title fifth-title">
                <h4>Deployment and evaulation</h4>
                </div>
                <div class="container">
                <ul class="chart-skills fifth">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="icon-progress fifth-title" style="background-image: url('<?php echo $uploaDirUrl; ?>/soft-testing.png');">
                </div>
                </div>
            </div>
            <!-- SIXTH -->
            <div class="progress-container even">
                <div class="container">
                <ul class="chart-skills sixth">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="icon-progress sixth-title" style="background-image: url('<?php echo $uploaDirUrl; ?>/support.png');">
                </div>
                </div>
                <div class="progress-title sixth-title">
                <h4>Maintenance</h4>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="clear">
    </div>
</div>

<!-- Content END -->

<!-- <script type="text/javascript" src="<?php //echo get_stylesheet_directory_uri(); ?>/assets/slick/slick.min.js"></script> -->
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/Home.js"></script>

<?php get_footer(); ?>