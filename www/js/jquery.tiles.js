$(document).delegate('[data-role=page]', 'pageinit', function (event) {
    $('.medium_tile').on('mousedown', function () {
        $(this).animate(
            { borderSpacing: 2 },
            {
                step: function (now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            },
            'linear'
        ).animate(
            { borderSpacing: 0 },
            {
                step: function (now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            },
            'linear'
        );
    });

    $('.mini_tile').on('mousedown', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(miniTileMouseDownTimeout, 200, this);
    });

    miniTileMouseDownTimeout = function(node)
    {
        node.style.transform = 'scale(1)';
    }
});