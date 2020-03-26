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
$(".searchBtn").on("click", function() {
  //API call here - set returned value to results
  // <==================>
  const results = $(".searchItem")
    .val()
    .trim();
  console.log(results);
  const resultsDisp = $(`<div class="searchInput">${results}<div>`);
  $(".searchResult").append(resultsDisp);
});

//================================================================//
//================================================================//

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
let currentUserSavedData;

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

$("#getbutton").on("click", function() {
  $.get("/api/save/" + currentUser)         // might need to put the get data into it's own func
    .then(function(response) {              // we need to get data before we save, so we get the obj
      console.log("I tried to get");        // after we get obj, we need to add to it by doing object.newkey = new value
      console.log(response);
      currentUserSavedData = Object.values(response);

      currentUserSavedData.forEach(value => {     // so we'll get every time, but when we are displaying
        let holder = $("<div>");                   // or the user logs in, we'll just get
        let displayEl = $("<h1>").text(value);
        displayEl.addClass("white-text");
        holder.append(displayEl);
        $(".searchResult").append(holder);
      });
    })
    .catch(function(err) {
      console.log(err);
    });
});

//================================================================//
//================================================================//

// //rotating background for each click
// const backgroundPics = ['superman.jpeg', 'wolverine.jpeg', 'wonder.jpeg', 'martian.jpeg'];

// backgroundPics.forEach(function(pics) {
//     $('.background').css({'background-image': `url(/images/${pics[i]})`);
// });
