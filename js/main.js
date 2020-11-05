
$('.burgerIcon').hover(function() {
    TweenMax.to('.burgerLine:first-child', 0.2, { x: -10 });
    TweenMax.to('.burgerLine:last-child', 0.2, { x: 10 });
},

    function() {
        TweenMax.to('.burgerLine:first-child', 0.2, { x: 0 });
        TweenMax.to('.burgerLine:last-child', 0.2, { x: 0 });
    }
); 