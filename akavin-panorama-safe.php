<?php
/*
Plugin Name: Akavin Panorama Viewer Safe
Description: Safe isolated panorama viewer
Version: 1.0
*/

if (!defined('ABSPATH')) exit;

define('AKAVIN_SAFE_URL', plugin_dir_url(__FILE__));
define('AKAVIN_SAFE_PATH', plugin_dir_path(__FILE__));

require_once AKAVIN_SAFE_PATH . 'includes/class-safe-assets.php';
require_once AKAVIN_SAFE_PATH . 'includes/class-safe-shortcode.php';

new Akavin_Safe_Assets();
new Akavin_Safe_Shortcode();
