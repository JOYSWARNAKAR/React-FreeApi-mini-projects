import { useEffect, useState } from "react";
import VideoCard from "./components/VideoCard";

const App = () => {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/videos"
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setVideos(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container">
      <h1>📺 YouTube Videos</h1>

      <div className="videos">
        {videos.map((video, index) => (
          <VideoCard
            key={video.id || index}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

export default App;