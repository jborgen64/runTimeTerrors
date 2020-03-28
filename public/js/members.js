// gets the current user for later use
let currentUser;
let currentUserSavedData;

//opens modal
$(document).ready(function() {
  $(".modal").modal();
});

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
$(".searchBtn").on("click", function() {
  //empty div for new content
  $(".issueDisplay").empty();

  //gets character input from the user search
  const character = $(".searchItem")
    .val()
    .trim();

  //this calls to our backend api to proxy around the CORS error we are getting
  $.get("api/comicvine/:" + character, function(res) {
    console.log(res);

    // for loop for looping throuh all of the results
    var issueArr = [];

    for (var i = 0; i < res.results.length; i++) {
      //object housing info from our get request
      var issue = {
        title: res.results[i].name,
        cover: res.results[i].image.medium_url,
        issuenum: res.results[i].issue_number,
        issueId: res.results[i].id
      };

      //pushing issues into empty array
      issueArr.push(issue);

      console.log(issueArr);
      console.log(issueArr.length);
      //creating a card to display comic issue content in

      var displayIssue = `
    <div class="row issueCard">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img src="${issueArr[i].cover}">
          </div>
          <div class="card-content">
            <p>${issueArr[i].title}, issue: ${issueArr[i].issuenum}</p>
          </div>
          <div class="card-action">
            <button class="savecomic">save</button>
          </div>
        </div>
      </div>
    </div>`;

      $(".issueDisplay").append(displayIssue);
    }

    if (issueArr.length === 0) {
      $(".issueDisplay").append(`<h1>please broaden your search</h1>`);
    }
  });
});

// // search based on id for specific character

//   const id = $('.searchItem').val().trim();

//       $.get("api/comicvine/character/" + id, function(res){
//         console.log(res);
//   // const resultsDisp = $(`<div class="searchInput">${results}<div>`);
//   // $('.searchResult').append(resultsDisp)
//   });

// $("#savedTitles").on("click", function() {
//  getUserSaved();
//   })

// // // search for issues based on ID number

//   const id = $('.searchItem').val().trim();

//       $.get("api/comicvine/issues/" + id, function(res){
//         console.log(res);
//   // const resultsDisp = $(`<div class="searchInput">${results}<div>`);
//   // $('.searchResult').append(resultsDisp)
// });

// $("#savedTitles").on("click", function() {
// getUserSaved();
// })

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
const saveNewComic = (title, issueNum, urlPic) => {
  $.get("/api/save/" + currentUser)
    .then(function(response) {
      console.log("I tried to get");
      console.log(response);

      let newObj = {};
      newObj.title = title;
      newObj.urlPic = urlPic;
      newObj.issueNum = issueNum;

      response.savingArray.push(newObj);

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

$(".issueDisplay").on("click", ".savecomic", function() {
  saveNewComic("faketitle", "fakeissuenum", "fakeurl");
  console.log("someone clicked the save comic button");
});

$("#savedTitles").on("click", function() {
  $(".issueDisplay").empty();
  $.get("/api/save/" + currentUser)
    .then(function(response) {
      console.log("I tried to get");
      console.log(response);

      var savedArray = response.savingArray;
      let issueArr = [];

      for (var i = 0; i < savedArray.length; i++) {
        //object housing info from our get request
        var issue = {
          title: savedArray[i].title,
          cover: savedArray[i].urlPic,
          issueNum: savedArray[i].issueNum
        };

        //pushing issues into empty array
        issueArr.push(issue);

        console.log(issueArr);
        console.log(issueArr.length);
        //creating a card to display comic issue content in

        var displayIssue = `
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="${issueArr[i].cover}">
            </div>
            <div class="card-content">
              <p>${issueArr[i].title}</p>
            </div>
            <div class="card-action">
              <button class="savecomic">save</button>
            </div>
          </div>
        </div>
      </div>`;

        $(".issueDisplay").append(displayIssue);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
});

