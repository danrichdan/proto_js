//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                var movie;
                var first_movie = result.feed.entry[0]["im:image"][2].label;
                var $img;
                var $para2;
                var $para1;
                var director;
                var title;
                console.log(first_movie, director);
                for(var i = 0; i < result.feed.entry.length; i++) {
                    movie = result.feed.entry[i]["im:image"][2].label;
                    director = result.feed.entry[i]["im:artist"].label;
                    title = result.feed.entry[i]["im:name"].label;

                    $img = $('<img src='+movie+'>');
                    $img.appendTo('#main');
                    $para1 = $('<p>'+title+'</p>');
                    $para2 = $('<p>'+director+'</p>');
                    $para1.appendTo('#main');
                    $para2.appendTo('#main');
                }
            }
        });
        console.log('End of click function');
    });
});