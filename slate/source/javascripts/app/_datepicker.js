//= require ../lib/_jquery
//= require ../lib/_datepicker

;(function () {
  'use strict';

  $(init);

  function highlight(endDate, $participantObligations) {

        $participantObligations.each(function(index) {
            if ( !isValidDate(endDate) ) {
                $(this).removeClass();
            } else {
                var bindingDateString = $(this).find("td").eq(5).text();
                var bindingDate = stringToDate(bindingDateString, 3,2,1);

                var retirementDateString = $(this).find("td").eq(6).text()
                var retirementDate = stringToDate(retirementDateString, 3,2,1);

                //var deprecationDate = stringToDate($(this).find("td").eq(7).text(), 3,2,1);

                var today = new Date();
                var threeMonthsAgo = new Date(); threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

                // reset
                var milestoneDate = isValidDate(endDate) ? endDate : today;
                var decoration = "";
                $(this).removeClass();

                // determine obligation decoration
                if (isValidDate(retirementDate) && (milestoneDate >= retirementDate) ) {
                    decoration = "retired-obligation"; 
                } else if ( isValidDate(bindingDate) ) {
                    if ( milestoneDate >= bindingDate ) {
                        if (isValidDate(retirementDate) && milestoneDate < retirementDate) {
                            decoration = "deprecated-obligation"; 
                        } else {
                            decoration = "active-obligation"; 
                        }
                    } else if ( bindingDate <= threeMonthsAgo ) {
                        decoration = "emerging-obligation"; 
                    } else if ( milestoneDate < bindingDate ) {
                        decoration = "future-obligation"; 
                    } else {
                        decoration = "inactive-obligation"; 
                    }
                }

                $(this).addClass(decoration);
                
            }
        });
  }

  function isValidDate(dateObject) {
    return !isNaN(dateObject.valueOf());
  }

  function isDate(dateString, dayPosition=1, monthPosition=2, yearPosition=3) {

    var dateObject = stringToDate(dateString, dayPosition, monthPosition, yearPosition)

    return isValidDate(dateObject);
  }


  function stringToDate(dateString, dayPosition=1, monthPosition=2, yearPosition=3) {
    if (Math.min(dayPosition, monthPosition, yearPosition) != 1 || 
        Math.max(dayPosition, monthPosition, yearPosition) != 3 ) { return new Date("NaN"); }

    if (!dateString) { return new Date("NaN"); }

    var dateParts = dateString.split(/(?:-|\/)+/);

    if (dateParts.length != 3) { return new Date("NaN"); }

    // month is 0-based, that's why we need dateParts[1] - 1
    return new Date(+dateParts[yearPosition-1], dateParts[monthPosition-1] - 1, +dateParts[dayPosition-1].replace(/\*|†|‡/g, "")); 
  }

  function eltToDate($dateObject) {
    return isDate($dateObject.val()) ? $dateObject.datepicker('getDate') : new Date("NaN");
  }


  function init() {

      $('.content table').addClass('obligations');
      var $participantObligations = $('.obligations tr');
      var $endDate = $('#end-date');

      var options = {
        autoHide: true,
        language: 'en-GB',
        format: 'dd/mm/yyyy'
      }

      $endDate.datepicker(options);

      
      $endDate.on('change', function () {
            var endDate = eltToDate($endDate);
            if ( isValidDate(endDate) ) {
                $("#date-picker").addClass("date-chosen");
                $("#date-picker .cancel").removeClass("hide");
                $("#date-picker .cancel").show();
            } else {
                $("#date-picker").removeClass("date-chosen");
                $("#date-picker .cancel").addClass("hide");
                $("#date-picker .cancel").hide();
            }

            highlight(endDate, $participantObligations);
      });

      $("#date-picker .cancel").on('click', function () {
        $("#date-picker input").val('');
        $("#date-picker").removeClass("date-chosen");
        $("#date-picker .cancel").addClass("hide");
        $("#date-picker .cancel").hide();
        var endDate = eltToDate($endDate);
        highlight(endDate, $participantObligations);
      });

      $(".collapse-obligations-toggle input").on('click', function () {
        $(".obligations").toggleClass('collapse-obligations');
      });

  }

})();
