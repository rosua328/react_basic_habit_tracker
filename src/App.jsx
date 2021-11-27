import styles from './App.module.css';

import React, {useEffect, useState } from 'react';
import VideoList from './Component/video_list/video_list';
import SearchHeader from './Component/search_header/search_header';
import VideoDetail from './Component/video_detail/video_detail';


function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
      .search(query) 
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
     <SearchHeader onSearch={search}/>
     <section className={styles.content}>
       {selectedVideo&&
       <div className={styles.detail}>
       <VideoDetail video={selectedVideo}/>
       </div>}
       <div className={styles.list}>
       <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo?'list': 'grid'}/>
       </div>
     </section>
    </div>
  );
}

export default App;



