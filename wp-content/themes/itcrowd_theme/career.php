<?php 
//  Template Name: Career
?>

<?php get_header(); ?>

    <!-- Content -->
    <div class="container-fluid career blur-modal">
        <!-- CARE TO JOIN US TITLE -->
        <div class="row pd-top-70px">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center">
                <h2>Care to join Us?</h2>
                <hr>
            </div>
        </div>
        <!-- PARAGRAPH -->
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center">
                <p class="paragraph-career">
                    It takes two to tango, but it takes a bunch of highly enthusiastic and technology-driven individuals to make the impossible possible. Hand-to-hand we laugh, live, brainstorm, work hard and achieve outstanding results.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
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
                                <form>
                                    <div class="form-group">
                                        <!-- NAME INPUT -->
                                        <div class="holder">
                                            <div class="input-holder">
                                                <input class="input" type="text" placeholder=" " required>
                                                <div class="placeholder">Your name *</div>
                                                <div class="error">Please enter a valid Name</div>
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
                                        <!-- NUMBER INPUT -->
                                        <div class="holder">
                                            <div class="input-holder">
                                                <input class="input" type="number" placeholder=" ">
                                                <div class="placeholder">Your phone number</div>
                                                <div class="error">Please enter a valid number</div>
                                            </div>
                                        </div>
                                        <!-- TEXT AREA -->
                                        <div class="holder">
                                            <div class="input-holder">
                                                <textarea class="input" placeholder=" " rows="7"></textarea>
                                                <div class="placeholder placeholder-textarea">Your Message</div>
                                                <div class="error">Please enter a valid message</div>
                                            </div>
                                        </div>
                                        <!-- SELECT OPTION -->
                                        <div class="holder">
                                            <div class="input-holder dropdown">
                                                <select placeholder=" " class="input select">
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
                                        <div class="file-upload-wrapper" data-text="No file chosen" required>
                                            <input name="file-upload-field" type="file" class="file-upload-field" value="" accept=".docx,.ppt,.pptx,.txt,.pdf" required>
                                        </div>
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
                                    <div id="re-captcha"></div>
                                    <button type="submit" class="btn btn-block">
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
                <div class="modal-header">
                    <h2>Privacy Policy</h2>
                </div>
                <div class="modal-body">
                    <p>Effective Date: Feb 01 2019</p>
                    <h3>WHERE THIS PRIVACY POLICY APPLIES</h3>
                    <p>This Privacy Policy applies to (a) subscriptions to print and digital versions of Inc. Magazine and Fast Company Magazine (the “Magazines“); (b) our websites, digital applications, and online services, including Inc.com and Fastcompany.com (the “Websites“); (c) our premium services, including Inc. Plus, and Inc. Verified Profile, (d) live events and conferences, (e) awards programs, and (f) surveys, contests and sweepstakes (together, the “Services“).
                    </p>
                    <p>If a particular Service refers or links to a different privacy policy, then that privacy policy — not this Privacy Policy — applies.</p>
                    <h3>HOW TO CONTACT US</h3>
                    <p>You may contact Mansueto Ventures directly if you have any question regarding the Services or our privacy practices. Please send your query to privacyofficer[at]mansueto.com or Privacy Officer, Mansueto Ventures, 7 World Trade Center, New York, NY 10007.</p>
                    <h3>INFORMATION WE COLLECT</h3>
                    <p>We provide various informational, educational, and entertainment features as part of the Services. To operate these features, we collect information from our Users. The types of information that Mansueto collects depends on the purpose for which each User chooses to use the Services.</p>
                    <p>We use the information we collect from Users to provide more meaningful editorial and advertising content and to offer relevant products and services, as well as to maintain, protect and improve Users’ overall experience.</p>
                    <ul>
                        <li>When a User subscribes to one or both of the Magazines, Mansueto may collect the name, email address and postal service address of the subscriber and, if a gift subscription, of the purchaser.</li>
                        <li>When a User creates an account to use a premium service, Mansueto may collect name, title, company name, email address, and postal address.</li>
                        <li>When a User registers for a live event or conference, Mansueto may collect name, title, company name, gender, age, email address, and postal address.</li>
                        <li>When a User enters an awards program, Mansueto may collect name, title, company name, email address, and postal address as well as other information about the User’s activities,</li>
                        <li>When a User enters a survey, contest, or sweepstakes, which is an entirely voluntary act, Mansueto may collect name, title, company name, email address, and postal address as well as other information about the User’s interests</li>
                        <li>When a User submits a request for support, Mansueto may collect the following types of information: name, telephone number, email address and other information that the User chooses to give us to respond to the support request.</li>
                        <li>In addition to the information you provide us directly, we receive information about you from service providers that help us operate and improve the Services including for data hosting and maintenance, analytics, marketing and security operations. All of our service providers must adhere to confidentiality obligations that are consistent with this Privacy Policy and the agreements we enter into with them.</li>
                        <li>When you connect with us through a social media platform, we may, depending on your privacy settings, receive some information from your social media account.</li>
                    </ul>
                    <h3>HOW WE USE INFORMATION</h3>
                    <p>We use information to operate the Services, including:</p>
                    <p><b>To administer your account and provide the Services to you</b></p>
                    <ul>
                        <li>Create and manage your account</li>
                        <li>Provide you with customer support and respond to your requests</li>
                        <li>Communicate with you about the Services</li>
                    </ul>
                    <p><b>To inform you about offers and events</b></p>
                    <ul>
                        <li>Administer sweepstakes, contests, discounts or other offers with the support of affiliated or non-affiliated sponsors and/or promotional partners. For each contest or sweepstakes, we will provide notice of the applicable rules and if necessary, post any supplemental privacy provisions. To the extent there is a conflict between those privacy provisions and this Privacy Policy, the privacy provisions for the specific contest or sweepstakes will govern but solely to the extent of the conflict.</li>
                        <li>Develop, display and track content and advertising tailored to your interests on the Services and other websites</li>
                        <li>Communicate with you by email, phone, social media or mobile device about products or services that we think may interest you</li>
                        <li>The information collected in conjunction with events may also be used for the marketing of additional services and events by us and/or our promotional partners and sponsors beyond the contest, sweepstakes and/or special event. Depending on the event, Users either grant their approval on how their information is used before it is collected (‘opt-in’), or choose to deny use of their information for additional purposes (‘opt-out’).</li>
                    </ul>
                    <p><b>To improve the Services and develop new ones</b></p>
                    <ul>
                        <li>Administer focus groups and surveys</li>
                        <li>Conduct research and analysis of Users’ behavior to improve the Services</li>
                        <li>Develop new features and services.</li>
                    </ul>
                    <p><b>To prevent, detect and fight fraud or other illegal or unauthorized activities</b></p>
                    <ul>
                        <li>Address ongoing or alleged fraud or other misbehavior on or though the Services</li>
                        <li>Analyze data to better understand and design countermeasures against fraud</li>
                        <li>Retain data related to fraudulent activities to prevent against recurrences</li>
                    </ul>
                    <p><b>To ensure legal compliance</b></p>
                    <ul>
                        <li>Comply with legal requirements</li>
                        <li>Assist law enforcement</li>
                        <li>Enforce or exercise our rights, for example our Terms of Service</li>
                    </ul>
                    <p>To process your information as described in this Privacy Policy, we rely on the following legal bases:</p>
                    <ul>
                        <li>Legitimate interests: We may use your information where we have legitimate interests to do so. For example, we analyze our Users’ behavior to improve the Services, to prevent and detect fraud and misuse, and to market the Magazines to you.</li>
                        <li>Consent: From time to time, we may ask for your consent to use your information. You may withdraw your consent at any time by contacting us using the contact information provided above.</li>
                    </ul>
                    <button type="submit" class="btn btn-secondary" data-dismiss="modal">I accept</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Content END -->

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/Career.js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async defer></script>

<?php get_footer(); ?>