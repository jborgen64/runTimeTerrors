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

<<<<<<< HEAD

=======
$.get('https://comicvine.gamespot.com/api/issue/4000-14582/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json')
.then(function(data) {
>>>>>>> aa7e0cc6fb7c623f2aa4067d07c52304411c83b9

  console.log(data);
})
    
    //API call here - set returned value to results


    const results = $('.searchItem').val().trim();
    console.log(results);
    const resultsDisp = $(`<div class="searchInput">${results}<div>`);
    $('.searchResult').append(resultsDisp)
  });


$("#savedTitles").on("click", function() {
  getUserSaved();
})


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

// function to receive user saved data
const getUserSaved = () => {
  $(".searchResult").empty();
  $(".savedComics").empty();
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
        $(".savedComics").append(holder);
      });
    })
    .catch(function(err) {
      console.log(err);
    });
};

// //rotating background for each click
// const backgroundPics = ['superman.jpeg', 'wolverine.jpeg', 'wonder.jpeg', 'martian.jpeg'];

// backgroundPics.forEach(function(pics) {
//     $('.background').css({'background-image': `url(/images/${pics[i]})`);
// });