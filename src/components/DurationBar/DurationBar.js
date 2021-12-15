import React from "react";
import H5AudioPlayer from "react-h5-audio-player";

const DurationBar = (props) => {
  return (
    <div
      style={{
        margin: "0 auto",
        position: "relative",
        width: "98%",
      }}
    >
      {}
      <H5AudioPlayer
        ref={props.audioRef}
        src={props.songURL}
        onCanPlay={() => {
          props.initializeTime();
        }}
        onDragStart={() => {
          return props.playing ? null : props.onDragIndicator();
        }}
        onAbort={() => {
          console.log(props.audioComponent.audio);

          return props.playing
            ? props.audioComponent.audio.play()
            : props.audioComponent.audio.pause();
        }}
        onEnded={() => {
          return props.isShuffleOn ? props.randomizeSong() : props.onEnd();
        }}
        preload="auto"
      />
    </div>
  );
};

export default DurationBar;
