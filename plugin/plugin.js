(function ($, Drupal, drupalSettings, CKEDITOR) {

  'use strict';
  CKEDITOR.plugins.add( 'ckeditorCustomJS',{
    icons : '', // optional
    init : function( editor ) {

      var filter = new CKEDITOR.filter( 'p strong em br h2' );
      editor.setActiveFilter( filter );

      editor.on('beforePaste', function (event) {
        //this.setActiveFilter( filter );
        this.setMode( 'source' );
        console.log('before paste');
      });
      editor.on('afterPaste', function (event) {
        this.setMode( 'wysiwyg' );
        console.log('after paste');
      });

    }
  })

})(jQuery, Drupal, drupalSettings, CKEDITOR);
