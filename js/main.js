// NAV
$('.burgerIcon').hover(function() {
    TweenMax.to('.burgerLine:first-child', 0.2, { x: -10 });
    TweenMax.to('.burgerLine:last-child', 0.2, { x: 10 });
},

    function() {
        TweenMax.to('.burgerLine:first-child', 0.2, { x: 0 });
        TweenMax.to('.burgerLine:last-child', 0.2, { x: 0 });
    }
); 

var tlMenu = new TimelineMax({paused: true});

tlMenu.to('nav', 0.3, { autoAlpha: 1 })
.staggerFromTo('nav li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);

$('.burgerIcon').click(function() {
    tlMenu.play(0);
});

$('.closeButton').click(function() {
    tlMenu.reverse(0);
});

// HERO SECTION

TweenMax.fromTo('#hero h1', 0.6, { y: 80, opacity: 0 }, { y: 0, opacity: 1, delay: 1});

TweenMax.fromTo('#hero .learnMoreButton', 0.6, { y: 80, opacity: 0}, { y: 0, opacity: 1, delay: 1.6, ease:Back.easeOut});