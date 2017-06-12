(function($) {

CKEDITOR.editorConfig.allowedContent = {
    $1: {
        // Use the ability to specify elements as an object.
        elements: CKEDITOR.dtd,
        attributes: true,
        styles: true,
        classes: true
    }
};
CKEDITOR.editorConfig.disallowedContent = 'script; *[on*]; img[height,width]';
CKEDITOR.editorConfig.disableObjectResizing = true;
})(jQuery);
