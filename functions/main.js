function myMessage() {
    console.log('This is a groovy-esque function!  Well, not really.');
};

function add(x,y) {
    var result = x + y;
    console.log(result);
};

function add2(x,y) {
    var total = x + y;
    return total;
};

var add2result = add2(22,11);

function cardFlip(element) {
    $(element).hide();
};


var result = add2(add2(10, 5), add2(20, 30));
console.log(result);
