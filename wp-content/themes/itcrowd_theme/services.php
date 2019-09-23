<?php 
//  Template Name: Our Services
?>

<?php get_header(); ?>

<!-- Content -->
<div class="container-fluid blur-modal">
        <div class="row our-services">
<h2 class="text-center">Services</h2>
            <hr>
            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 test">

                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 box-container-services">
                        <h3 class="text-center">Technology <span>Consalting</span></h3>
                        <i class="fas fa-clipboard-list"></i>
                        <div>
                            <p>We help our clients and partners in making the best possible decisions and adopting or building the best possible products and solutions regarding their needs and their plans for the future.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 box-container-services even-box-services">
                        <h3 class="text-center">Software <span>Development</span></h3>
                        <i class="fas fa-laptop-code"></i>
                        <div>
                            <p>We help our clients and partners in making the best possible decisions and adopting or building the best possible products and solutions regarding their needs and their plans for the future.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 box-container-services">
                        <h3 class="text-center">Digital <span>Marketing</span></h3>
                        <i class="fas fa-bullhorn"></i>
                        <div>
                            <p>We help our clients and partners in making the best possible decisions and adopting or building the best possible products and solutions regarding their needs and their plans for the future.</p>
                        </div>
                    </div>
                </div>
                
            </div>
         </div>
         <div class="row blur-modal">
                  <div class="col-lg-6 col-lg-offset-3 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
                     <button type="button" id="button-hire-us" class="btn center-block" data-toggle="modal" data-target="#exampleModal">
                     HIRE US
                     </button>
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
                <form action="/wp-json/contact-form-7/v1/contact-forms/227/feedback" method="POST" id="hire-us-form">
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
                              <input class="input" name="your-email" type="email" placeholder=" " pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}" required autocomplete="off">
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
                            <div class="g-recaptcha" id="re-captcha" data-sitekey="6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6" data-callback='onSubmit'></div>
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
<script src="https://www.google.com/recaptcha/api.js?hl=en" async defer></script>

<?php get_footer(); ?>