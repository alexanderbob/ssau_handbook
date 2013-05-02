$(document).delegate("[data-role=page]", "pagebeforeshow", function () {
    var slider = $(this).find("[data-role=pageSlider]");
    var header = $(this).find("[data-role='header']");
    if (slider.length > 0) {
        if (slider[0].jqSlider) {
            ;
        }
        else {
            var cntPages = slider[0].rows[0].cells.length;
            var w = cntPages * 100 + '%';
            slider[0].style.width = w;
            header[0].style.width = w;
            var pages = { 'curPage': 0, 'cntPages': cntPages };
            var jqSlider = {
                'slider': slider,
                'header': header,
                'pages' : pages
            };
            slider[0].jqSlider = jqSlider;
        }
        $(document).on('swipeleft', slider[0].jqSlider, gSliderParams.slideLeft);        $(document).on('swiperight', slider[0].jqSlider, gSliderParams.slideRight);
    }
});

$(document).delegate("[data-role=page]", 'pagebeforehide', function () {
    $(document).off('swipeleft', gSliderParams.slideLeft);
    $(document).off('swiperight', gSliderParams.slideRight);
});

var gSliderParams = {
    slideLeft: function (event) {
        //alert('left');
        if (event.data.pages.curPage < event.data.pages.cntPages - 1) {
            event.data.pages.curPage++;
            var slideTo = -100 * (event.data.pages.curPage) + '%';
            event.data.slider.animate({ 'marginLeft': slideTo }, 350);            event.data.header.animate({ 'marginLeft': slideTo }, 350);
        }
    },

    slideRight: function (event) {
        //alert('right');
        if (event.data.pages.curPage > 0) {
            event.data.pages.curPage--;
            var slideTo = -100 * (event.data.pages.curPage) + '%';
            event.data.slider.animate({ 'marginLeft': slideTo }, 350);            event.data.header.animate({ 'marginLeft': slideTo }, 350);
        }
    }
};