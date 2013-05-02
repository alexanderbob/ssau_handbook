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
});