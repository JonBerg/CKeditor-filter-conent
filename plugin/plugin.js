(function($) {

CKEDITOR.plugins.add('ckeditorCustomJS', {
  init: function (editor) {
    editor.config.allowedContent = {
        $1: {
            // Use the ability to specify elements as an object.
            elements: CKEDITOR.dtd,
            attributes: true,
            styles: true,
            classes: true
        }
    };
    editor.config.disallowedContent = 'u;u{color}';

    var replaceCommand = editor.addCommand( 'replace', new CKEDITOR.dialogCommand( 'replace' ) );
    replaceCommand.disAllowedContent = 'u;u{color}';


    plugin = CKEDITOR.plugins.ckeditorCustomJS;
    editor.config.disallowedContent = true
    editor.addCommand( 'ckeditorCustomJS', {
      disallowedContent: 'u;u{color}',
      contextSensitive: true,

    });
    editor.config.disallowedContent = 'u';
  //  console.log('asfdf');
    var pluginName = 'customfilter';
    editor.dataProcessor.dataFilter.addRules({
        elements :
        {
    $ : function( element )
            {
                //delete element.name;
              //  console.log(element.name);
                if (element.name == 'span') {
                     if(element.attributes.style) {
                    //   // console.loh();
                    // var string = "foo",
                    // substring = "o";
                    // string.indexOf(substring) !== -1;
                    // console.log(element.attributes.style);
                        delete element.name;//attributes.style;
                     }
                }
            }
        }
    });
    editor.dataProcessor.htmlFilter.addRules({
        elements :
        {
    $ : function( element )
            {
                //delete element.name;
                if (element.name == 'span') {
                     if(element.attributes.style) {
                    //   // console.loh();
                          console.log('work2');
                        delete element.name;//attributes.style;
                     }
                }
            }
        }
    });
  }

});
console.log("end");
})(jQuery);
