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
    //check if slided screen have information to display on current scrollTop. 
    //slide to first available info when no info to display
    checkForScroll: function(slider, page) {
        //window.pageYOffset - cur scrolled
        //window.scrollTo(x, y)
        if (slider.rows.length == 1)
        {
            var curY = window.pageYOffset;
            var newHeight = slider.rows[0].cells[page].lastElementChild;
            var newHeight = newHeight.offsetTop + newHeight.offsetHeight;
            var clientHeight = document.documentElement.clientHeight;
            gHelper.trace('curY: ' + curY + '; clientHeight: ' + clientHeight + '; newHeight: ' + newHeight);
            if (curY + clientHeight > newHeight)
            {
                window.scrollTo(0, (newHeight - clientHeight > 0) ? newHeight - clientHeight : 0);
            }
        }
    },

    getNodesHeight: function(list) {
        var sum = 0;
        for (var i = 0; i < list.length; i++)
            sum += list[i].offsetHeight;
        console.log('height: '+sum);
        return sum;
    },

    slideLeft: function (event) {
        //have table cell before current
        if (event.data.pages.curPage < event.data.pages.cntPages - 1)
        {
            //have some nodes to display and they have some height
            var nodes = event.data.slider[0].rows[0].cells[event.data.pages.curPage + 1].children;
            if (nodes.length > 0 /*&& gSliderParams.getNodesHeight(nodes) > 0*/)
            {
                event.data.pages.curPage++;
                var slideTo = -100 * (event.data.pages.curPage) + '%';
                event.data.slider.animate({ 'marginLeft': slideTo }, 350);                event.data.header.animate({ 'marginLeft': slideTo }, 350);
                gSliderParams.checkForScroll(event.data.slider[0], event.data.pages.curPage);
            }
        }
    },

    slideRight: function (event) {
        //have cell after current
        if (event.data.pages.curPage > 0)
        {
            //have some nodes to display and they are visible
            var nodes = event.data.slider[0].rows[0].cells[event.data.pages.curPage-1].children;
            if (nodes.length > 0/* && gSliderParams.getNodesHeight(nodes) > 0*/)
            {
                event.data.pages.curPage--;
                var slideTo = -100 * (event.data.pages.curPage) + '%';
                event.data.slider.animate({ 'marginLeft': slideTo }, 350);                event.data.header.animate({ 'marginLeft': slideTo }, 350);
                gSliderParams.checkForScroll(event.data.slider[0], event.data.pages.curPage);
            }
        }
    }
};