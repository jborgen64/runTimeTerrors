const axios = require('axios');


const makeRequest = async function() {


    const config = {
        method: 'GET',
        url: `https://comicvine.gamespot.com/api/volumes/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:asc&filter=name:Walking%20Dead`
    }

    let res = await axios(config)

    console.log(res.status);
}

module.exports = makeRequest;


// $('#button').on('click',function() {

// searchparam = $("#search").val()



//     $.ajax({
//         method: 'GET',
//         data: JSON.stringify(data),
//         url: `https://comicvine.gamespot.com/api/characters?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&filter=name:${searchparam}&field_list=name`
//     }) .then(function (response) {
//             console.log(response);
//         })
      
// });

    // axios.get(`http://localhost:3000/https://comicvine.gamespot.com/api/characters?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:${searchparam}&field_list=name`)
       

// var issuesearch =
//     axios.get('https://comicvine.gamespot.com/api/issues?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=cover_date:desc')
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

// var voulmesearch =
//     axios.get('https://comicvine.gamespot.com/api/volumes?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name&field_list=name')
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         }); 

