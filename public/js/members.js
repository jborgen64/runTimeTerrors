// gets the current user for later use
let currentUser;
let currentUserSavedData;

$.get("/api/user_data").then(function(data) {
  currentUser = data.id;
});

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

// this code allows me to use $.put and $.delete
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

// function to save new comic to database
const saveNewComic = () => {
  $.get("/api/save/" + currentUser)
    .then(function(response) {
      console.log("I tried to get");
      console.log(response);
      let newValue = prompt("What should I save?");
      let newKey = Math.floor(Math.random() * 100000000000000);

      response[newKey] = newValue;

      $.put("/api/save/" + currentUser, response)
        .then(function() {
          console.log("I tried to put");
        })
        .catch(function(err) {
          console.log(err);
        });
    })
    .catch(function(err) {
      console.log(err);
    });
};

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

// function to receive user saved data
const getUserSaved = () => {
  $(".searchResult").empty();
  $.get("/api/save/" + currentUser)
    .then(function(response) {
      console.log("I tried to get");
      console.log(response);
      currentUserSavedData = Object.values(response);

      currentUserSavedData.forEach(value => {
        let holder = $("<div>");
        let displayEl = $("<h1>").text(value);
        displayEl.addClass("white-text");
        holder.append(displayEl);
        $(".searchResult").append(holder);
      });
    })
    .catch(function(err) {
      console.log(err);
    });
};


    
