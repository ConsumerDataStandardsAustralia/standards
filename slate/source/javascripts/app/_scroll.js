//= require ../lib/_jquery

;(function () {
  'use strict';

  $(init);

  function scroll(classNames) {
    var $allElements = {};
    $.each(classNames, function(index, value) {
        $allElements[value] = {'elts': $('.tab-'+value), 'last': 0 };
        $allElements[value].last = $allElements[value].elts.length - 1;
    });


    $("#scroll-next").click(function () {
        var minDistance = Number.MAX_SAFE_INTEGER;
        var $nextElement = null;
        var currentPosition = $(window).scrollTop();

        var $activeTab = $($('.lang-selector').find('.active')[0] || $('.lang-selector').find('.tab-selector').first());
        var tabKey = $activeTab.data('languageName');

        if ($allElements[tabKey] !== undefined) {
            var $elementList = $allElements[tabKey].elts;

            $elementList.each(function(index) {
                
                var delta = $(this).position().top - currentPosition - 40;

                if (delta >= 0 && delta < minDistance) { 
                    minDistance = delta;
                    $nextElement = $(this);
                }
            });

            var scrolledToEnd = (Math.ceil(window.scrollY) + window.innerHeight) >= document.body.scrollHeight;
            if (scrolledToEnd) {
              // Even when there is another element to scroll to, it's not possible when already at the end of the page. Reset to the first element.
              $nextElement = null;
            }

            if (!$nextElement) { $nextElement = $($elementList[0]); }

            if($nextElement.length) {
                $('html, body').stop(true).animate({
                    scrollTop: ($nextElement.offset().top - 30)
                }, 800);
            }
        }
        
        return false;
    });

    $("#scroll-prev").click(function () {
        var minDistance = Number.MAX_SAFE_INTEGER;
        var $prevElement = null;
        var currentPosition = $(window).scrollTop();
        var lastIndex = 0;


        var $activeTab = $($('.lang-selector').find('.active')[0] || $('.lang-selector').find('.tab-selector').first());
        var tabKey = $activeTab.data('languageName');

        if ($allElements[tabKey] !== undefined) {
            var $elementList = $allElements[tabKey].elts;
            lastIndex = $allElements[tabKey].last;

            $elementList.each(function(index) {
                
                var delta = currentPosition - 40 - $(this).position().top;

                if (delta >= 0 && delta < minDistance) { 
                    minDistance = delta;
                    $prevElement = $(this);
                }
            });

            if (!$prevElement) { $prevElement = $($elementList[lastIndex]); }

            if($prevElement.length) {
                $('html, body').stop(true).animate({
                    scrollTop: ($prevElement.offset().top - 30)
                }, 800);
            }
        }
        return false;  
    });
  }

  function init() {

    scroll(['examples', 'diff']);

  }

})();