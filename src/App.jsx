import './App.css';

import React, { Component, useEffect, useState } from 'react';
import VideoList from './Component/video_list/video_list';


function App(){
  const [videos, setvideos] = useState([]);

  useEffect(()=>{
  const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCzwPZ90BnZziSsbY1SHsWvfQYJCapOS4A", requestOptions)
  .then(response => response.json())
  .then(result => setvideos(result.items))
  .catch(error => console.log('error', error));
  }, []);

  return<VideoList videos={videos}/>;
}

export default App;



