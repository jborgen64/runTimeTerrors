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
});

$("#getbutton").on("click", function(event) {
  $(".searchResult").empty();
  $.get("/api/save/" + currentUser)        
    .then(function(response) {             
      console.log("I tried to get");        // after we get obj, we need to add to it by doing object.newkey = new value
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
});

//================================================================//
//================================================================//

// //rotating background for each click
// const backgroundPics = ['superman.jpeg', 'wolverine.jpeg', 'wonder.jpeg', 'martian.jpeg'];

// backgroundPics.forEach(function(pics) {
//     $('.background').css({'background-image': `url(/images/${pics[i]})`);
// });
