import axios from 'axios';


    const makeRequest = async function() {
        const response = await axios.get('https://comicvine.gamespot.com/api/issue/4000-14582/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json')
        console.log(response)
    }
    module.exports = makeRequest;

    

//     var issuesearch =

//         (async () => {
//             const response = await axios.get('https://comicvine.gamespot.com/api/issues?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=cover_date:desc')
//                 .console.log(response)
//         })()
//             .catch(function (error) {
//                 console.log(error);
//             });

//     const voulmesearch =

//         axios.get('/https://comicvine.gamespot.com/api/volumes?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name&field_list=name')
//     console.log(response)
// })()
//     .catch(function (error) {
//         console.log(error);
//     });


               // searchparam = $("#search").result()

    // axios.get(`https://comicvine.gamespot.com/api/characters?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:${searchparam}&field_list=name`)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     });

    // axios.get(`https://comicvine.gamespot.com/api/characters?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:${searchparam}&field_list=name`)

module.exports = searcheditem