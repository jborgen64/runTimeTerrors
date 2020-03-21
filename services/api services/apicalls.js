$('#search').on('submit',function() {

searchparam = $("#search").val()

    axios.get(`http://localhost:3000/https://comicvine.gamespot.com/api/characters?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:${searchparam}&field_list=name`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
});

// var issuesearch =
//     axios.get('http://localhost:3000/https://comicvine.gamespot.com/api/issues?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=cover_date:desc')
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

// var voulmesearch =
//     axios.get('http://localhost:3000/https://comicvine.gamespot.com/api/volumes?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name&field_list=name')
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         }); 


