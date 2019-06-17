<?php 
//  Template Name: Career
?>

<?php get_header(); ?>

    <!-- Content -->
    <div class="container-fluid career blur-modal">
        <!-- CARE TO JOIN US TITLE -->
        <div class="row pd-top-70px">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0 text-center">
                <h2>Care to join Us?</h2>
                <hr>
            </div>
        </div>
        <!-- PARAGRAPH -->
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0 text-center">
                <p class="paragraph-career">
                    It takes two to tango, but it takes a bunch of highly enthusiastic and technology-driven individuals to make the impossible possible. Hand-to-hand we laugh, live, brainstorm, work hard and achieve outstanding results.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0">
                <div class="row pd-70px">
                    <!-- LEFT SIDE ALL OPEN POSITIONS -->
                    <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 career-left">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h3>All open positions</h3>
                            </div>
                        </div>

                        <?php 
                            $args = array( 
                                'category'            => '8', 
                                'posts_per_page'      => 500 
                            );
                            $myposts = get_posts( $args );
                        ?>

                        <?php if ( $myposts ) {

                            foreach ( $myposts as $term ) { ?>

                                <!-- INNER BOX -->
                                <div class="row pd-box">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 career-box" data-name="<?php echo $term->post_title; ?>">
                                        <p class="first-p">
                                        <?php echo $term->type; ?>
                                        </p>
                                        
                                        <h3>
                                            <?php echo $term->post_title; ?>
                                        </h3>

                                        <?php 
                                            $postText = explode('.', $term->post_content);
                                            
                                            $postTextHighlight = $postText[0] . '.';
                                            $postTextRest = '';
                                            if (count($postText) > 1) {
                                                for($i = 1; $i < count($postText); $i++) {
                                                    $postTextRest .= $postText[$i];
                                                    $postTextRest .= '.';
                                                }
                                            }
                                        ?>

                                        <?php if ($postTextRest != '') { ?>

                                            <p>
                                                <?php echo $postTextHighlight; ?>
                                            </p>

                                        <?php } ?>
                                        
                                        <div class="shadow-paragraph">
                                            <?php echo $postTextRest; ?>
                                        </div>
                                    </div>
                                </div>

                            <?php } ?>

                        <?php } ?>

                    </div>
                    <!-- RIGHT SIDE JOB APLY FORM -->
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 career-right">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group-20px">
                                <h3>Job Apply Form</h3>
                            </div>
                        </div>
                        <!-- FORM GROUP -->
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group-20px">
                                <form action="/wp-json/contact-form-7/v1/contact-forms/228/feedback" method="POST" id="career-form" enctype="multipart/form-data">
                                    <div class="form-group">
                                        <!-- NAME INPUT -->
                                        <div class="holder">
                                            <div class="input-holder">
                                                <input class="input" name="your-name" type="text" placeholder=" " required  autocomplete="off">
                                                <div class="placeholder">Your name *</div>
                                                <div class="error">Please enter a valid Name</div>
                                            </div>
                                        </div>
                                        <!-- E-MAIL INPUT -->
                                        <div class="holder">
                                            <div class="input-holder">
                                                <input class="input" name="your-email" type="email" placeholder=" " pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}" required  autocomplete="off">
                                                <div class="placeholder">Your e-mail *</div>
                                                <div class="error">Please enter a valid email</div>
                                            </div>
                                        </div>
                                        <!-- NUMBER INPUT -->
                                        <div class="holder">
                                            <div class="input-holder">
                                                <input class="input" name="phone-number" type="number" placeholder=" " autocomplete="off">
                                                <div class="placeholder">Your phone number</div>
                                                <div class="error">The telephone number is invalid.</div>
                                            </div>
                                        </div>
                                        <!-- TEXT AREA -->
                                        <div class="holder">
                                            <div class="input-holder">
                                                <textarea class="input" name="your-message" placeholder=" " rows="7"></textarea>
                                                <div class="placeholder placeholder-textarea">Your Message</div>
                                                <div class="error">Please enter a valid message</div>
                                            </div>
                                        </div>
                                        <!-- SELECT OPTION -->
                                        <div class="holder">
                                            <div class="input-holder dropdown">
                                                <select placeholder=" " name="job-position" class="input select" required>
                                                    <option class="first-option">
                                                        I am applying for *
                                                    </option>

                                                    <?php if ( $myposts ) {

                                                        foreach ( $myposts as $term ) { ?>

                                                            <option value="<?php echo $term->post_title; ?>">
                                                                <?php echo $term->post_title; ?>
                                                            </option>

                                                        <?php } ?>
                                                    <?php } ?>

                                                </select>
                                                <div class="placeholder">I am applying for *</div>
                                                <div class="error">Please enter a job</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputFile">Attach your CV/Resume *</label>
                                        <div class="file-upload-wrapper" data-text="No file chosen" >
                                            <input name="cv-file" type="file" class="file-upload-field" value="" accept="doc,.docx,.pdf" >
                                        </div>
                                        <div class="error file-error">Please enter a valid file</div>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" required>
                                            I have read and accept ITCrowd'
                                            <a class="text-danger" data-toggle="modal" data-target="#exampleModal">
                                                Privacy Policy - Terms & Conditions
                                            </a>
                                            
                                        </label>
                                    </div>
                                    <!-- RE-CAPTCHA -->
                                    <div class="holder">
                                        <div class="input-holder">
                                            <div class="g-recaptcha" id="re-captcha" data-sitekey="6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6" data-callback='onSubmit'></div>
                                            <div class="error re-captcha">Please verify that you are not a robot.</div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-block send-email" disabled>
                                    <small>SEND E-MAIL</small>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                <?php 
                    $args = array( 
                        'category'            => '10', 
                        'posts_per_page'      => 1
                    );
                    $myposts = get_posts( $args );
                ?>

                <?php if ( $myposts ) {

                foreach ( $myposts as $term ) { ?>
                
                    <div class="modal-header">

                        <h2>
                            <?php echo $term->post_title; ?>
                        </h2>

                    </div>

                    <div class="modal-body">

                        <p>
                            <?php echo $term->post_content; ?>
                        </p>

                    <?php } ?>
                <?php } ?>

                        <button type="submit" class="btn btn-secondary" data-dismiss="modal">I accept</button>
                    </div>
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

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/Career.js"></script>
<script src="https://www.google.com/recaptcha/api.js?hl=en" async defer></script>

<?php get_footer(); ?>