// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// from http://stackoverflow.com/a/24137301/4647178
Array.prototype.getRandomElement = function () 
{
    return this[Math.floor((Math.random()*this.length))]
}

// from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
Array.prototype.shuffle = function () 
{
    var currentIndex = this.length, 
        temporaryValue, 
        randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) 
    {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = this[currentIndex]
        this[currentIndex] = this[randomIndex]
        this[randomIndex] = temporaryValue
    }

    return this
}
