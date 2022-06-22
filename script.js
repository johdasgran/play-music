//   fetch('https://audius-discovery-5.cultur3stake.com/v1/tracks/trending?app_name=EXAMPLEAPP',


// const headers = {
//     'Accept':'application/json'
//   };
  
//   fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/trending?app_name=EXAMPLEAPP',
//   {
//     method: 'GET',
  
//     headers: headers
//   })
//   .then(function(res) {
//       return res.json();
//   }).then(function(body) {
//       console.log(body);
//   });

import videoPlayer from "./video.js";
import audioPlayer from "./audio.js";

videoPlayer()
audioPlayer()