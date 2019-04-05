<?php 
//  Template Name: Contact
?>

<?php get_header(); ?>

<!-- Content -->

<div class="container-fluid">
         <div class="row mapa-img" id="google-container">
         </div>
         <div class="row">
            <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 display-none-tablet">
               <div class="contact-us-container">
                  <div class="row contact-card">
                     <h2 class="text-center">Contact us</h2>
                     <hr>
                     <!-- LEFT SIDE JOB APLY FORM -->
                     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 career-right">
                        <!-- FORM GROUP -->
                        <div class="row">
                           <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                              <form action="?" method="POST">
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
                                    <!-- TEXT AREA -->
                                    <div class="holder">
                                       <div class="input-holder">
                                          <textarea class="input" placeholder=" " rows="3" required></textarea>
                                          <div class="placeholder placeholder-textarea">Your Message</div>
                                       </div>
                                    </div>
                                    <div id="re-captcha"></div>
                                    <button type="submit" class="btn btn-block">
                                    <small>SEND E-MAIL</small>
                                    </button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-0 col-md-0 col-sm-6 col-xs-12 contact-information">
                        <div>
                           <img class="img-responsive" src="images/logo.png">
                           <p> <i class="fas fa-map-marker-alt fa-2x"></i>
                              <span>Ljubljanska 6, City Tower floor 1, 1000 Skopje</span>
                           </p>
                           <p> <i class="far fa-envelope fa-2x"></i>
                              <span>contact@itcrowd.me</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- ONLY ON TABLET AND MOBILE-->
         <div class="row display-none-pc">
            <div class="col-sm-12 col-xs-12">
               <div class="contact-us-container">
                  <!-- <i class="fas fa-map-marker-alt fa-3x pin-template"></i> -->
                  <div class="row contact-card">
                     <h2 class="text-center">Contact us</h2>
                     <hr>
                     <!-- LEFT SIDE JOB APLY FORM -->
                     <div class="col-sm-12 col-xs-12 career-right">
                        <!-- FORM GROUP -->
                        <div class="row">
                           <div class="col-lg-12 col-md-12 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                              <form action="?" method="POST">
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
                                    <!-- TEXT AREA -->
                                    <div class="holder">
                                       <div class="input-holder">
                                          <textarea class="input" placeholder=" " rows="5" required></textarea>
                                          <div class="placeholder placeholder-textarea">Your Message</div>
                                       </div>
                                    </div>
                                    <div id="re-captcha"></div>
                                    <button type="submit" class="btn btn-block">
                                    <small>SEND E-MAIL</small>
                                    </button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 contact-information">
                        <div>
                            <img class="img-responsive" src="<?php echo get_site_url(); ?>/wp-content/uploads/2019/04/logo.png">
                            <p> <i class="fas fa-map-marker-alt fa-2x"></i>
                              <span>Ljubljanska 6, City Tower floor 1, 1000 Skopje</span>
                           </p>
                           <p> <i class="far fa-envelope fa-2x"></i>
                              <span>contact@itcrowd.me</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

<!-- Content END -->

<script src="https://maps.googleapis.com/maps/api/js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async defer></script>

<?php get_footer(); ?>