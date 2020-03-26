
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
let currentUserSavedData = {};

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
    $.get("/api/save/" + currentUser)
      .then(function(response) {
        console.log("I tried to get");
        console.log(response);
        currentUserSavedData = response;

        let holder = $("<div>");
        let displayEl = $("<h1>").text(currentUserSavedData.title);
        let displayEl2 = $("<h1>").text(currentUserSavedData.title1);
        holder.append(displayEl);
        holder.append(displayEl2);


        $(".searchResult").append(holder);


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
