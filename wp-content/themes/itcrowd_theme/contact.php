<?php 
//  Template Name: Contact
?>

<?php get_header(); ?>

<!-- Content -->

<div class="container-fluid">

   <div class="row mapouter">
      <div class="mapa gmap_canvas">
         <iframe class="mapa" id="gmap_canvas" src="https://maps.google.com/maps?q=Itcrowd&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
         </iframe>
      </div>
      <style>.mapouter{position:relative;text-align:right;}.gmap_canvas {overflow:hidden;background:none!important;margin-top:-150px}</style>
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
                     <form action="/wordpress/wp-json/contact-form-7/v1/contact-forms/222/feedback" method="POST" id="contact-form">
                           <div class="form-group">
                              <!-- NAME INPUT -->
                              <div class="holder">
                                 <div class="input-holder">
                                    <input class="input" name='your-name' type="text" placeholder=" " required autocomplete="off">
                                    <div class="placeholder">Your name *</div>
                                    <div class="error">Please enter a valid Name</div>
                                 </div>
                              </div>
                              <!-- E-MAIL INPUT -->
                              <div class="holder">
                                 <div class="input-holder">
                                    <input class="input" name="your-email" type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}" placeholder=" " required autocomplete="off">
                                    <div class="placeholder">Your e-mail *</div>
                                    <div class="error">Please enter a valid email</div>
                                 </div>
                              </div>
                              <!-- TEXT AREA -->
                              <div class="holder">
                                 <div class="input-holder">
                                    <textarea class="input" name="your-message" placeholder=" " required autocomplete="off" rows="3"></textarea>
                                    <div class="placeholder placeholder-textarea">Your Message *</div>
                                    <div class="error">Please enter a valid message</div>
                                 </div>
                              </div>
                              <!-- RE-CAPTCHA -->

                              <div class="holder">
                                 <div class="input-holder">
                                    <div class="g-recaptcha" id="re-captcha" data-theme="dark" data-sitekey="6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6" data-callback='onSubmit'></div>
                                    <div class="error re-captcha">Please verify that you are not a robot.</div>
                                 </div>
                              </div>

                              <button type="submit" class="btn btn-block" id="send-contact-form">
                              <small>SEND E-MAIL</small>
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div class="col-lg-0 col-md-0 col-sm-6 col-xs-12 contact-information">
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
                     <form action="/wp-json/contact-form-7/v1/contact-forms/226/feedback" method="POST" id="contact-form-mobile">
                           <div class="form-group">
                              <!-- NAME INPUT -->
                              <div class="holder">
                                 <div class="input-holder">
                                    <input class="input" name="your-name-mobile" type="text" placeholder=" " required autocomplete="off">
                                    <div class="placeholder">Your name *</div>
                                    <div class="error">Please enter a valid Name</div>
                                 </div>
                              </div>
                              <!-- E-MAIL INPUT -->
                              <div class="holder">
                                 <div class="input-holder">
                                    <input class="input" name="your-email-mobile" type="email" placeholder=" " pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}" required autocomplete="off">
                                    <div class="placeholder">Your e-mail *</div>
                                    <div class="error">Please enter a valid email</div>
                                 </div>
                              </div>
                              <!-- TEXT AREA -->
                              <div class="holder">
                                 <div class="input-holder">
                                    <textarea class="input" name='your-message-mobile' placeholder=" " required rows="5" autocomplete="off"></textarea>
                                    <div class="placeholder placeholder-textarea">Your Message</div>
                                    <div class="error">Please enter a valid message</div>
                                 </div>
                              </div>
                              <!-- RE-CAPTCHA -->
                              <div class="holder">
                                 <div class="input-holder" id="re-captcha-1">
                                    <div class="g-recaptcha" id="re-captcha" data-theme="dark" data-sitekey="6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6" data-callback='onSubmit'></div>
                                    <div class="error re-captcha">Please verify that you are not a robot.</div>
                                 </div>
                              </div>
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

<div class="modal fade" id="myModal-error" role="dialog" style="display: none;">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
         <h2 class="modal-title">Successfull</h2>
         </div>
         <div class="modal-body">
            <p>Your message was Successfully sent. Thank you!</p>
         </div>
         <div class="modal-footer">
         <button type="button" class="btn btn-default btn-secondary modal-button-close" data-dismiss="modal">Close</button>
         </div>
      </div>
   </div>
</div>

<!-- Content END -->

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/Contact.js"></script>
<script src="https://www.google.com/recaptcha/api.js?hl=en" async defer></script>

<?php get_footer(); ?>