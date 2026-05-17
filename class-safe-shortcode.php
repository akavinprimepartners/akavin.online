<?php

class Akavin_Safe_Shortcode {

    public function __construct() {
        add_shortcode('akavin_panorama_safe', [$this, 'render']);
    }

    public function render() {

        ob_start();
        ?>

        <div class="akv-safe-wrapper">
            <div id="akv-safe-panorama"></div>
        </div>

        <?php
        return ob_get_clean();
    }
}
