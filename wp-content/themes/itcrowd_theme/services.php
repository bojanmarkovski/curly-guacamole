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
                        'posts_per_page'      => 500 
                    );
                    $myposts = get_posts( $args );
                ?>

                <?php if ( $myposts ) {

                    $counter = 0;
                    foreach ( $myposts as $term ) {

                        $classHelper = 'left-side-services';
                        if ($counter % 2 == 0) {
                            $classHelper = 'right-side-services';
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
                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 pd-top-30px">
                                    <div class="title-text">
                                        <div>
                                        
                                        <?php 
                                            $firstWord = explode(' ', $term->post_title)[0];

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
                                        </div>
                                        <hr align="left" class="custom">
                                    </div>
                                    <p>
                                        <?php echo $term->post_content; ?>
                                    </p>
                                </div>

                            <?php } else { ?>

                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 pd-top-30px">
                                    <div class="title-text">
                                        <div>
                                        
                                        <?php 
                                            $firstWord = explode(' ', $term->post_title)[0];

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
                                        </div>
                                        <hr align="left" class="custom">
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
         <!-- <div class="modal-dialog" role="document">
            <div class="modal-content">
            	<div class="modal-header">
            		<button type="button" class="close bg-black" data-dismiss="modal" aria-label="Close">
            		 <span aria-hidden="">&times;</span>
            		</button>
            		<h2 class="modal-title" id="exampleModalLabel">Pop me a message</h2>
            	</div> -->
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close bg-black" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="">&times;</span>
                  </button>
                  <h2>Privacy Policy</h2>
               </div>
               <div class="modal-body">
                  <form>
                     <div class="form-group">
                        <!-- NAME INPUT -->
                        <div class="holder">
                           <div class="input-holder">
                              <input class="input" type="text" placeholder=" " required>
                              <div class="placeholder">Your company *</div>
                              <div class="error">Please enter a valid Company name</div>
                           </div>
                        </div>
                        <!-- E-MAIL INPUT -->
                        <div class="holder">
                           <div class="input-holder">
                              <input class="input" type="email" placeholder=" " required>
                              <div class="placeholder">Your e-mail *</div>
                              <div class="error">Please enter a valid email</div>
                           </div>
                        </div>
                        <!-- NAME INPUT -->
                        <div class="holder">
                           <div class="input-holder">
                              <input class="input" type="text" placeholder=" " required>
                              <div class="placeholder">Subject *</div>
                              <div class="error">Please enter a subject</div>
                           </div>
                        </div>
                        <!-- TEXT AREA -->
                        <div class="holder">
                           <div class="input-holder">
                              <textarea class="input" placeholder=" " rows="4" required></textarea>
                              <div class="placeholder placeholder-textarea">Your Message</div>
                              <div class="error">Please enter a valid message</div>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button id="btn-close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-secondary">Send e-mail</button>
               </div>
            </div>
         </div>
      </div>
<!-- Content END -->

<?php get_footer(); ?>