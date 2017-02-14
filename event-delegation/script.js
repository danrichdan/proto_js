// Answer the questions here:

// - What do you think is going to happen?
//I thought that the individual button's text would display

// - What happened?
// if .text was used then every button's text showed at once.
//if .html was used then just button #1 display with each button

// - Why?

//"<li><button style='margin-top: 10px'>Delegated Button#5 Handler</button></li>"
//========== Write your code below ===========//


var $text = $( this ).text();
var $li = $('<li>');
var $button = $("<button>", {
    style: 'margin-top: 10px',
    text: 'Delegated Button#5'
});

var $li2 = $('<li>');

var $button2 = $("<button>", {
    style: 'margin-top: 10px',
    text: 'Delegated Button#6',
    id: 'fritz'
});

$li2.append($button2);

$li.append($button);

$('#list').append($li);
$('#list').append($li2);
// $("#list button").on('click', function() {
//     console.log($("#list button").text());
// });

$('#list').on("click", 'button', function() {
    console.log($( this ).text());
});

$('#list').on("click", 'button[id]', function() {
    console.log($( this ).text());
        window.open('http://www.google.com', '_blank');

});