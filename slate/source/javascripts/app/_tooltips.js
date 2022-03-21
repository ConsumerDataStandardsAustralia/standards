;(function () {
  'use strict';

  $(init);

  function tooltips($elements) {
    $elements.each(function() {
//    $('.ref-link.tooltip').each(function() {
      $(this).addClass('ref-link').addClass('tooltip');
      var ref = $(this).attr('href');
      if (ref != 'undefined') {
        var tooltip_text = $(ref).parent().next().text();
        if (tooltip_text != 'undefined') {
          $(this).attr('data-text',tooltip_text);
        } else {
          $(this).removeClass('tooltip');
        }
      } else {
        $(this).removeClass('tooltip');
      }
    });
  }

  function init() {

    tooltips($('a[href^="#nref-"]'));
    tooltips($('a[href^="#iref-"]'));

  }
})();
