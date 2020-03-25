import { urlencoded } from "express";

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
    
