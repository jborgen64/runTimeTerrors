var searcheditem = require('../../controller/');

//nav items display dashboard and seach divs
$('#searchDisplay').on('click', function(){
    $('.dashboard').hide(200);
    $('.searchContainer').show(200);
});

$('#dashDisplay').on('click', function(){
    $('.searchContainer').hide(200);
    $('.dashboard').show(200);
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
// <==================>
    const results = $('.searchItem').val().trim();
    console.log(results);
    const resultsDisp = $(`<div class="searchInput">${results}<div>`);
    $('.searchResult').append(resultsDisp);
});


// //rotating background for each click
// const backgroundPics = ['superman.jpeg', 'wolverine.jpeg', 'wonder.jpeg', 'martian.jpeg'];

// backgroundPics.forEach(function(pics) {
//     $('.background').css({'background-image': `url(/images/${pics[i]})`);
// });
    
