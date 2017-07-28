//Getting the form stuff


var =	startDate,
	endDate,
	numResults;


$(document).ready(function() {
  $('#searchButton').on('click', function(event) {
  event.preventDefault;
  var searchTerm = $('.form-control').val();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apiKey=af1092c2054a4083979a0e99efca6d72?&q=" + searchTerm + "?begin_date=" + startDate + "?end_date=" + endDate;

  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(result) {
    console.log(result);
    for (var i = 0; i <= numResults; i++) {
      console.log(i);
   };
  }).fail(function(err) {
    throw err;
  });
});

})





