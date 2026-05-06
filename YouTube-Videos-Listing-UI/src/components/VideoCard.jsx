const VideoCard = ({ video }) => {
  return (
    <div className="card">
      <img
        src={video.items.snippet.thumbnails.high.url}
        alt={video.items.snippet.title}
      />

      <div className="content">
        <h3>{video.items.snippet.title}</h3>

        <p>{video.items.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;