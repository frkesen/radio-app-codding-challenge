import React, { useEffect, useState } from "react";
import "./Channel.scss";

const Channels = () => {
  const [showImage, setShowImage] = useState(false);

  const withImage = () => {
    return (
      <div className="channel_wrapper_image">
        <div className="image_wrapper">
          <img className="radio_image" src={null} alt="" />
        </div>
        <div className="channel_wrapper">
          <span>{null}</span> {/*channel name*/}
          <span>{null}</span> {/*channel frequency*/}
        </div>
      </div>
    );
  };
  const withoutImage = () => {
    return (
      <div className="channel_wrapper">
        <span>{null}</span> {/*channel name*/}
        <span>{null}</span> {/*channel frequency*/}
      </div>
    );
  };

  return (
    <div className="channels">{showImage ? withImage() : withoutImage()}</div>
  );
};

export default Channels;
