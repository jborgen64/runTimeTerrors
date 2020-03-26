
//nav items display dashboard and seach divs
$("#searchDisplay").on("click", function() {
  $(".dashboard").hide(200);
  $(".searchContainer").show(200);
});

$("#dashDisplay").on("click", function() {
  $(".searchContainer").hide(200);
  $(".dashboard").show(200);
});

//when clicked search button will make API call
$('.searchBtn').on('click', function(){

    // var queryURL = `http://comicvine.gamespot.com/api/volumes/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:asc&filter=name:Walking%20Dead`

    // $.ajax({
    //     url: encodeURI(queryURL),
    //     dataType: "jsonp",
    //     method: 'GET'
    // })
    // .then(res => {
    //     console.log(res)
    // })



    //API call here - set returned value to results
    const results = $('.searchItem').val().trim();
    console.log(results);
    const resultsDisp = $(`<div class="searchInput">${results}<div>`);
    $('.searchResult').append(resultsDisp);
  });


// code below is for saving data to database, and receiving data from database //

jQuery.each(["put", "delete"], function(i, method) {
  jQuery[method] = function(url, data, callback, type) {
    if (jQuery.isFunction(data)) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return jQuery.ajax({
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    });
  };
});

let currentUser;

$.get("/api/user_data").then(function(data) {
  currentUser = data.id;
});

$("#savebutton").on("click", function() {
  $.put("/api/save/" + currentUser, {
    title: "newsave",
    title1: "anothernewsave"
  })
    .then(function() {
      console.log("I tried to put");
    })
    .catch(function(err) {
      console.log(err);
    });
});

//display for saved items on dashboard

$('#savedTitles').on('click', function(){
    console.log('pinned clicked!');
    const savedItem = "This is where saved displays go";
    const savedDisplay = $(`<div class="SavedInput">${savedItem}<div>`);
    $('.dashboardDisplay').append(savedDisplay);
});


    
    $('#historyTitles').on('click', function(){
        console.log('history clicked!');
        const historyItem = "This is where recent searches go";
        const historyDisplay = $(`<div class="SavedInput">${historyItem}<div>`);
        $('.dashboardDisplay').append(historyDisplay);
    });
    




$("#getbutton").on("click", function() {
    $.get("/api/save/" + currentUser)
      .then(function(response) {
        console.log("I tried to get");
        console.log(response)
      })
      .catch(function(err) {
        console.log(err);
      });
  });


    
