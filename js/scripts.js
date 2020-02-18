jQuery(document).ready(function(){
jQuery('h1').click(function(){
    alert("This is heading tag");
    alert("I TOLD YOU THIS IS A HEADER!");
});
jQuery('p').click(function(){
    alert("This is the paragraph");
});
jQuery('img').click(function(){
    alert("This is an image");
});
});

jQuery(document).ready(function(){
    jQuery("p").click(function(){
        jQuery('img').show();
    });
});

jQuery(document).ready(function(){
    jQuery(".clickable").click(function(){
        jQuery("#walrus-hidden").toggle();
        jQuery("#walrus-showing").toggle();
    });
});