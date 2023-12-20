//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang
//= require ./app/_tooltips
//= require ./app/_datepicker
//= require ./app/_scroll
//= require ./cds/standards-category

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
