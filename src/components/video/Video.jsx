const Video = () => {
    return (
      <div className="w-full h-full brightness-50 overflow-hidden">
        <video
          src="../../../public/video-dashboard/gym.mp4"
          autoPlay
          loop
          muted
          width="100%"
          height="auto"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };
  
  export default Video;
  