const Video = () => {
    return (
      <div className="w-full h-full brightness-50 overflow-hidden">
        <video
          src="../../../public/video/9943158-uhd-3840-2160-24fps_sEOBgSzB.mp4"
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
  