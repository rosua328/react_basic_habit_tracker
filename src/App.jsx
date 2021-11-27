import styles from './App.module.css';

import React, { Component, useEffect, useState } from 'react';
import VideoList from './Component/video_list/video_list';
import SearchHeader from './Component/search_header/search_header';


function App({youtube}){
  const [videos, setvideos] = useState([]);
const search = query =>{
  youtube
  .search(query)
  .then(videos => setvideos(videos));
};

  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setvideos(videos));
  }, []);

  return(
  <div className={styles.app}>
  <SearchHeader onSearch={search}/>
  <VideoList videos={videos}/>
  </div>
  );
}

export default App;



