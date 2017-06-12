(function($) {
console.log("start");
CKEDITOR.replace( 'ckeditorCustomJS', {
  extraAllowedContent: 'u;span{color}'
} );
})(jQuery);
