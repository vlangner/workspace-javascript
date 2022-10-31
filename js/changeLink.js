/* try the jQuery */

$(function(){       // document.ready

    $("a").each(function(){
        $(this).css("text-decoration", "line-through");
        
        $(this).attr('href', "https://www.usca.edu");
    });

    // get image path correct
    $("img").each(function(){
        var image = $(this).attr('src');
        $
    });
});