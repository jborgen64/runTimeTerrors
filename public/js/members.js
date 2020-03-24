//nav items display dashboard and seach functions
$('#searchDisplay').on("click", function(){
    $('.dashboard').hide(200);
    $('.searchContainer').show(200);
});

$('#dashDisplay').on("click", function(){
    $('.searchContainer').hide(200);
    $('.dashboard').show(200);
});