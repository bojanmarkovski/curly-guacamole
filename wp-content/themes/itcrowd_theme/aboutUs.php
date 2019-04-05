<?php 
//  Template Name: About Us
?>

<?php get_header(); ?>

<!-- Content -->

<div class="container-fluid">
         <div class="row wrap-about-us">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0 right-side">
               <!-- OUR TEAM -->
               <div class="row page-section" id="our-team">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                     <h2 class="text-center">
                        Our Team
                     </h2>
                     <hr>
                     <!-- PARAGRAPH -->
                     <div class="row">
                        <div class="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center">
                           <p class="paragraph-career">
                              It takes two to tango, but it takes a bunch of highly enthusiastic and technology-driven individuals to make the impossible possible. Hand-to-hand we laugh, live, brainstorm, work hard and achieve outstanding results.
                           </p>
                        </div>
                     </div>

                     <div class="slider-team text-center">
                        
                        <?php 
                            $args = array( 
                                'category'            => '6', 
                                'posts_per_page'      => 500 
                            );
                            $myposts = get_posts( $args );
                        ?>

                        <?php if ( $myposts ) {

                            foreach ( $myposts as $term ) {

                                var_dump(get_the_post_thumbnail($term)['src']); 
                                die();
                                ?>
                                <div class="card card-10">
                                    <div class="inner-slider-team">
                                        <div class="img-team" style="background-image: url('<?php echo $term->post_title; ?>');">
                                        </div>
                                        <div class="text-team">
                                            <div class="card-name">
                                                <?php echo $term->post_title; ?>
                                            </div>

                                            <div class="card-icons">
                                                <?php echo $term->position; ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        <?php } ?>

                        <?php wp_reset_postdata(); ?>
                        <?php } ?>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

<!-- Content END -->

<?php get_footer(); ?>