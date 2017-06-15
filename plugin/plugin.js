(function ($, Drupal, drupalSettings, CKEDITOR) {

  'use strict';
  CKEDITOR.plugins.add( 'ckeditorCustomJS',{
    icons : '', // optional
    init : function( editor ) {
      var filter = new CKEDITOR.filter('p(*){*}[*]; h1(*){*}[*]; h2(*){*}[*]; h3(*){*}[*]; h4(*){*}[*]; h5(*){*}; h6(*){*}[*]; span(*){*}[*]; div(*){*}[*]; table(*){*}[*]; thead(*){*}[*]; tfoot(*){*}[*]; td(*){*}[*]; th(*){*}[*]; tr(*){*}[*]; tbody(*){*}[*]; ul(*){*}[*]; li(*){*}[*]; strong(*){*}[*]; em(*){*}[*]; sup(*){*}[*]; sub(*){*}[*]; u(*){*}[*]; pre(*){*}[*]; a(*){*}[*]; ol(*){*}[*]; img(*){*}[*]; image(*){*}[*]; form(*){*}[*]; input(*){*}[*]; s(*){*}[*]; cite(*){*}[*]; code(*){*}[*]; dl(*){*}[*]; figure(*){*}[*]; nav(*){*}[*];');
      filter.disallow( 'p{color, font-size, font-family}; u{color, font-size, font-family}; span{color, font-size, font-family}; p{color, font-size, font-family}; td{color, font-size, font-family}; th{color, font-size, font-family}; tr{color, font-size, font-family}; table{color, font-size, font-family}; tbody{color, font-size, font-family}; thead{color, font-size, font-family}; tfoot{color, font-size, font-family};' );
      editor.setActiveFilter( filter );
      editor.on('beforePaste', function (event) {
      this.setActiveFilter( filter );
        console.log('bbefore paste');
      });
      editor.on('afterPaste', function (event) {
           this.setMode( 'wysiwyg' );
      });

    }
  })

})(jQuery, Drupal, drupalSettings, CKEDITOR);
