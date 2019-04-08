<?php

add_action( 'wp_enqueue_scripts', 'load_stylesheet');

function load_stylesheet() {
  wp_enqueue_style( 'bootstrap.min', get_stylesheet_directory_uri() . '/assets/bootstrap-3.3.7-dist/css/bootstrap.min.css' );
  wp_enqueue_style( 'fontawesome', get_stylesheet_directory_uri() . '/assets/fontawesome-free-5.8.1/css/regular.min.css' );
  wp_enqueue_style( 'slick', get_stylesheet_directory_uri() . '/assets/slick/slick.css' );

  wp_enqueue_style( 'parent-style', get_stylesheet_directory_uri() . '/style.css' );
  
  wp_enqueue_script( 'jquery3.1.1', get_stylesheet_directory_uri() . '/assets/jQuery/jQuery3.3.1.js' );
  wp_enqueue_script( 'bootstrap.min', get_stylesheet_directory_uri() . '/assets/bootstrap-3.3.7-dist/js/bootstrap.min.js' );
  wp_enqueue_script( 'slick.min', get_stylesheet_directory_uri() . '/assets/slick/slick.min.js' );

  wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.js' );
}