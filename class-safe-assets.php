<?php

class Akavin_Safe_Assets {

    public function __construct() {
        add_action('wp_enqueue_scripts', [$this, 'enqueue']);
    }

    public function enqueue() {

        global $post;

        if (!is_a($post, 'WP_Post')) return;

        if (!has_shortcode($post->post_content, 'akavin_panorama_safe')) {
            return;
        }

        wp_enqueue_style(
            'akavin-safe-css',
            AKAVIN_SAFE_URL . 'assets/css/panorama-safe.css',
            [],
            '1.0'
        );

        wp_enqueue_script(
            'three-js',
            'https://cdn.jsdelivr.net/npm/three/build/three.min.js',
            [],
            null,
            true
        );

        wp_enqueue_script(
            'photo-sphere',
            'https://unpkg.com/@photo-sphere-viewer/core/index.js',
            ['three-js'],
            null,
            true
        );

        wp_enqueue_script(
            'akavin-safe-js',
            AKAVIN_SAFE_URL . 'assets/js/panorama-safe.js',
            [],
            '1.0',
            true
        );

        wp_localize_script('akavin-safe-js', 'AKAVIN_SAFE', [
            'image' => AKAVIN_SAFE_URL . 'assets/images/sample-room.jpg'
        ]);
    }
}
