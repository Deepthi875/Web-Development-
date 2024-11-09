<?php
/*
Plugin Name: Greeting Plugin
Description: A simple WordPress plugin that adds a [greeting] shortcode.
*/

function greeting_shortcode() {
    return "Welcome to My Site!";
}

add_shortcode('greeting', 'greeting_shortcode');
?>
