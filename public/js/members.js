
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
    










    
