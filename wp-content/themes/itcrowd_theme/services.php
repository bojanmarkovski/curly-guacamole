<?php 
//  Template Name: Our Services
?>

<?php get_header(); ?>

<!-- Content -->
<div class="container-fluid blur-modal">
         <div class="row our-services">
            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
               
                <?php
                    $args = array( 
                        'category'            => '7', 
                        'posts_per_page'      => 500,
                        'orderby'             => 'timestamp',
                        'order'               => 'asc'
                    );
                    $myposts = get_posts( $args );
                ?>

                <?php if ( $myposts ) {

                    $counter = 0;
                    foreach ( $myposts as $term ) {

                        $classHelper = 'right-side-services';
                        if ($counter % 2 == 0) {
                            $classHelper = 'left-side-services';
                        }

                        ?>

                        <!-- OUR-SERVICES BOX 1-->
                        <div class="row our-services-box <?php echo $classHelper; ?>">
                            
                            <?php if ($counter % 2 == 0) { ?>

                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-sm-12 col-xs-12">
                                    <div class="image-box"> <i class="fas fa-desktop"></i>
                                        <?php echo get_the_post_thumbnail($term); ?>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 pd-20px">
                                    <div class="title-text">
                                        <div style="display: inline-block">
                                            
                                        
                                        <?php 
                                            $parts = explode(' ', $term->post_title);
                                            $firstWord = $parts[0];

                                            $spanContainer = '';
                                            for($i = 0; $i < strlen($firstWord); $i++) {

                                                $spanContainer .= '<span class="color-red">';
                                                $spanContainer .= $firstWord[$i]; 
                                                $spanContainer .= '</span>';
                                            } 
                                        ?>

                                        <?php echo $spanContainer; ?>
                                        <span></span>

                                        <?php
                                            $parts = explode(' ', $term->post_title); 

                                            $restOfTheTitle = '';
                                            for($i = 1; $i < count($parts); $i++) {
                                                $restOfTheTitle .= $parts[$i];
                                                $restOfTheTitle .= ' ';
                                            }

                                        ?>

                                        <span>
                                            <?php echo $restOfTheTitle; ?>
                                        </span>
                                        <hr align="left" class="custom">
                                        </div>
                                        
                                        
                                    </div>
                                    <p>
                                        <?php echo $term->post_content; ?>
                                    </p>
                                </div>

                            <?php } else { ?>

                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 pd-20px">
                                    <div class="title-text">
                                        <div style="display: inline-block">
                                        
                                        <?php 
                                            $parts = explode(' ', $term->post_title);
                                            $firstWord = $parts[0];

                                            $spanContainer = '';
                                            for($i = 0; $i < strlen($firstWord); $i++) {

                                                $spanContainer .= '<span class="color-red">';
                                                $spanContainer .= $firstWord[$i]; 
                                                $spanContainer .= '</span>';
                                            }
                                        ?>

                                        <?php echo $spanContainer; ?>
                                        <span></span>

                                        <?php
                                            $parts = explode(' ', $term->post_title); 

                                            $restOfTheTitle = '';
                                            for($i = 1; $i < count($parts); $i++) {
                                                $restOfTheTitle .= $parts[$i];
                                                $restOfTheTitle .= ' ';
                                            }

                                        ?>

                                        <span>
                                            <?php echo $restOfTheTitle; ?>
                                        </span>
                                        <hr align="left" class="custom">

                                        </div>
                                    </div>
                                    <p>
                                        <?php echo $term->post_content; ?>
                                    </p>
                                </div>

                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-sm-12 col-xs-12">
                                    <div class="image-box"> <i class="fas fa-desktop"></i>
                                        <?php echo get_the_post_thumbnail($term); ?>
                                    </div>
                                </div>

                            <?php } ?>

                            
                        </div>

                        <?php $counter++; ?>

                        <?php wp_reset_postdata(); ?>
                    <?php } ?>

                <?php } ?>

               <div class="row blur-modal">
                  <div class="col-lg-6 col-lg-offset-3 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
                     <button type="button" class="btn btn-block" data-toggle="modal" data-target="#exampleModal" style="">
                     HIRE US
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close bg-black" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="">&times;</span>
                  </button>
                  <h2>Contact Us</h2>
               </div>
               <div class="modal-body">
                <form action="/wordpress/wp-json/contact-form-7/v1/contact-forms/227/feedback" method="POST" id="hire-us-form">
                     <div class="form-group">
                        <!-- NAME INPUT -->
                        <div class="holder">
                           <div class="input-holder">
                              <input class="input" name="your-company" type="text" placeholder=" " required autocomplete="off">
                              <div class="placeholder">Your company *</div>
                              <div class="error" data-element="company">Please enter a valid Company name</div>
                           </div>
                        </div>
                        <!-- E-MAIL INPUT -->
                        <div class="holder">
                           <div class="input-holder">
                              <input class="input" name="your-email" type="email" placeholder=" " required autocomplete="off">
                              <div class="placeholder">Your e-mail *</div>
                              <div class="error" data-element="email">Please enter a valid email</div>
                           </div>
                        </div>
                        <!-- NAME INPUT -->
                        <div class="holder">
                           <div class="input-holder">
                              <input class="input" name="your-subject" type="text" placeholder=" " required autocomplete="off">
                              <div class="placeholder">Subject *</div>
                              <div class="error" data-element="subject">Please enter a subject</div>
                           </div>
                        </div>
                        <!-- TEXT AREA -->
                        <div class="holder">
                           <div class="input-holder">
                              <textarea class="input" name="your-message" placeholder=" " required rows="4" autocomplete="off" ></textarea>
                              <div class="placeholder placeholder-textarea">Your Message *</div>
                              <div class="error" data-element="message">Please enter a valid message</div>
                           </div>
                        </div>
                        
                        <!-- RE-CAPTCHA -->
                        <div class="holder">
                            <div class="input-holder">
                            <div class="g-recaptcha" id="re-captcha" data-sitekey="6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6"></div>
                            <div class="error re-captcha">Please verify that you are not a robot.</div>
                            </div>
                        </div>

                     </div>
                  
                    </div>
                    <div class="modal-footer">
                        <button id="btn-close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-secondary btn-submit">Send e-mail</button>
                    </div>
                </form>
            </div>
         </div>
      </div>

    <div class="modal fade form-message" id="myModal-error" role="dialog" style="display: none;">
        <div class="modal-dialog">
        
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                <h2 class="modal-title">Error</h2>
                </div>
                <div class="modal-body">
                <p>Sorry, the file you are trying to upload is too big (maximum size is <b>5MB</b>).</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default btn-secondary" data-dismiss="myModal-error">Close</button>
                </div>
            </div>
        
        </div>
    </div>
      
<!-- Content END -->

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/OurServices.js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async defer></script>

<?php get_footer(); ?>