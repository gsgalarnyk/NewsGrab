//Getting the form stuff
var startDate,
  endDate;
$(document).ready(function() {
  $('#searchButton').on('click', function(event) {
    var startDate = $('#startYear').val();
    var endDate = $('#endYear').val();
    var numResults = $('#numberToReturn').val();
    var searchTerm = $('.form-control').val();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + searchTerm;
    $('#divToDump').empty();

    if (startDate !== '') {
      url = url + '&begin_date=' + startDate + '0101';
    };

    if(endDate !== '') {
      url = url + '&end_date=' + endDate + '0101';
    };

 
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(result) {
      console.log(result);
      for (var i = 0; i <= numResults; i++) {
        console.log(i);
        var storyContainer = $('<div>');
        storyContainer.attr('id', numResults);
        $('#divToDump').append(storyContainer);
        $('#' + numResults).append(
          '<br>' + result.response.docs[i].headline.main + 
          '<br>' + '<a href="' + result.response.docs[i].web_url + '"> ' + result.response.docs[i].web_url + ' </a>'
          );        
     };
    }).fail(function(err) {
      throw err;
    });
  });

});



