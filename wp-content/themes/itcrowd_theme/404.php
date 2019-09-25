<?php
/**
 * The template for displaying 404 pages (not found)
 *
 *
 * @package ITCrowd
 * @subpackage ITCrowd_Theme
 * @since 1.0.0
 */

get_header();
?>
    <!-- Content -->
    
    <div class="container-fluid">
         <div id="iq-home" class="row error-wrapper iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax " data-jarallax="{&quot;speed&quot;: 0.6}" style="background: none; z-index: 0;" data-jarallax-original-styles="background: url(images/bg/01.jpg);">
            <div class="banner-text">
               <div class="row text-center">
                  <div class="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                     <img class="error-img" src="<?php echo get_site_url(); ?>/wp-content/uploads/404-error.png">
                     <h1 class="text-uppercase iq-font-white">Sorry page not found</h1>
                  </div>
                  <div class="clearr">
                  </div>
                  <div class="col-md-2 col-md-offset-5 text-center">
                     <i class="fas fa-tools fa-5x"></i>
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
         </div>
      </div>

    <!-- Content END -->
<?php
get_footer();
