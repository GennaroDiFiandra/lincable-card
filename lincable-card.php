<?php declare(strict_types=1); defined('WPINC') || die;

/*
  Plugin Name: Lincable Card
  Plugin URI: #
  Author: Gennaro Di Fiandra
  Author URI: #
  Description: A block to add a lincable card with a title, a content and an icon.
  Version: 1.0.0
  Text Domain: lincable-card
  Domain Path: /languages
  Requires at least: 6.0
  Requires PHP: 7.4
  License: GPLv2 or later
  License URI: https://www.gnu.org/licenses/gpl-2.0.html

  @package           create-block
*/

add_action('init', function() { register_block_type( __DIR__ . '/build' ); });