// import React, { useState, useEffect } from 'react';

// export default function YoutubePlayer({ videoId }) {

//     const [player, setPlayer] = useState(null);

//     useEffect(() => {
//       // Load the YouTube Player API script
//       const tag = document.createElement('script');
//       tag.src = 'https://www.youtube.com/player_api';
//       const firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // Create a new YouTube.Player instance when the API script is loaded
//       window.onYouTubePlayerAPIReady = () => {
//         const newPlayer = new window.YT.Player('player', {
//           height: '360',
//           width: '640',
//           videoId: videoId,
//           playerVars: {
//             autoplay: 1,
//             controls: 1,
//             modestbranding: 1,
//             playsinline: 1,
//           },
//           events: {
//             onReady: onPlayerReady,
//             onStateChange: onPlayerStateChange,
//           },
//         });
//         setPlayer(newPlayer);
//       };

//       // Clean up the player instance when the component unmounts
//       return () => {
//         player.destroy();
//         setPlayer(null);
//       };
//     }, [videoId]);

//     const onPlayerReady = (event) => {
//       event.target.playVideo();
//     };

//     const onPlayerStateChange = (event) => {
//       // Handle changes in player state here
//     };

//     return <div id="player"></div>;
//   ;

// // const [audioUrl, setAudioUrl] = useState('');
// // const apiKey = 'AIzaSyBgcMigbD14H6ING6Z-gXk8BdIZp_qcssY';

// // useEffect(() => {
// //   const getLiveStreamUrl = async () => {
// //     try {
// //       const response = await fetch(
// //         `https://www.googleapis.com/youtube/v3/videos?id=${youtubeUrl}&key=${apiKey}&part=snippet,statistics,liveStreamingDetails`
// //       );
// //       const data = await response.json();
// //       const liveStreamData = data.items[0].liveStreamingDetails;
// //       setAudioUrl(liveStreamData.hlsManifestUrl);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };
// //   getLiveStreamUrl();
// // }, [youtubeUrl]);
