<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 *
 * @package ITCrowd
 * @subpackage ITCrowd_Theme
 * @since 1.0.0
 */

?>

    <div class="container-fluid">
<div class="row footer">
				<div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
					<div class="row border-bottom">
						<div class="col-lg-4 col-md-4 col-sm-12 display-none-mobile">
							<a href="/">
							<img class="img-responsive" src="<?php echo get_site_url(); ?>/wp-content/uploads/2019/04/logo.png"></a>
							<p> <i class="fas fa-map-marker-alt"></i>
								<span>Ljubljanska 6, City Tower floor 1, 1000 Skopje</span>
							</p>
							<p> <i class="far fa-envelope"></i>
								<span>contact@itcrowd.me</span>
							</p>
						</div>

						<div class="col-lg-4 col-md-4 col-sm-12 text-center display-none-mobile">
							<!-- Rendering menu items -->
                            <?php if ( has_nav_menu( 'footer' ) ) : ?>
							
								<?php
								wp_nav_menu(
									array(
										'theme_location' => 'footer',
										'menu_class'     => 'footer-menu',
										'depth'          => 1,
									)
								);
								?>

                            <?php endif; ?>
						</div>

						<div class="col-lg-4 col-md-4 col-sm-12 copyright text-center">
							<a href="https://www.linkedin.com/company/itcrowd" target="_blank">
								<i class="fab fa-linkedin-in"></i>
							</a>
							<a href="https://www.facebook.com/itcrowd.me" target="_blank">
								<i class="fab fa-facebook-f"></i>
							</a>
							<a href="https://www.xing.com/" target="_blank">
								<i class="fab fa-xing"></i>
							</a>
						</div>
					</div>
					<div class="row text-center">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<small>ITCrowd &copy Copyright 2019. All rights reserved.</small>
						</div>
					</div>
				</div>
			</div>
        </div>
	

<?php wp_footer(); ?>

</body>
</html>
