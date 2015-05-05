//= require vanilla-masker.min

VMasker(document.querySelector("#mask-phone")).maskPattern("(99) 9999-99999");

var smooth_scroll_to = function(element, target, duration) {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("bad duration");
    }
    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    var start_time = Date.now();
    var end_time = start_time + duration;

    var start_top = element.scrollTop;
    var distance = target - start_top;

    var smooth_step = function(start, end, point) {
        if(point <= start) { return 0; }
        if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
    }

    return new Promise(function(resolve, reject) {
        var previous_top = element.scrollTop;

        var scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }

            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            if(now >= end_time) {
                resolve();
                return;
            }

            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;

            setTimeout(scroll_frame, 0);
        }

        setTimeout(scroll_frame, 0);
    });
}

var destPlace = document.querySelector('.js-contact');
var btnScroll = document.querySelector('.js-contact-btn');
var lowerTop = destPlace.getBoundingClientRect().top;

btnScroll.addEventListener('click', function () {
  smooth_scroll_to(document.documentElement, lowerTop, 1000);
});
