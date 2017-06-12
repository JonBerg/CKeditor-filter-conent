<?php
/**
 * @file
 * Definition of \Drupal\csb_ckeditor\Plugin\CKEditorPlugin
 */
namespace Drupal\csb_ckeditor\Plugin\CKEditorPlugin;
use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginInterface;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\Component\Plugin\PluginBase;
use Drupal\editor\Entity\Editor;
/**
 * Defines the "ckeditorCustomJS" plugin.
 *
 * @CKEditorPlugin(
 *   id = "ckeditorCustomJS",
 *   label = @Translation("Table cells selection"),
 *   module = "csb_ckeditor"
 * )
 */
class CustomJS extends CKEditorPluginBase implements CKEditorPluginInterface, CKEditorPluginContextualInterface {
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getDependencies().
   */
  function getDependencies(Editor $editor) {
    return array();
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
   function getFile() {
     return 'modules/custom/csb_ckeditor/plugin/plugin.js';
   }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getLibraries().
   */
  function getLibraries(Editor $editor) {
    return array();
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::isInternal().
   */
  function isInternal() {
    return FALSE;
  }
  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    return TRUE;
  }
  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return array();
  }
    public function getConfig(Editor $editor) {
      return array();
    }
}
